import { getDays } from "./utils.js";
import { COURSE_CONFIG } from "./utils.js";


const timeline = document.getElementById("timeline");
const headerDates = document.getElementsByClassName("header-dates")[0];
const startDate = new Date(COURSE_CONFIG.start);
const days = getDays(COURSE_CONFIG.start, COURSE_CONFIG.end);
let milestoneCounter = 1;

headerDates.textContent = `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' , year: 'numeric' })} – ${new Date(COURSE_CONFIG.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' , year: 'numeric' })}`;


for (let i = 0; i <= days; i++) {
    const dayElement = document.createElement("div");
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);
    const dateStr = current.toISOString().split("T")[0];

    dayElement.dataset.date = dateStr;
    dayElement.id = `Day-${i + 1}`;

    if (COURSE_CONFIG.milestones.includes(dateStr)) {
        dayElement.classList.add(`milestone-${milestoneCounter}`);

        let milestoneLabel = document.createElement("span");
        milestoneLabel.classList.add("label-milestone");
        milestoneLabel.id = `milestone-${milestoneCounter}`;
        milestoneLabel.textContent = `Milestone ${milestoneCounter}`;
        dayElement.appendChild(milestoneLabel);
        milestoneCounter++;
    }
    if (i === 0) { dayElement.classList.add("course_start"); }
    if ((i + 1) % 7 === 0) { 
        dayElement.classList.add("weekend");
        let weekendLabel = document.createElement("span");
        weekendLabel.classList.add("label-week");
        weekendLabel.textContent = `Week ${(i + 1) / 7}`;
        dayElement.appendChild(weekendLabel);
     }
    if (i === days) { dayElement.classList.add("course_end"); }
    dayElement.classList.add("day");

    timeline.appendChild(dayElement);
}
