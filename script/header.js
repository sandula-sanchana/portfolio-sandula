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