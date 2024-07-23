const container = document.querySelector(".container");

let gridSize = parseInt(prompt("Enter a grid size greater than 1 and less than 100"));

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


