const sketch=document.getElementById("sketch");
const brush=document.querySelectorAll(".brush");
const clearBtn=document.getElementById("clear");
const netMode=document.querySelector(".netMode");
let coloring;
function modeApply(input){
    sketch.innerHTML="";
    for(let i=0;i<input*input;i++){
        const squareDiv=document.createElement("div");
        squareDiv.setAttribute("class","squareDiv");
        if(netMode.textContent==="Net:On"){
            console.log(netMode.textContent)
            squareDiv.classList.add("squareDivBorder");
        }
        squareDiv.style.width=`${(1000-2)/input}px`;
        squareDiv.style.height=`${(500-2)/input}px`;
        sketch.appendChild(squareDiv)
    }
    netModeChanging();
}

function netModeChanging(){
    const squarediv=document.querySelectorAll(".squareDiv");
    netMode.addEventListener("click",()=>{
        if (netMode.textContent==="Net:On"){
            netMode.textContent="Net:Off";
            squarediv.forEach(div=>{
                div.classList.remove("squareDivBorder");
            })
        }else if(netMode.textContent==="Net:Off"){
            netMode.textContent="Net:On"
            squarediv.forEach(div=>{
                div.classList.add("squareDivBorder");
            })
        }
    })

   }
   
   function paintColor(color){
    let isMouseDown=false;
    const squareDivEntities=document.querySelectorAll(".squareDiv");
    squareDivEntities.forEach(div=>{
        div.onclick=function(){
            div.style.backgroundColor=color;
        }
        div.addEventListener("mousedown",function(){
            isMouseDown=true;
            div.style.backgroundColor=color;
        })
        div.addEventListener("mouseover",function(){
            if(isMouseDown){
                div.style.backgroundColor=color;
            }
        })
        div.addEventListener("mouseup",function(){
            isMouseDown=false;
        })
    })
    
   }

modeApply(16);
modeChanging();
clearOut();
colorBrushChanging();

function colorBrushChanging() {
    const squareDivEntities = document.querySelectorAll(".squareDiv");
    const brushes = document.querySelectorAll(".brush"); // Assuming brushes are elements with a class 'brush'
    const brushBoard=document.querySelector(".brushBoard");
    const brushValue=document.querySelector(".brushValue");
    brushBoard.addEventListener("input",function(){
        let selectedColor=brushBoard.value;
        brushValue.textContent=`${selectedColor}`;
        const brushColor=brushValue.textContent;
        paintColor(brushColor);
    })

    brushes.forEach((brush) => {
        
        brush.onclick = function () {
            brush.style.opacity="0.75";
           
            const brushColor = brush.textContent; // Get the color from the brush's text content
            if(brushColor!="Eraser"){
                paintColor(brushColor);
            }else{
                paintColor("white");
            }
    //             squareDivEntities.forEach((squareDiv) => {
    //                 if(brushColor!="Eraser"){
    //                 // Change color on click
    //                 squareDiv.onclick = function () {
    //                     squareDiv.style.backgroundColor = brushColor;
    //                 };

    //                 // Change color on mousedown
    //                 squareDiv.addEventListener("mousedown", function () {
    //                     isMouseDown = true;
    //                     squareDiv.style.backgroundColor = brushColor;
    //                 });

    //                 // Change color on mouseover when mousedown is true
    //                 squareDiv.addEventListener("mouseover", function () {
    //                     if (isMouseDown) {
    //                         squareDiv.style.backgroundColor = brushColor;
    //             }
    //             });
    //             }else{
    //                    // Change color on click
    //                    squareDiv.onclick = function () {
    //                     squareDiv.style.backgroundColor = "white";
    //                 };
    
    //                 // Change color on mousedown
    //                 squareDiv.addEventListener("mousedown", function () {
    //                     isMouseDown = true;
    //                     squareDiv.style.backgroundColor = "white";
    //                 });
    
    //                 // Change color on mouseover when mousedown is true
    //                 squareDiv.addEventListener("mouseover", function () {
    //                     if (isMouseDown) {
    //                         squareDiv.style.backgroundColor = "white";
    //                     }
    //                 });
    //             }
                 
    //             });
    
    //             // Reset isMouseDown when mouse is released
    //             document.addEventListener("mouseup", function () {
    //                 isMouseDown = false;
    //             });
            
          
        };
     });
}

    
function modeChanging(){
    const mode=document.querySelectorAll(".mode");
    mode.forEach((moding)=>{
       moding.onclick=function(){
        const modeContent=moding.textContent.split("x");
        const numberInput=modeContent[0];
        modeApply(numberInput);
        colorBrushChanging();
        clearOut();
        netModeChanging();
       }
    })
}

function clearOut(){
    const squareDivEntities = document.querySelectorAll(".squareDiv");
    clearBtn.onclick=function(){
        squareDivEntities.forEach(squareDiv=>{
            squareDiv.style.backgroundColor="unset";
        })
    }
}
