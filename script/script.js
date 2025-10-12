document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const projectCard = document.getElementById('project-card');
    const projectBackgrounds = document.querySelectorAll('.project-background-image');
    const workSection = document.getElementById('work_section'); // target only work_section
    const details = document.querySelectorAll('.projects-info span');

    projectItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            const projectId = item.dataset.projectId;
            const imageUrl = item.dataset.imageUrl;
            const color = item.dataset.color;
            const title = item.querySelector('h2').textContent;


            projectBackgrounds.forEach(bg => bg.classList.remove('active'));
            const activeBg = document.querySelector(`.project-background-image[data-project-id="${projectId}"]`);
            if(activeBg) {
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
});

//header
const header = document.querySelector("header");
const topAnchor = document.querySelector("#top-anchor");

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            // We're at the top, show header
            header.classList.remove("hide");
        } else {
            // Scroll down: hide header
            if (window.scrollY > lastScrollY) {
                header.classList.add("hide");
            } else {
                header.classList.remove("hide");
            }
            lastScrollY = window.scrollY;
        }
    },
    { threshold: 0 }
);

observer.observe(topAnchor);

// ----- Cursor elements -----
const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');

// ----- Settings -----
let mouseX = 0, mouseY = 0;
let smallX = 0, smallY = 0;
const speed = 0.4; // lag speed


// ----- Track mouse movement -----
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move big ball instantly
    bigBall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
});

// ----- Animate small ball with lag -----
function animate() {
    smallX += (mouseX - smallX) * speed;
    smallY += (mouseY - smallY) * speed;
    smallBall.style.transform = `translate3d(${smallX}px, ${smallY}px, 0)`;
    requestAnimationFrame(animate);
}
animate();

// ----- Hover grow effect -----
const hoverElements = document.querySelectorAll('a, button, .hover-grow');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        bigBall.classList.add('cursor--grow');
        smallBall.classList.add('cursor--grow');
    });
    el.addEventListener('mouseleave', () => {
        bigBall.classList.remove('cursor--grow');
        smallBall.classList.remove('cursor--grow');
    });
});

document.addEventListener("mouseover", e => {
    if (e.target.closest(".no-cursor")) {
        bigBall.style.opacity = 0;
        smallBall.style.opacity = 0;
    } else {
        bigBall.style.opacity = 1;
        smallBall.style.opacity = 1;
    }
});


const checkbox = document.getElementById('checkbox2');
const sidenav = document.getElementById('sidenav');
const menuLinks = document.querySelectorAll('.menu-items a');

// Toggle sidebar open/close
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        sidenav.classList.add('active');
    } else {
        sidenav.classList.remove('active');
    }
});

// Close sidebar when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
        sidenav.classList.remove('active');
    });
});