// pogress bar
const startDate = new Date("2026-02-22T01:22:00");
const endDate   = new Date("2026-02-24T01:58:59");

const bar = document.getElementById("progress-bar");
const milestone1 = document.getElementById("milestone-1");
const milestone2 = document.getElementById("milestone-2");
const milestone3 = document.getElementById("milestone-3");
const milestones = document.querySelectorAll(".milestone");
const progressBar = document.getElementById("progress-bar");
const currentTime = document.getElementById("current_time"); 



const milestone_colors_complete = "#62a509";
const milestone_colors_project_end = "#c9321f";

var cons = 0;
const totalDuration = endDate - startDate;

bar.style.width = cons + "%";

const interval = setInterval(function() {

   const now = new Date();
   const totalDuration = endDate - startDate;
   const elapsed = now - startDate;

   let cons = (elapsed / totalDuration) * 100;

   if (cons < 0) cons = 0;
   if (cons > 100) cons = 100;

   bar.style.width = cons + "%";
   if (cons >= 37) {milestone1.style.backgroundColor = milestone_colors_complete}
   if (cons >= 63) {milestone2.style.backgroundColor = milestone_colors_complete}
   if (cons >= 100) {milestone3.style.backgroundColor = milestone_colors_complete}

   if (cons >= 100) {
         bar.style.backgroundColor = milestone_colors_project_end;
         milestone1.style.backgroundColor = milestone_colors_project_end;
         milestone2.style.backgroundColor = milestone_colors_project_end;
         milestone3.style.backgroundColor = milestone_colors_project_end;
         clearInterval(interval)}

}, 1000);

milestones.forEach((milestone, index) => {

    milestone.addEventListener("mouseenter", function() {
        setTimeout(() => {
            milestone.innerHTML = "<p>Milestone " + (index + 1) + "</p>" + "<p class='deadline'>" +"Deadline: October 15" + "</p>";
        }, 90);
    });

    milestone.addEventListener("mouseleave", function() {
        milestone.textContent = index + 1;
    });

});

progressBar.addEventListener("mouseenter", function() {
    const now = new Date();

    currentTime.style.display = "flex";
    currentTime.style.justifyContent = "flex-end";
    progressBar.style.cursor = "pointer";
    currentTime.textContent = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"});
    
})
progressBar.addEventListener("mouseleave", function() {
    currentTime.style.display = "none";
})