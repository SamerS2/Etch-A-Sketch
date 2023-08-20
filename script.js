//default color and default grid size variable
let color = "black";
let defaultSize = 16;
let click = false;

/*Doesn't load any js until the page is fully loaded as to avoid errors */
document.addEventListener("DOMContentLoaded", function(){
    //function to generate size of grid
    createGrid(defaultSize);

    //enables / disables drawing on mouse click
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagname != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing Enabled";
            }
            else {
                draw.innerHTML = "Drawing Disabled";
            }
        }
    })

    //event listener on click of pick size button to then prompt for size of grid
    let btn_popup = document.querySelector("#size");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createGrid(size);
    })
    //test if program runs to this point
    console.log("Hi");
})

//function that takes a size variable from user upon "PICK SIZE" button click or a default size of 16
//upon first load up of page, then generates size of grid by dimensions of size * size
function createGrid(size){
    let grid = document.querySelector(".box-container");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    //calculate number of divs to make within grid
    let numDivs = size * size;

    //resets color of grid before regenerating new grid size
    resetGrid();

    //for loop that generates number of divs
    for(let i = 0; i < numDivs;i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        grid.insertAdjacentElement("beforeend", div);
    }
}

//fuction for the button "pick size" to prompt user to enter a size between 1 and 100
// to expand or retract size of grid
function getSize(){
    let input = prompt("Please enter a number between 1 and 100!");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Please input a number between 2 and 100!";
    }
    else {
        return input;
    }
}
//function for rainbow button, if rainbow button's clicked will generate random colors
// on mouseover event of divs, if erasor button is clicked will set mouseover of div
// color to white "erasing" the color
function colorDiv(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color == 'eraser'){
            this.style.backgroundColor = 'white';
        } 
        else {
            this.style.backgroundColor = 'black';
        }
    }
}
//function to set new color of mouseover
function setColor(colorChoice){
    color = colorChoice;
}
//function to reset color of board back to white
function resetGrid(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
