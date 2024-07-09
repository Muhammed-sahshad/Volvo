const right=document.querySelector(".btn2");
const left=document.querySelector(".btn1");
const scroll=document.querySelector(".service-types");
const slideimg=document.querySelector(".type-img");
const images=document.querySelectorAll(".type-img");
const slider=document.querySelector(".service-types");
const rightButton=document.querySelector(".right");
const leftButton=document.querySelector(".left");

let sliderbar=slider.getBoundingClientRect(slider);
let img=slideimg.getBoundingClientRect(slideimg);

let slideCout=1;

right.addEventListener('click',()=>{
   scroll.style.transform='translateX('+((sliderbar.x+img.width)*-1)*slideCout +'px)';

   if(slideCout<6){
    slideCout++;
   }else{
    slideCout=1;
   }

   if(slideCout>1){
    leftButton.style='fill:#1251b5';
 }
 if(slideCout==1){
    rightButton.style='fill:#808080'
 }
 
})
