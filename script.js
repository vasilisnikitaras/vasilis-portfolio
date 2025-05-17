document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    const projects = document.querySelectorAll(".project");
    
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
        }, index * 200);
    });
});
