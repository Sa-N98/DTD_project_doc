export const COURSE_CONFIG = {
    start: "2026-06-12",
    end: "2026-08-24",
    milestones: ["2026-07-05", "2026-07-27", "2026-08-24"]
};


export var getDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

export var setupCountdown = (date) => {
}
