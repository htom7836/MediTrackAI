export type Medication = { id: string; name: string; dose: string; time: string; note: string; startDate: string };
export type DoseRecord = { id: string; medicationId: string; name: string; time: string; date: string; status: 'taken' | 'skipped'; recordedAt: string };
export type Trial = { id: string; tester: string; task: string; outcome: 'independent' | 'assisted' | 'failed'; seconds: number; errors: number; feedback: string };
export type Improvement = { id: string; feedback: string; change: string; status: 'planned' | 'implemented'; retest: string };
export type DemoState = { medications: Medication[]; records: DoseRecord[]; trials: Trial[]; improvements: Improvement[]; largeText: boolean };
export const STORAGE_KEY = 'meditrack-demo-v1';
export const TASKS = ['Add a medication', 'Find the next reminder', 'View medication history', 'Confirm a dose', 'Reject invalid input', 'Navigate between screens'];
export function localDate(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function clockMinutes(time: string) { const [h,m]=time.split(':').map(Number); return h*60+m; }
export function formatTime(time: string) { const [h,m]=time.split(':').map(Number); return `${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`; }
export function validateMedication(m: Pick<Medication,'name'|'dose'|'time'>, existing: Medication[] = [], id?: string) {
  if (!m.name.trim()) return 'Enter a medication name.';
  if (m.name.trim().length > 60) return 'Keep the medication name under 61 characters.';
  if (!m.dose.trim()) return 'Enter the dose from the fictional prescription.';
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(m.time)) return 'Choose a valid reminder time.';
  if(existing.some(e=>e.id!==id&&e.name.toLowerCase().trim()===m.name.toLowerCase().trim()&&e.time===m.time)) return 'This medication already has a reminder at that time.';
  return '';
}
export function scheduled(meds:Medication[], date=localDate()) {return meds.filter(m=>m.startDate<=date).sort((a,b)=>a.time.localeCompare(b.time));}
export function todayRecord(records:DoseRecord[], id:string, date=localDate()) {return records.find(r=>r.medicationId===id&&r.date===date);}
export function recordDose(state:DemoState, med:Medication, status:DoseRecord['status'], now=new Date()):DemoState {
  const date=localDate(now);
  if(todayRecord(state.records,med.id,date)) return state;
  return {...state,records:[{id:crypto.randomUUID(),medicationId:med.id,name:med.name,time:med.time,date,status,recordedAt:now.toISOString()},...state.records]};
}
export function completion(meds:Medication[],records:DoseRecord[],date=localDate()) {
 const list=scheduled(meds,date); const taken=list.filter(m=>todayRecord(records,m.id,date)?.status==='taken').length;
 return {total:list.length,taken,percent:list.length?Math.round(taken/list.length*100):0};
}
export function taskSummary(trials:Trial[],task:string){const latest=new Map<string,Trial>();trials.filter(t=>t.task===task).forEach(t=>latest.set(t.tester.trim().toLowerCase(),t));const items=[...latest.values()];return {participants:items.length,independent:items.filter(t=>t.outcome==='independent').length,mean:items.length?Math.round(items.reduce((a,t)=>a+t.seconds,0)/items.length):0,errors:items.reduce((a,t)=>a+t.errors,0),meetsTarget:items.length>=5&&items.filter(t=>t.outcome==='independent').length/items.length>=.8};}
export function seedState():DemoState {const date=localDate();return {medications:[{id:'sample-a',name:'Medication A',dose:'1 sample tablet',time:'08:00',note:'Fictional prescription',startDate:date},{id:'sample-b',name:'Medication B',dose:'1 sample capsule',time:'13:00',note:'Fictional prescription',startDate:date},{id:'sample-c',name:'Medication C',dose:'1 sample tablet',time:'20:00',note:'Fictional prescription',startDate:date}],records:[{id:'sample-record',medicationId:'sample-a',name:'Medication A',time:'08:00',date,status:'taken',recordedAt:new Date().toISOString()}],trials:[],improvements:[],largeText:false};}
export function readStored():DemoState|null {try {const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return null;const s=JSON.parse(raw);if(!s||!Array.isArray(s.medications)||!Array.isArray(s.records)||!Array.isArray(s.trials)||!Array.isArray(s.improvements))return null;
 if(!s.medications.every((m:Medication)=>m&&typeof m.id==='string'&&typeof m.name==='string'&&typeof m.dose==='string'&&typeof m.time==='string'&&typeof m.note==='string'&&typeof m.startDate==='string'&&!validateMedication(m)))return null;
 if(!s.records.every((r:DoseRecord)=>r&&['id','medicationId','name','time','date','recordedAt'].every(k=>typeof (r as unknown as Record<string,unknown>)[k]==='string')&&['taken','skipped'].includes(r.status)))return null;
 if(!s.trials.every((t:Trial)=>t&&typeof t.id==='string'&&typeof t.tester==='string'&&TASKS.includes(t.task)&&['independent','assisted','failed'].includes(t.outcome)&&Number.isFinite(t.seconds)&&t.seconds>=0&&Number.isInteger(t.errors)&&t.errors>=0&&typeof t.feedback==='string'))return null;
 if(!s.improvements.every((i:Improvement)=>i&&typeof i.id==='string'&&typeof i.feedback==='string'&&typeof i.change==='string'&&['planned','implemented'].includes(i.status)&&typeof i.retest==='string'))return null;
 return {...s,largeText:s.largeText===true};}catch{return null;}}
export function assistantAnswer(question:string){const q=question.toLowerCase();if(/adherence|mean|terminology/.test(q))return 'Medication adherence means following the treatment plan agreed with a healthcare professional. This demo only counts self-reported confirmations; it cannot verify that a medicine was taken.';if(/add|save|schedule/.test(q))return 'Open Today’s schedule, choose Add medication, enter a fictional name, prescribed dose and daily time, then save. The app displays the reminder while this page is open.';if(/privacy|data|store|secure/.test(q))return 'By default, your fictional records stay in this tab’s memory. If you enable Remember demo, they are stored unencrypted in this browser. You can clear them in Settings. Do not enter real patient information.';if(/history|taken|record/.test(q))return 'Choose Medication history to review confirmations. Taken is a self-reported status, not proof of medication use. You can undo a confirmation from today’s schedule.';return 'This scripted educational demo cannot assess symptoms, choose medicines, explain personal side effects or recommend a dose. Ask a qualified doctor or pharmacist about your own medication. I can explain adherence, demo navigation, history or privacy.';}
