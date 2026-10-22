# Verification

## Completed checks

- TypeScript type checking and Vite production build completed successfully.
- Seven automated domain-logic tests passed:
  1. Required fields, valid time and duplicate schedule rejection.
  2. Idempotent daily confirmation and progress update.
  3. Confirmations do not carry over to the next day.
  4. Schedules do not appear before their start date.
  5. Skipped records are not counted as taken.
  6. Evaluation uses distinct participant codes and latest attempts; success needs at least five participants and 80% independent completion.
  7. Personal treatment questions receive no dose recommendation from the scripted assistant.
- React server rendering passed for the dashboard and full printable project content.

These are developer checks, not participant usability results. Browser visual and interaction testing was unavailable in the creation environment.

## Manual browser checks to complete

1. At desktop and mobile widths, navigate all three project sections and all prototype screens.
2. Add a valid fictional schedule, reject missing fields and duplicates, edit it, and verify the displayed time.
3. Mark taken, check history and progress, undo, record skipped, then remove a schedule. Verify history is preserved.
4. Add a schedule a minute ahead and leave the tab open. Check the scheduled reminder. Also use the test-reminder button.
5. Enable optional browser notifications if available. Test the denied/unsupported case.
6. Enable Remember demo, reload and verify persistence. Disable it and reload to confirm saved records were removed.
7. Verify larger text, keyboard focus, dialog Escape and focus return; test with a screen reader and browser zoom.
8. Record participant trials, pause/resume the timer and verify the summary. Add a feedback/change/retest entry and export JSON.
9. Open Presentation mode; test keyboard arrows, live-demo navigation and close.
10. Print the project report and inspect page breaks, table wrapping and your actual evaluation results.
11. While the page is loaded, go offline and verify the notice. Do not expect a full offline reload or background reminders.

## Known limitations

No real patient authentication, encrypted storage, background notifications, medication interaction checking, live AI model, caregiver sharing, EHR integration or clinical validation. Fictional data only. External web fonts have local system-font fallbacks.
