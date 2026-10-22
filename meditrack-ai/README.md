# MediTrack AI

A React + TypeScript + Vite medication-routine prototype and AI in Medicine mid-term project, focused on Sections 1–3.

## Run locally

Use Node.js 22 or newer with npm.

```bash
npm ci
npm run dev
```

Open the localhost address printed by Vite. To verify and build:

```bash
npm test
npm run build
npm run preview
```

`npm run build` checks TypeScript and writes the production site to `dist/`. This ZIP includes that production build as well as all editable source. Serve `dist/` through an HTTP server; do not open the HTML file directly with a file:// URL.

## Included experience

- **The idea:** health problem, users, rationale with WHO source, features, goals, system diagram, delivery timeline and team roles.
- **Live prototype:** add/edit/delete fictional daily schedules, input validation, taken/skipped confirmations, undo, daily progress, history search and export.
- **Reminders:** in-app scheduled reminders while the page is open, a test reminder and optional browser notifications.
- **Assistant:** clearly labeled scripted education and navigation help. No AI API key is needed.
- **Settings:** larger text, optional browser persistence, sample reset and full deletion.
- **Evaluation:** task timer, real participant observations, latest-attempt summaries, feedback/improvement log, JSON export, ethics, future development and Q&A notes.
- **Presentation:** seven slides with keyboard controls and a link to the live demo.
- **Written report:** use **Print project report** in the footer. The print layout includes all Sections 1–3 and your current evaluation records. Select Save as PDF in your browser if needed.

## Project structure

- `src/App.tsx`: app shell, schedule, history, assistant, settings, dialogs, presentation and printable report.
- `src/ProjectContent.tsx`: concept, architecture, design documentation, ethics, assessment map and presentation content.
- `src/Evaluation.tsx`: participant observation forms, timer, summaries, feedback and export.
- `src/model.ts`: typed domain models, validation, daily records, evaluation aggregation, storage loading and scripted responses.
- `src/model.test.ts`: seven focused regression tests using Node's test runner.
- `src/styles.css`: responsive styling, accessibility states and print layout.
- `src/main.tsx`: React entry point.
- `public/favicon.svg`: vector brand icon.
- `docs/PROJECT_GUIDE.md`: demonstration, assessment and testing handover.
- `docs/VERIFICATION.md`: verified checks and remaining manual checks.

The ZIP excludes `node_modules`, credentials, Git internals and hosting identity files. Install dependencies with `npm ci`. The included lockfile fixes the resolved dependency versions.

## Privacy and limitations

Use **fictional data only**. By default, data is in tab memory and disappears on reload. Remember demo is an explicit opt-in to unencrypted localStorage, including evaluation notes. Turning it off removes saved data while retaining the current session. Clear data removes schedules, records, evaluation entries and browser persistence.

No patient-data server, clinical authentication, encrypted database, EHR connection or caregiver sharing is implemented. Site access restrictions are separate from a clinical authentication system. External Google Fonts may load when available; system-font fallbacks are included. No medication records are sent to a model or API by this app.

Reminders use the device's local clock and run only while the page is open. Closed tabs, suspended devices and offline reloads are not reliable reminder channels. Each schedule entry is one daily reminder. A past reminder is labeled Needs review and does not instruct the user to take a late or extra dose. History is self-reported; the initial Medication A entry is fictional seed data.

The assistant is deterministic scripted content. It cannot diagnose, prescribe or recommend dose changes. Production would require clinical review, secure backend architecture, applicable data-protection review and a reliable notification service.

Classmate results start empty. No user-test findings or clinical benefits are fabricated. Record actual results, implement changes and retest before submitting. Assessment marks are decided by the examiner.

## Put the code on GitHub

Create a new empty GitHub repository, unzip this project and upload its contents (or use Git). Do not upload `node_modules` or personal data. The `.gitignore` is included. You can use any static hosting provider with build command `npm run build` and output directory `dist`.

The Vite base is `./`, so built JavaScript and CSS assets use relative paths. The app is a single-page interface without server routes. If using a repository subpath, the favicon URL is also relative.

## Source

World Health Organization, 1 July 2003: “Failure to take prescribed medicine for chronic diseases is a massive, world-wide problem.” Used as historical background for the problem statement, not as a current prevalence estimate or evidence that this prototype works.

https://www.who.int/news/item/01-07-2003-failure-to-take-prescribed-medicine-for-chronic-diseases-is-a-massive-world-wide-problem
