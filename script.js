// Declare container and select it
const container = document.querySelector(".container")

// Declare newDiv and append it to the container
for (let i = 0; i <= 256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
}