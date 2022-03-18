"use strict";

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const closebtn=document.querySelector(".close-modal");
const showbtn=document.querySelectorAll(".show-modal");
console.log(showbtn);

for(let i of showbtn)
{
         
         i.addEventListener("click",function()    //not refactored
         {
                    console.log(i.textContent);
                  //modal.style.display="block";  OR
                  modal.classList.remove("hidden");
                  overlay.classList.remove("hidden");
                   //hidden class removed from modal and overlay
         })
}


const closeModal=function()
{
         modal.classList.add("hidden");        //added back hidden class
         overlay.classList.add("hidden");
         //OR
         // modal.style.display="none"; 
         // overlay.style.display="none";
} 



 //refactored
closebtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal) ;   //closemodal() --> js automatically calls func but we want it to call when clicks  so no () for function


document.addEventListener("keydown",function(event)
{
         // console.log(typeof event.key);
      if(event.key==="Escape" && !modal.classList.contains("hidden")) //hidden removed by click on modal1,2,3 
      {
       
        closeModal(); 
}

});
