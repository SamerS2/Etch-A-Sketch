
const size = 16;

let defaultSize = size;

document.addEventListener("DOMContentLoaded", function(){
    createGrid(defaultSize);
    console.log("Hi");
})

function createGrid(size){
    let grid = document.querySelector(".box-container");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for(let i = 0; i < numDivs;i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        grid.insertAdjacentElement("beforeend", div);
    }
}