const mainContent = document.getElementById('main_content');

async function loadMilestoneContent(number) {
    try {
        const response = await fetch(`milestones/gp${number}.html`);
        if (!response.ok) {
            throw new Error(`Failed to fetch milestone ${number}: ${response.statusText}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;
        initMilestoneTabs();
        initMilestoneCheckboxes();
    } catch (error) {
        console.error('Error loading milestone content:', error);
        mainContent.innerHTML = `<p>Error loading milestone content. Please try again later.</p>`;
    }
}

async function loadHomeContent() {
    try {
        const response = await fetch(`milestones/home.html`);
        if (!response.ok) {
            throw new Error(`Failed to fetch home content: ${response.statusText}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;
        initHomeTabs();
        initMilestoneCheckboxes();
    } catch (error) {
        console.error('Error loading home content:', error);
        mainContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    }
}

function initHomeTabs() {
    const tabs = document.querySelectorAll('#tabs .ms-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.ms-task').forEach(task => {
                task.classList.remove('visible');
            });

            const activeTask = document.getElementById(`tab-${tabId}`);
            if (activeTask) {
                activeTask.classList.add('visible');
            }
        });
    });
}

function initMilestoneTabs() {
    const tabs = document.querySelectorAll('.ms-tab');
    const tasks = document.querySelectorAll('.ms-task');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tasks.forEach(task => {
                if (task.getAttribute('data-task') === tabId) {
                    task.classList.add('visible');
                } else {
                    task.classList.remove('visible');
                }
            });
        });
    });
}

function initMilestoneCheckboxes() {
    const checkboxes = document.querySelectorAll('.ms-check');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            checkbox.classList.toggle('checked');
        });
    });
}

// Event delegation for milestone buttons
document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'milestone-1') {
        loadMilestoneContent(1);
    } else if (target.id === 'milestone-2') {
        loadMilestoneContent(2);
    } else if (target.id === 'milestone-3') {
        loadMilestoneContent(3);
    } else if (target.id === 'back-home') {
        event.preventDefault();
        loadHomeContent();
    }
});

// Load home content by default
loadHomeContent();
