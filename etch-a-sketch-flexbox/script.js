const container = document.querySelector(".container");

let gridSize = 8; //parseInt(prompt("Enter a grid size greater than 1 and less than 100"));

let cellSize = 500 / gridSize;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.style.backgroundColor = "White";
        cell.style.border = "1px solid black";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    }
}

if (gridSize > 1 && gridSize < 100) {
    createGrid(gridSize);
} else if (gridSize < 1) {
    parseInt(prompt("Please enter a number greater than 1"));
}

container.addEventListener("mouseover", function(e) {
    const target = e.target.closest(".cell");

    if (target) {
        let r = (Math.floor(Math.random() * 256));
        let g = (Math.floor(Math.random() * 256));
        let b = (Math.floor(Math.random() * 256));

        target.style.backgroundColor = (`rgb(${r}, ${g}, ${b})`);
    }
})



