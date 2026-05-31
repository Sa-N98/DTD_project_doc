const pogressBar = document.getElementById('pogress_bar');

let today = new Date().toISOString().split("T")[0];

console.log("Today's date:", today);

today = '2026-06-18' // For testing purposes, you can set this to a specific date in the course timeline

const todayElement = document.querySelector(`.day[data-date="${today}"]`);
if (todayElement) {
    const timelineRect = document.getElementById('timeline').getBoundingClientRect();
    const todayRect = todayElement.getBoundingClientRect();
    pogressBar.style.height = `${(todayRect.top - timelineRect.top) + (todayRect.height / 2)}px`;

    todayElement.style.backgroundColor = '#ff6347'; // Highlight today's date
}
else {
    console.warn("Today's date does not match any element in the timeline.");
}
