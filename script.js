function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    var icon = document.getElementById("menuIcon");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
        icon.className = "fas fa-times";
    } else {
        menuBtn.className = "nav-menu";
        icon.className = "fas fa-bars";
    }
}

// Link bosilganda menyuni yopish
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        var menuBtn = document.getElementById("myNavMenu");
        var icon = document.getElementById("menuIcon");
        menuBtn.className = "nav-menu"; // Menyu yopiladi
        icon.className = "fas fa-bars"; // Ikonka o'zgaradi
    });
});


window.onscroll = function () { headerShadow() };
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Abduqodir Yuldashev", "Backend Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })
/* -- HEADINGS -- */
sr.reveal('.top-header', {})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.querySelector(".view-more-btn");
    const hiddenProjects = document.querySelector(".hidden-projects");

    viewMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (hiddenProjects.classList.contains("open")) {
            hiddenProjects.classList.remove("open");
            viewMoreBtn.innerHTML = '<i class="fas fa-arrow-right"></i> View More';
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        } else {
            hiddenProjects.classList.add("open");
            viewMoreBtn.innerHTML = '<i class="fas fa-arrow-up"></i> View Less';
        }
    });
});


function openModal(projectName) {
    const modal = document.getElementById(`${projectName}-modal`);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeModal(projectName) {
    const modal = document.getElementById(`${projectName}-modal`);
    modal.classList.remove('open');
    setTimeout(() => modal.style.display = 'none', 500);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            const projectName = modal.id.replace('-modal', '');
            closeModal(projectName);
        }
    });
});