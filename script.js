document.getElementById("nav").addEventListener("click", function(){
    document.body.classList.remove("site-nav-close");
    document.body.classList.toggle("site-nav-open");
});
document.getElementById("home__nav").addEventListener("click", function(){
    document.body.classList.remove("site-nav-open");
    document.body.classList.toggle("site-nav-close");
});