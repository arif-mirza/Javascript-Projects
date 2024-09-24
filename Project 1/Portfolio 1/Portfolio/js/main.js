// loader
document.addEventListener("DOMContentLoaded", function() {
    // Hide loader and logo after a delay
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
    }, 3000); // Adjust delay time (in milliseconds) as needed
});

  
















//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
//Portfolio section - Modal
//Service modals jo "service-modal" class ke elements hain, unko select karein
const serviceModals = document.querySelectorAll(".service-modal");
const learnmorebtns= document.querySelectorAll(".learn-more-btn");
const modalCloseBtns= document.querySelectorAll(" .modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmorebtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//portfolio section modal 
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards= document.querySelectorAll(".img-card");
const portfolioCloseBtns= document.querySelectorAll(" .portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
   portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        });
    });
});
//Our clients - Swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website dark/light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());

});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light" ;
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon" ;

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
// counter

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
   // console.log(counter);
   counter.innerHTML = 0;
const updateCounter = () => {
    const startingCount = Number(counter.innerHTML);

    const targetCount = +counter.getAttribute("data-target");

    const incr = targetCount / 100;
    if( startingCount < targetCount){
        counter.innerHTML = `${startingCount + incr}`;
    }
    //console.log(targetCount);
    setTimeout(updateCounter, 10);

}


   updateCounter();
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset; // Corrected typo in 'pageYOffset'

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { // Corrected using 'scrollY' variable instead of 'window.scrollY'
            let navLink = document.querySelector(".nav-item a[href*='" + id + "']");
            if (navLink) {
                // Mistake 1: Remove the dot (.) before "active" class name
                navLink.classList.add("active");
            }
        } else {
            let navLink = document.querySelector(".nav-item a[href*='" + id + "']");
            if (navLink) {
                // Mistake 2: Remove the dot (.) before "active" class name
                navLink.classList.remove("active");
            }
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    } );
});
//Scroll reveal animations

//Common reveal options to create reveal animations
ScrollReveal({ 
    reset: true,
    distance : '60px', 
    duration : 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-01', { delay : 400, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay : 500, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', { delay : 600, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contant-left li', { delay : 400, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img' , { delay : 400, origin : 'bottom'});
ScrollReveal().reveal('.about .description, .copy-right' , { delay : 500, origin : 'right'});
ScrollReveal().reveal('.about .professional-list li' , { delay : 400, origin : 'right', interval: 200});
ScrollReveal().reveal('.skills-description, service-description, .contact-card, .client-swiper, contact-left h2' , { delay : 700, origin : 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card' , { delay : 600, origin : 'bottom', interval: 200});
ScrollReveal().reveal('footer .group' , { delay : 200, origin : 'top', interval: 200});





// typing effect
// var typingEffect = new Typed(".mutitext" ,{
//     Strings: ["Web DEveloper" , "Youtuber" , "Freelancer" ],
//     loop: true,
//     typeSpeed: 150,
//     backSpeed: 150,
//     backDelay: 150
// }

// );

// const typingEffect = document.querySelector(".mutitext");
// const loadtime = () => {
//     setTimeout(() => {
//         typingEffect.textContent = "Freelancer" ;
//     }, 3000);

//     setTimeout(() => {
//         typingEffect.textContent = "Web developer" ;
//     }, 5000);

//     setTimeout(() => {
//         typingEffect.textContent = "Youtuber" ;
//     }, 5000);
// }
// loadtime();


