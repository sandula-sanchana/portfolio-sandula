document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const projectCard = document.getElementById('project-card');
    const projectBackgrounds = document.querySelectorAll('.project-background-image');
    const workSection = document.getElementById('work_section');
    const details = document.querySelectorAll('.projects-info span');

    projectItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            const projectId = item.dataset.projectId;
            const imageUrl = item.dataset.imageUrl;
            const color = item.dataset.color;
            const title = item.querySelector('h2').textContent;

            projectBackgrounds.forEach(bg => bg.classList.remove('active'));
            const activeBg = document.querySelector(`.project-background-image[data-project-id="${projectId}"]`);
            if (activeBg) {
                activeBg.style.backgroundImage = `url(${imageUrl})`;
                activeBg.classList.add('active');
            }

            workSection.style.backgroundColor = color;

            projectCard.innerHTML = `<h3>${title}</h3>`;
            projectCard.classList.add('visible');

            details.forEach(d => d.style.color = 'var(--link-color)');
            details[index].style.color = 'var(--highlight-color)';
        });

        item.addEventListener('mouseout', () => {
            projectBackgrounds.forEach(bg => bg.classList.remove('active'));
            workSection.style.backgroundColor = 'var(--dark-blue)';
            projectCard.classList.remove('visible');
            projectCard.innerHTML = `<h3>PROJECT DETAILS</h3>`;
            details.forEach(d => d.style.color = 'var(--link-color)');
        });
    });

    // 👇 Default state for BakeTrack
    const defaultProject = projectItems[0];
    const defaultId = defaultProject.dataset.projectId;
    const defaultImage = defaultProject.dataset.imageUrl;
    const defaultColor = defaultProject.dataset.color;
    const defaultTitle = defaultProject.querySelector('h2').textContent;

    const defaultBg = document.querySelector(`.project-background-image[data-project-id="${defaultId}"]`);
    if (defaultBg) {
        defaultBg.style.backgroundImage = `url(${defaultImage})`;
        defaultBg.classList.add('active');
    }

    workSection.style.backgroundColor = defaultColor;
    projectCard.innerHTML = `<h3>${defaultTitle}</h3>`;
    projectCard.classList.add('visible');

    details.forEach(d => d.style.color = 'var(--link-color)');
    details[0].style.color = 'var(--highlight-color)';
});
