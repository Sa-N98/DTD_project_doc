function updateTimeline(today) {
    const pogressBar = document.getElementById('pogress_bar');

    const todayElement = document.querySelector(`.day[data-date="${today}"]`);
    if (todayElement) {
        const timelineRect = document.getElementById('timeline').getBoundingClientRect();
        const todayRect = todayElement.getBoundingClientRect();
        pogressBar.style.height = `${(todayRect.top - timelineRect.top) + (todayRect.height / 2)}px`;
    } else {
        console.warn("Today's date does not match any element in the timeline.");
    }

    document.querySelectorAll('.day').forEach(el => {
        if (el.dataset.date <= today) {
            el.style.backgroundColor = '#ff6347';
            el.querySelectorAll('span').forEach(span => {
                span.style.color = '#F58D26';
            });
        }
    });
}

// Usage:
const today = new Date().toISOString().split("T")[0];
updateTimeline(today);

// Or for testing:
// updateTimeline('2026-07-09');

const animate = (speed) => {
    let today = "2026-06-12";
    const end = "2026-08-24";

    const interval = setInterval(() => {
        updateTimeline(today);

        if (today >= end) {
            clearInterval(interval);
            return;
        }

        const currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1);
        today = currentDate.toISOString().split("T")[0];
    }, 1000 / speed);
};

// Usage: animate(5) -> updates every 200ms
animate(1)