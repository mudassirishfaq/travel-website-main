/*=============== SHOW MENU ===============*/
let nav = document.querySelector(".nav"),
    navMenu = document.getElementById("nav-menu"),
    navClose = document.getElementById("nav-close")
    navToggle = document.getElementById("nav-toggle");

    if(navToggle){
        navToggle.addEventListener("click" , ()=> {
            navMenu.classList.add("show-Menu")
        })
    }

    if(navClose){
        navClose.addEventListener("click" , ()=> {
            navMenu.classList.remove("show-Menu")
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
let navLinks = document.querySelectorAll(".nav__link");
/**
 * The function removes the "show-Menu" class from the element with the ID "nav-menu".
 */
let linkAction = ()=>{
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-Menu");
}
navLinks.forEach(n=> n.addEventListener("click" ,  linkAction));

/*=============== ADD BLUR TO HEADER ===============*/

let blurHeader = () => {
    let header = document.getElementById("header");
   /* This code is checking if the vertical scroll position of the window is greater than or equal to
   50 pixels. If it is, then it adds the "blur-header" class to the header element, which applies a
   blur effect to it. If the scroll position is less than 50 pixels, then it removes the
   "blur-header" class from the header element, removing the blur effect. The `this` keyword refers
   to the `window` object, which is the object that triggers the `scroll` event. */
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
