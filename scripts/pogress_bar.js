const pogressBar = document.getElementById('pogress_bar');

function updatePogressBar() {
    const today = new Date();
    const startDate = new Date("2025-09-21");
    const endDate = new Date("2025-12-03");

    if (today < startDate) {
        pogressBar.style.height = '0%';
    } else if (today > endDate) {
        pogressBar.style.height = '100%';
    } else {
        const totalDuration = endDate - startDate;
        const elapsedDuration = today - startDate;
        const progressPercentage = (elapsedDuration / totalDuration) * 100;
        pogressBar.style.height = `${progressPercentage}%`;
    }
}

// Initial update
updatePogressBar();

// Update every day at midnight
setInterval(updatePogressBar, 24 * 60 * 60 * 1000); 