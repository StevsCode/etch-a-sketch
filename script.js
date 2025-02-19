// Declare container and select it
const container = document.querySelector(".container")

// Declare newDiv and append it to the container
let userNum = 16
function gridCreator(userNum) {
    for (let i = 0; i < userNum ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item"); // Add class to newDiv
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
            element.style.backgroundColor = "blue"; // Make grid hover
        });
    });
}
gridHover()

// Generate button
const button = document.createElement("button");
button.textContent = "Grid"
document.body.appendChild(button);

// Add eventListener for clicking
button.addEventListener("click", () => {
    let userNum = Number(prompt("Type any number from 0 to 100")); // Make button call prompt
    if (userNum < 0 || userNum > 100 || userNum % 1 !== 0) {
        alert("Sorry! I only accept finite numbers between 0 and 100."); // Prompt only accepts finite numbers between 0 and 100
    } else {
        container.textContent = "" // Remove old grid
        gridCreator(userNum); // Regenerate grid
        container.style.width = `${userNum * 60}px` // Set container's new width and height
        container.style.height = `${userNum * 60}px`
        gridHover() // Make grid hover
    }
});
