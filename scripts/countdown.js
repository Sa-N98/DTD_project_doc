import { COURSE_CONFIG } from "./utils.js";

const countdownElement = document.getElementById("countdown");
const milestoneElement = document.getElementById("current_milestone");

function updateCountdown() {
    const currentTime = new Date();

    for (let i = 0; i < COURSE_CONFIG.milestones.length; i++) {
        const targetTime = new Date(COURSE_CONFIG.milestones[i]);
        const timeDiff = targetTime - currentTime;

        if (timeDiff > 0) {
            milestoneElement.textContent = `Till Milestone ${i + 1} Submission`;

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDiff % (1000 * 60 * 60)) /
                (1000 * 60)
            );
            const seconds = Math.floor(
                (timeDiff % (1000 * 60)) /
                1000
            );

            countdownElement.textContent =
                `${days}days : ${hours}hrs : ${minutes}mins : ${seconds}sec`;

            return; 
        }
    }

    countdownElement.textContent = "All milestones completed!";
}

updateCountdown();         
setInterval(updateCountdown, 1000); 