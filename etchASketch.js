const sketch=document.getElementById("sketch");
const brush=document.querySelectorAll(".brush");
const clearBtn=document.getElementById("clear");

let coloring;
function modeApply(input){
    sketch.innerHTML="";
    for(let i=0;i<input*input;i++){
        const squareDiv=document.createElement("div");
        squareDiv.setAttribute("class","squareDiv");
        squareDiv.style.width=`${(1000-2)/input}px`;
        squareDiv.style.height=`${(700-2)/input}px`;
        sketch.appendChild(squareDiv)
    }
    
}
modeApply(16);
modeChanging();
clearOut();
colorBrushChanging();
function colorBrushChanging() {
    let isMouseDown = false; // Tracks whether the mouse is held down
    const squareDivEntities = document.querySelectorAll(".squareDiv");
    const brushes = document.querySelectorAll(".brush"); // Assuming brushes are elements with a class 'brush'

    brushes.forEach((brush) => {
        brush.style.opacity = "0.8";

        brush.onclick = function () {
            const brushColor = brush.textContent; // Get the color from the brush's text content
           
                squareDivEntities.forEach((squareDiv) => {
                    if(brushColor!="Eraser"){
                    // Change color on click
                    squareDiv.onclick = function () {
                        squareDiv.style.backgroundColor = brushColor;
                    };

                    // Change color on mousedown
                    squareDiv.addEventListener("mousedown", function () {
                        isMouseDown = true;
                        squareDiv.style.backgroundColor = brushColor;
                    });

                    // Change color on mouseover when mousedown is true
                    squareDiv.addEventListener("mouseover", function () {
                        if (isMouseDown) {
                            squareDiv.style.backgroundColor = brushColor;
                }
                });
                }else{
                       // Change color on click
                       squareDiv.onclick = function () {
                        squareDiv.style.backgroundColor = "white";
                    };
    
                    // Change color on mousedown
                    squareDiv.addEventListener("mousedown", function () {
                        isMouseDown = true;
                        squareDiv.style.backgroundColor = "white";
                    });
    
                    // Change color on mouseover when mousedown is true
                    squareDiv.addEventListener("mouseover", function () {
                        if (isMouseDown) {
                            squareDiv.style.backgroundColor = "white";
                        }
                    });
                }
                 
                });
    
                // Reset isMouseDown when mouse is released
                document.addEventListener("mouseup", function () {
                    isMouseDown = false;
                });
            
          
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
