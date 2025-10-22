const backToTopBtn = document.getElementById("backToTop");

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show button only after scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Initially hide button
backToTopBtn.style.display = "none";