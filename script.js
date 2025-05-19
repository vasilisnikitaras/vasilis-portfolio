document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Message Sent! I will get back to you soon.");
        });
    }

    console.log("Portfolio website loaded successfully!");
});



/*
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    const projects = document.querySelectorAll(".project");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));
});
*/
