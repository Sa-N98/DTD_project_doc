# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
This is a static frontend project. No build or installation steps are required.
- **Run locally**: Use any static file server (e.g., `npx serve .` or `python3 -m http.server`) and open `index.html` in a browser.

## Architecture and Structure
The project is a simple static website that generates a visual timeline of dates.

### Structure
- `index.html`: The main entry point.
- `scripts/`: Contains the application logic.
    - `timeline.js`: Main logic for calculating and rendering the timeline days, milestones, and weekends.
    - `utils.js`: Utility functions for date calculations.
- `styles/`: Contains the visual styling.
    - `layout.css`: General page layout styles.
    - `timeline.css`: Specific styles for the timeline elements.

### Key Logic
- The timeline is configured in `scripts/timeline.js` via the `COURSE_CONFIG` object.
- Day elements are dynamically created and appended to the `#timeline` div based on the start and end dates.
- Milestones are marked using classes like `.milestone-1`, `.milestone-2`, etc.
- Weekends are identified based on a 7-day cycle from the start date.
