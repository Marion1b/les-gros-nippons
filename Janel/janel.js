document.addEventListener("DOMContentLoaded", function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");



    scrollToTopBtn.addEventListener("click", function() {
        document.documentElement.scrollTop = 0;
    });
    document.querySelector('.photo').style.opacity = "1"
    document.querySelector('.photo').style.transform = "translate(0)"
})
