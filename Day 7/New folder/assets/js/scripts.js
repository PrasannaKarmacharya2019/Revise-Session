// Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Update footer year dynamically
// const footerYear = document.querySelector('footer p');
// const currentYear = new Date().getFullYear();
// footerYear.innerHTML = `&copy; ${currentYear} My Portfolio. All rights reserved.`;

// // Contact form validation
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (!name || !email || !message) {
//         alert('Please fill out all fields.');
//         return;
//     }

//     // Simulate form submission
//     alert('Thank you for your message!');
//     this.reset(); // Clear the form
// });