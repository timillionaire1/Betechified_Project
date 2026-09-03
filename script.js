const myBtn = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close-btn");

myBtn.addEventListener("click", function(){
    popUp.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active");
})