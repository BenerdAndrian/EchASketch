const sketch=document.getElementById("sketch");
const input=prompt("Nhap so luong o: ")
for(let i=0;i<input*input;i++){
    const squareDiv=document.createElement("div");
    squareDiv.setAttribute("class","squareDiv");
    squareDiv.style.width=`${(1000-2)/input}px`;
    squareDiv.style.height=`${(700-2)/input}px`;
    sketch.appendChild(squareDiv)
}
const squareDivEntities=document.querySelectorAll(".squareDiv");
squareDivEntities.forEach((squarediv)=>{
    squarediv.onclick=function(){
        squarediv.style.backgroundColor="black";
    }
})