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