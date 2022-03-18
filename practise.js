"use strict";

//  console.log(document.querySelector(".message").textContent);  
// document.querySelector(".message").textContent="correct number";

// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=20;
//   console.log(document.querySelector(".guess").value); //null 

//   document.querySelector(".guess").value=15; //set value 

//   console.log(document.querySelector(".guess").value);   15

// document.querySelector(".guess").value=Math.floor(Math.random()*50);
// console.log(document.querySelector(".guess").value);

let secretNum=Math.floor(Math.random()*20)+1;
// let val=document.querySelector(".score").textContent; //taking val from dom
let val=20;  //not from dom
// let high=document.querySelector(".highscore").textContent;
let high=0;

// document.querySelector(".number").textContent=secretNum;
// console.log(secretNum);


document.querySelector(".check").addEventListener("click",function(){
         const guess=Number(document.querySelector(".guess").value);   //guess is string so 
         console.log( guess,typeof guess);
         
if(!guess)
{
    document.querySelector(".message").textContent="No number Entered!!!!";   
}

else if(guess>secretNum)
{
    if(val<=1)                //1 ====>after 0 I was able to click
    { 
        document.querySelector(".message").textContent="Game lost";
        document.querySelector(".score").textContent=0;
        document.querySelector("body").style.background="red";
    }else
    {
        document.querySelector(".message").textContent="High!!!";
    
    // let val=document.querySelector(".score").textContent;
    // console.log(val);            //declare globally 
   
    val--;
    document.querySelector(".score").textContent=val;   //val-- no
}
    
}
else if(guess<secretNum)
{
    if(val<=1)
    {
        document.querySelector(".message").textContent="Game lost";
        document.querySelector(".score").textContent=0;
        document.querySelector("body").style.backgroundColor="red";
    }
    else{ 
        
        val--;
        document.querySelector(".score").textContent=val; 
       document.querySelector(".message").textContent="Low!!!";
    }
    // console.log(val);
   
}
else if(guess===secretNum)
{
    if(val>1)
    { 
    document.querySelector(".number").textContent=secretNum; 
    document.querySelector("body").style.background="green";
    document.querySelector(".number").style.width="25rem";
    document.querySelector(".message").textContent="Correct Number";
   if(val>high)
   {
       high=val;
    document.querySelector(".highscore").textContent=high;
   }
}
  
}


})


document.querySelector(".again").addEventListener("click",function()
{
    // console.log(alert("kavya"));
    val=20;
    document.querySelector(".score").textContent=20;
    secretNum=Math.floor(Math.random()*20)+1;
     document.querySelector("body").style.backgroundColor="#222";
     document.querySelector(".message").textContent="Start guessing";
     document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=""; 
    document.querySelector(".number").style.width="15rem";
   
     

})

