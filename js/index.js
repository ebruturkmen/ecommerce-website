// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

/* cart */ 
let carticon = document.querySelector('#carticon');
        let cartbox = document.querySelector('.cart-box');
        carticon.onclick = function() {
            cartbox.classList.toggle('active');
            document.addEventListener("click", function(e) {
                if (!e.composedPath().includes(cartbox) && !e.composedPath().includes(carticon)) {
                    cartbox.classList.remove("active");
                }
            })
        }

/* search */
let searchinput = document.getElementById("searchinput");
let searchicon = document.getElementById("searchicon");

searchicon.onclick = function () {
    searchinput.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if (!e.composedPath().includes(searchicon) && !e.composedPath().includes(searchinput)) {
            searchinput.classList.remove("active");
        }
    })
}

/* navbar */
let menuToggle = document.querySelector('.menuToggle');
let navbar = document.querySelector('#navbar');
menuToggle.onclick = function() {
    navbar.classList.toggle('active');
    document.addEventListener("click", function(e) {
        if (!e.composedPath().includes(navbar) && !e.composedPath().includes(menuToggle)) {
            navbar.classList.remove("active");
        }
    })
}

/* header scroll */

window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    header.classList.toggle("headerSticky", window.scrollY > 0);
});

let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.addEventListener("click", function() {
    document.querySelector("side-bar").classList.toggle(".active-sidebar");
});
