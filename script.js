const menuToggler = document.getElementById("nav-toggler");
const navLinks = document.querySelectorAll(".nav__link");

function menuToggle () {
    document.body.classList.toggle("site-nav-open");
}

menuToggler.addEventListener("click", menuToggle);
navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", menuToggle);
});

let scrollTop;
let offsetAbout, offsetServices, offsetGallery, offsetBlog, offsetContact;
let heightHome, heightAbout, heightServices, heightGallery, heightBlog, heightContact;
let navHeight = 65;

function updateScroll () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    heightHome = document.getElementById("home").scrollHeight;
    offsetAbout = document.getElementById("about").offsetTop;
    heightAbout = document.getElementById("about").scrollHeight;
    offsetServices = document.getElementById("services").offsetTop;
    heightServices = document.getElementById("services").scrollHeight;
    offsetGallery = document.getElementById("gallery").offsetTop;
    heightGallery = document.getElementById("gallery").scrollHeight;
    offsetBlog = document.getElementById("blog").offsetTop;
    heightBlog = document.getElementById("blog").scrollHeight;
    offsetContact = document.getElementById("contact").offsetTop;
    heightContact = document.getElementById("contact").scrollHeight;
    
}

//alert("Scroll from top, offset from Top: " + scrollTop + " " + offsetTop);
var sectionHome = document.getElementById("nav-home")
var sectionAbout = document.getElementById("nav-about");
var sectionServices = document.getElementById("nav-services");
var sectionGallery = document.getElementById("nav-gallery");
var sectionBlog = document.getElementById("nav-blog");
var sectionContact = document.getElementById("nav-contact");

function checkScrollPosition (offsetSection, heightSection, section, isThereClass) {
    if((scrollTop >= offsetSection - navHeight && scrollTop < offsetSection + heightSection - navHeight) && isThereClass == -1) {
        section.className += " item--highlight";
    }
    
    if(scrollTop < offsetSection - navHeight || scrollTop > offsetSection + heightSection - navHeight) {
        section.classList.remove("item--highlight");
    }
}

function scrollSpy () {
    updateScroll();
    let isThereClassHome = sectionHome.className.indexOf("item--highlight");
    let isThereClassAbout = sectionAbout.className.indexOf("item--highlight");
    let isThereClassServices = sectionServices.className.indexOf("item--highlight");
    let isThereClassGallery = sectionGallery.className.indexOf("item--highlight");
    let isThereClassBlog = sectionBlog.className.indexOf("item--highlight");
    let isThereClassContact = sectionContact.className.indexOf("item--highlight");
    
    checkScrollPosition(0, heightHome, sectionHome, isThereClassHome);
    checkScrollPosition(offsetAbout, heightAbout, sectionAbout, isThereClassAbout);
    checkScrollPosition(offsetServices, heightServices, sectionServices, isThereClassServices);
    checkScrollPosition(offsetGallery, heightGallery, sectionGallery, isThereClassGallery);
    checkScrollPosition(offsetBlog, heightBlog/2.5, sectionBlog, isThereClassBlog);
    checkScrollPosition(offsetBlog + heightBlog/2.5, heightBlog, sectionContact, isThereClassContact);
}

document.addEventListener("scroll", scrollSpy);