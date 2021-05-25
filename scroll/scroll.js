// <--Side Bar-->
const navBtn = document.querySelector(".navBtn");
const navBar = document.querySelector(".navbar");

navBtn.addEventListener('click',function() {
    if(navBar.classList.contains("hide-navbar")) {
        navBar.classList.remove("hide-navbar");
    }else {
        navBar.classList.add("hide-navbar");
    }
});

// <--get the date for the copyright-->
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// <--fixe the navbar--> 
const navbar = document.querySelector('.navbar');
const Container = document.querySelector('.links-container');

// <--scrolling event-->
window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navBarHeight) {
        navbar.classList.add('fix-navbar');
    }else {
        navbar.classList.remove('fix-navbar');
    }
});