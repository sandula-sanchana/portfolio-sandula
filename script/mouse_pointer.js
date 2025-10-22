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