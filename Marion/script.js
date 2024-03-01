document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");


    
    scrollToTopBtn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0; 
});
    let jsNumberDisplay = document.querySelector('.js-number-display')
    let element = document.querySelector('.js-number-input')
    jsNumberDisplay.innerText = element.value
    element.addEventListener('change', function(){
        jsNumberDisplay.innerText = element.value
    })
})