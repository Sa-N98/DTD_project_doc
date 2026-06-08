const btn = document.getElementById('contactsBtn');
const card = document.querySelector('.popup_card');
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.toggle('visible');
    btn.classList.toggle('open');
});

const mainContent = document.getElementById('main_content');
function initHomeTabs() {
    const navButtons = mainContent.querySelectorAll('.nav-btn');
    const sections = mainContent.querySelectorAll('section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.target;

            navButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.classList.contains(target)) {
                    section.classList.add('active');
                }
            });
        });
    });
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
    } catch (error) {
        console.error('Error loading home content:', error);
        mainContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    }
}

const milestone0 = document.getElementById('Day-1');
const milestone1 = document.getElementById('milestone-1');
const milestone2 = document.getElementById('milestone-2');
const milestone3 = document.getElementById('milestone-3');

async function loadMilestoneContent(milestoneId) {
    try {
        const response = await fetch(`milestones/${milestoneId}.html`);
        if (!response.ok) {
            throw new Error(`Failed to fetch milestone content: ${response.statusText}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;
    } catch (error) {
        console.error('Error loading milestone content:', error);
        mainContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    }
}   

function milestoneClickHandler(e) {
    const elementId = e.target.id;
        if (elementId === 'Day-1') {
            loadMilestoneContent('Day-1');
        } else if (elementId === 'milestone-1') {
            loadMilestoneContent('milestone-1');
        } else if (elementId === 'milestone-2') {
            loadMilestoneContent('milestone-2');
        } else if (elementId === 'milestone-3') {
            loadMilestoneContent('milestone-3');
        }
}

function deliverableClickHandler(e) {
    const docChecklists = document.getElementsByClassName('doc-checklist')
    const docContentBox = document.getElementsByClassName('doc-content')[0]
    const element = e.target.classList.contains('cTrue');

        if (element) {  
            console.log('Deliverable clicked');
                for (let checklist of docChecklists) {
                    console.log('Toggling checklist visibility');
                    checklist.classList.toggle('content');}
            docContentBox.classList.toggle('content');
        }  

}

document.addEventListener('click', (e) => {
    milestoneClickHandler(e)
    deliverableClickHandler(e)
});

window.loadHomeContent = loadHomeContent;

loadHomeContent()
