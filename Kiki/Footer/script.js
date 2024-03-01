document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");


    
    scrollToTopBtn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0; 
});
})