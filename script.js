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
