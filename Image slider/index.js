// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[0].classList.add("displaySlides");
        intervalId = setInterval(nextSlide, 5000);
    }
    

}

function showSlides(index){
    if(index < 0){
        slideIndex = slides.length - 1;
    }else if(index >= slides.length ){
        slideIndex = 0;
    } 

    slides.forEach(element =>{
        element.classList.remove("displaySlides");
    })
    slides[slideIndex].classList.add("displaySlides");
}

function prevSlide(){
    slideIndex--;
    showSlides(slideIndex);
    clearInterval(intervalId);
}

function nextSlide(){
    slideIndex++;
    showSlides(slideIndex);
    clearInterval(intervalId);
}