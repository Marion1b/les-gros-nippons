document.addEventListener("DOMContentLoaded", function(){
    /* home page animations "laissez nous une note" */
    let jsNumberDisplay = document.querySelector('.js-number-display')
    let element = document.querySelector('.js-number-input')
    if(jsNumberDisplay === null || element === null){
        console.log("ignore")
    }else{
        jsNumberDisplay.innerText = element.value
        element.addEventListener('change', function(){
        jsNumberDisplay.innerText = element.value
        })
    }
    
    /*footer animation scroll to top */
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if(scrollToTopBtn === null){
        console.log('ignore')
    }else{
        scrollToTopBtn.addEventListener("click", function () {
            document.documentElement.scrollTop = 0; 
        });
    }

    /*Marion page animation*/
    let cat = document.querySelector('.marion-profile img');
    if(cat === null){
        console.log('ignore')
    }else{
        cat.addEventListener('click', function(){
            cat.style.border = '2px solid #6096BA';
        });
    }

    /*Janel profile picture animation*/
    let janelProfile = document.querySelector('.photo')
    if(janelProfile === null){
        console.log('ignore')
    }else{
        janelProfile.style.opacity = "1"
        janelProfile.style.transform = "translate(0)"
    }
})