// Declare container and select it
const container = document.querySelector(".container")

// Declare newDiv and append it to the container
let userNum = 16
function gridCreator(userNum) {
    for (let i = 0; i < userNum ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item"); // Add class to newDiv
        newDiv.style.width = `${960 / userNum}px`; // Set divs' width and height
        newDiv.style.height = `${960 / userNum}px`;
        container.appendChild(newDiv);
    }
} 
gridCreator(16)

// Create hover function
function gridHover() {
    // Group gridItems
    const gridItems = document.querySelectorAll(".grid-item");
    // Add eventListener for passing mouse
    gridItems.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "black";
        });
    });
}
gridHover()

// Generate buttons container
const buttons = document.createElement("div");
buttons.classList.add("buttons")
document.body.appendChild(buttons);
// Darken this thing
const darken = document.createElement("button");
darken.classList.add("darken")
darken.textContent = "Darken this thing"
buttons.appendChild(darken);
// How many boxes?
const boxes = document.createElement("button");
boxes.classList.add("boxes")
boxes.textContent = "How many boxes?"
buttons.appendChild(boxes);
// Get random colors
const randomColors = document.createElement("button");
randomColors.classList.add("randomColors")
randomColors.textContent = "Get random colors"
buttons.appendChild(randomColors);
// Reset
const reset = document.createElement("button");
reset.classList.add("reset")
reset.textContent = "Reset"
document.body.appendChild(reset);

// Add eventListener for clicking
boxes.addEventListener("click", () => {
    let userNum = Number(prompt("Type any number from 0 to 100")); // Make button call prompt
    if (userNum < 0 || userNum > 100 || userNum % 1 !== 0) {
        alert("Sorry! I only accept finite numbers between 0 and 100."); // Prompt only accepts finite numbers between 0 and 100
    } else {
        container.textContent = "" // Remove old grid
        gridCreator(userNum); // Regenerate grid
        gridHover() // Make grid hover
    }
});

// Reset grid
// Add eventListener for clicking
reset.addEventListener("click", () => {
        container.textContent = "" // Remove old grid
        gridCreator(16); // Regenerate grid
        gridHover() // Make grid hover
});

