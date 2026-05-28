const pogressBar = document.getElementById('pogress_bar');

function updatePogressBar(date = new Date()) {
    const today = date;
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

    // Update timeline element colors
    const todayStr = today.toISOString().split("T")[0];
    document.querySelectorAll('.day').forEach(el => {
        const elementDate = el.dataset.date;
        if (elementDate && elementDate <= todayStr) {
            el.classList.add('completed');
        } else {
            el.classList.remove('completed');
        }
    });
}

// Test trigger for the console
window.simulateDate = (dateStr) => {
    console.log(`Simulating date: ${dateStr}`);
    updatePogressBar(new Date(dateStr));
};

// Animation trigger for the console
window.animateProgressBar = () => {
    const startDate = new Date("2025-09-21");
    const endDate = new Date("2025-12-03");
    const totalDuration = endDate - startDate;

    let start = Date.now();
    const duration = 100000; // 10 seconds animation

    function step() {
        let now = Date.now();
        let progress = (now - start) / duration;
        if (progress > 1) progress = 1;

        const simulatedDate = new Date(startDate.getTime() + (progress * totalDuration));
        updatePogressBar(simulatedDate);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
};

// Initial update
updatePogressBar();

// Update every day at midnight
setInterval(updatePogressBar, 24 * 60 * 60 * 1000); 