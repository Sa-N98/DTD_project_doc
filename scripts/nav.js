const milestone_1 = document.getElementById('milestone-1');
const milestone_2 = document.getElementById('milestone-2');
const milestone_3 = document.getElementById('milestone-3');
const mainContent = document.getElementById('main_content');

async function loadMilestoneContent(number) {
    try {
        const response = await fetch(`milestones/gp${number}.html`);
        if (!response.ok) {
            throw new Error(`Failed to fetch milestone ${number}: ${response.statusText}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;
    } catch (error) {
        console.error('Error loading milestone content:', error);
        mainContent.innerHTML = `<p>Error loading milestone content. Please try again later.</p>`;
    }
}

milestone_1.addEventListener('click', () => {
    loadMilestoneContent(1);
});

milestone_2.addEventListener('click', () => {
    loadMilestoneContent(2);
});

milestone_3.addEventListener('click', () => {
    loadMilestoneContent(3);
});