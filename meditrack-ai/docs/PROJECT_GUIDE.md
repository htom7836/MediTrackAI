# Project handover: Sections 1–3

## Assessment alignment

| Assessment area | Weight in brief | Evidence |
| --- | --- | --- |
| Problem definition and platform concept | 20 marks | The idea page: problem, users, needs, goals, system diagram and management plan |
| Prototype, user experience and ethics | 20 marks | Working schedule, history, assistant, validation, settings and design/privacy documentation |
| Platform demonstration | Part of a combined criterion | Complete interactive workflow and a guided live-demo slide |
| Presentation and responses to questions | 30 marks | Seven-slide presentation, written report, future development and expandable Q&A notes |

This map describes evidence for the requested sections. It does not reallocate the original rubric or guarantee a grade.

## Five-minute demonstration

1. Introduce the problem and users on The idea page.
2. Open Live prototype. Explain that all sample medications are fictional.
3. Add Medication D, a fictional prescribed-dose label and a reminder time. Explain one schedule entry corresponds to one daily reminder.
4. Click the bell above the schedule to trigger a test reminder. Close the reminder and mark Medication D as taken.
5. Open Medication history and find the new confirmation. Explain the difference between self-report and verified ingestion.
6. Return to the schedule and demonstrate Undo. Open Add medication and submit an empty form to show validation.
7. Ask the assistant “What is adherence?” Explain that it is scripted, and that reminders do not depend on AI.
8. Show Settings: larger text and optional storage. Explain the current security boundary and proposed production controls.
9. Open Evaluation and present actual results, limitations and one feedback-led improvement. If no tests have happened yet, explicitly say so.
10. Use Presentation mode and answer questions about usability, security, equity and future work.

## Conduct actual user testing

- Recruit five classmates and ask for consent. Use participant codes, not names.
- Give everyone the same core tasks: add a medication, find the next reminder, view history.
- Optional tasks: confirm a dose, reject invalid input, navigate between screens.
- Start the timer and observe without helping. Record time, errors, independent/assisted/failed status and comments.
- Use Remember demo if you need persistence between reloads; otherwise keep the tab open. Export evaluation JSON as a backup.
- Target: at least four out of five independently complete each core task. Summaries use the latest attempt for each participant and task; raw attempts remain visible.
- Record the feedback, implement the corresponding source change, redeploy the improved version and retest. Mark a change implemented only after it is implemented.
- Report a small convenience sample honestly. These tests do not establish clinical effectiveness or represent all patient populations.

## Complete before assessment

1. Assign actual team members to research, design, development, testing and presentation roles.
2. Perform the browser and accessibility checks in VERIFICATION.md.
3. Collect the real five-participant results.
4. Document and retest feedback-led improvements.
5. Print the project report with the final results and add student/team identification.
6. Rehearse your demonstration and Q&A.

Submission deadline in the supplied assignment: 30 October 2026 at 13:00. Confirm any class-specific submission instructions with the instructor.
