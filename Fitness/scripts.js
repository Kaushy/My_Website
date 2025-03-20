let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Close menu when clicking a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
} else {
    console.error("Menu icon or navbar not found in the document.");
}

// Check if '.multiple-text' exists before initializing Typed.js
if (document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
    });
} else {
    console.error("Element with class 'multiple-text' not found.");
}
// check if the phone number is valid before submission.
document.querySelector("form").addEventListener("submit", function(event) {
    let phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        event.preventDefault(); // Stop form submission
    }
});
