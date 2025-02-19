// Declare container and select it
const container = document.querySelector(".container")

// Declare newDiv and append it to the container
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item"); // Add class to newDiv
    container.appendChild(newDiv);
}

// Group gridItems
const gridItems = document.querySelectorAll(".grid-item");

// Add eventListener for passing mouse
gridItems.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "blue"; // Make grid hover
    });
});