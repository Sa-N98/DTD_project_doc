const mainContent = document.getElementById('main_content');
const milestone0 = document.getElementById('Day-1');
const milestone1 = document.getElementById('milestone-1');
const milestone2 = document.getElementById('milestone-2');
const milestone3 = document.getElementById('milestone-3');
const btn = document.getElementById('contactsBtn');
const card = document.querySelector('.popup_card');


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
        // initMilestoneCheckboxes();
    } catch (error) {
        console.error('Error loading home content:', error);
        mainContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    }
}

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.toggle('visible');
    btn.classList.toggle('open');
});

document.addEventListener('click', () => {
    card.classList.remove('visible');
    btn.classList.remove('open');
});

loadHomeContent()
// milestone0.addEventListener('click', () => {
//     mainContent.innerHTML = `
//         <h2>Day 1: Project Kickoff</h2>
//         <p>Welcome to the project! Today we will be discussing the project goals, timelines, and team roles. Let's get started!</p>
//     `;
// });

// milestone1.addEventListener('click', () => {
//     mainContent.innerHTML = `
//         <h2>Milestone 1: Initial Research</h2>
//         <p>In this milestone, we will be conducting initial research on the project topic. This includes gathering relevant information, identifying key challenges, and outlining our approach.</p>
//     `;
// });

// milestone2.addEventListener('click', () => {
//     mainContent.innerHTML = `
//         <h2>Milestone 2: Prototype Development</h2>
//         <p>During this milestone, we will be developing a prototype of our solution. This will involve designing, coding, and testing our initial version to ensure it meets our requirements.</p>
//     `;
// });

// milestone3.addEventListener('click', () => {
//     mainContent.innerHTML = `
//         <h2>Milestone 3: Final Presentation</h2>
//         <p>In the final milestone, we will be preparing and delivering a presentation of our project. This will include showcasing our results, discussing challenges faced, and outlining future work.</p>
//     `;
// });     
