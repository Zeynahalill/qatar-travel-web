const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
const btn = document.querySelector(".btn-dark-custom");

btn.addEventListener("click", () => {
    alert("Contact page coming soon 🚀");
});

document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});