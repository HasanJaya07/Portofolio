// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
   });
   // Section highlighting in navbar
   window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentSection = "";
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
    currentSection = section.getAttribute("id");
    }
    });
    navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
    link.classList.add("active");
    }
    });
   });


const text = "Hasan Jaya";
let index = 0;
const speed = 100; 

function typeWriter() {
    if (index < text.length) {
        document.querySelector(".anim").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;