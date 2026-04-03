const reveals = document.querySelectorAll(".reveal");
<script src="../js/main.js"></script>

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
    alert("Contact page coming soon ");
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
document.querySelectorAll(".stat-card, .feature-card").forEach(card => {
    card.addEventListener("click", () => {
        
        // önce hepsini kapat
        document.querySelectorAll(".stat-card, .feature-card")
            .forEach(c => c.classList.remove("active"));

        // tıklananı aç
        card.classList.add("active");

        // 1.5 saniye sonra glow gitsin (isteğe bağlı)
        setTimeout(() => {
            card.classList.remove("active");
        }, 1500);
    });
});