const btnO = document.getElementsByClassName("hamburger")[0];
const btnC = document.getElementsByClassName("hamburger")[1];
console.log(btnC);
btnO.addEventListener("click",(ev)=>{
         document.getElementsByClassName("dashboard")[0].style.display="none";
        console.log("closed");
});
btnC.addEventListener("click",(ev)=>{
         document.getElementsByClassName("dashboard")[0].style.display="block";
        console.log("opened");
});
