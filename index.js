const btnElement=document.querySelector(".btn");
const closeIconElement=document.querySelector(".close-icon");
const trailerContainerElement=document.querySelector(".trailer-container");

btnElement.addEventListener("click",()=>{
    trailerContainerElement.classList.remove("active");
});

closeIconElement.addEventListener("click",()=>{

})