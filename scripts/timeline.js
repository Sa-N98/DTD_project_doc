import { getDays } from "./utils.js";

var timeline = document.getElementById("timeline");

const startDateStr = "2025-09-21"; 
const endDateStr = "2025-11-30";
const days = getDays(startDateStr, endDateStr);
const startDate = new Date(startDateStr); 

for (let i = 0; i < days; i++) {
    const dayElement = document.createElement("div");
    
    //  assigne date as a data attribute to each day element
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i); 
    const dateStr = current.toISOString().split("T")[0];

    // set class and id for each day element
    dayElement.dataset.date = dateStr;
    dayElement.classList.add("day");
    if (i === 0) { dayElement.classList.add("course_start") }
    if ((i+1) % 7 === 0) { dayElement.classList.add("weekend") }
    if (i === days-1) { dayElement.classList.add("course_end") }
    dayElement.id = `Day-${i + 1}`;
    timeline.appendChild(dayElement);
}