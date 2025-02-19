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


function resetGrid() {
    container.textContent = "" // Remove old grid
    gridCreator(16); // Regenerate grid
    gridHover() // Make grid hover
}

// Reset grid
// Add eventListener for clicking
reset.addEventListener("click", () => {
        resetGrid()
});







// Generate RGB random
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Apply random colors
function applyRandomColors() {
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach(element => {
        element.addEventListener("mouseenter", () => {
            const randomColor = getRandomColor();
            element.style.backgroundColor = randomColor;
        });
    })
}

// Make ramdomColors button responsive
randomColors.addEventListener("click", () => {
    resetGrid()
    applyRandomColors();
})




// Create darkenFunction
function darkenFunction() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(element => {
        // Ensure the opacity starts from 0 (fully transparent)
        let opacity = 0;
        element.addEventListener("mouseenter", () => {
            // Increase opacity by 0.1 until it reaches 1
            if (opacity < 1) {
                opacity += 0.1;
                element.style.opacity = opacity; // Apply the opacity to the element
            } else {
                opacity = 1;
                element.style.opacity = opacity
            }
        });
    });
}

// Make the "darken" button responsive
darken.addEventListener("click", () => {
    resetGrid();
    darkenFunction(); // Apply darken effect after reset
});
