import { getDays } from "./utils.js";

const COURSE_CONFIG = {
    start: "2025-09-21",
    end: "2025-12-03",
    milestones: ["2025-10-14", "2025-11-05", "2025-12-03"]
};

const timeline = document.getElementById("timeline");
const startDate = new Date(COURSE_CONFIG.start);
const days = getDays(COURSE_CONFIG.start, COURSE_CONFIG.end);
let milestoneCounter = 1;

for (let i = 0; i <= days; i++) {
    const dayElement = document.createElement("div");
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);
    const dateStr = current.toISOString().split("T")[0];

    dayElement.dataset.date = dateStr;
    dayElement.id = `Day-${i + 1}`;

    if (COURSE_CONFIG.milestones.includes(dateStr)) {
        dayElement.classList.add(`milestone-${milestoneCounter}`);
        milestoneCounter++;
    }
    if (i === 0) { dayElement.classList.add("course_start"); }
    if ((i + 1) % 7 === 0) { dayElement.classList.add("weekend"); }
    if (i === days) { dayElement.classList.add("course_end"); }
    dayElement.classList.add("day");

    timeline.appendChild(dayElement);
}


