var timeline = document.getElementById("timeline");

var getDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

const days = getDays("2025-09-21", "2025-11-30");

for (let i = 0; i < days; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    if (i === 0){dayElement.classList.add("course_start")}
    if ((i+1)%7 === 0) {dayElement.classList.add("weekend");}
    if (i === days-1){dayElement.classList.add("course_end")}
    dayElement.id = `Day-${i + 1}`;
    timeline.appendChild(dayElement);
}