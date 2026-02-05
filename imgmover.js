// Select the image element by its ID
let box = document.getElementById("box");

// Get the height of the navbar so the image doesn't overlap it
let navbarHeight = document.querySelector("header").offsetHeight;

// Set the initial position of the image safely below the navbar
box.style.top = (navbarHeight + 20) + "px"; // 20px below navbar
box.style.left = "50%"; // horizontally center the image
box.style.transform = "translateX(-50%)"; // center using the image's own width

// Function to move the image to a random position
function startMove() {
    const pageWidth = window.innerWidth;  // width of the browser window
    const pageHeight = window.innerHeight; // height of the browser window

    const boxWidth = box.offsetWidth;   // width of the image
    const boxHeight = box.offsetHeight; // height of the image

    // Calculate a safe vertical starting point (below navbar)
    const safeTop = navbarHeight + 20; // 20px buffer below navbar

    // Random horizontal position (stays fully visible)
    const randomX = Math.floor(Math.random() * (pageWidth - boxWidth));
    // Random vertical position (stays fully visible and below navbar)
    const randomY = Math.floor(Math.random() * (pageHeight - boxHeight - safeTop)) + safeTop;

    // Move the image to the new random position
    box.style.left = randomX + "px";
    box.style.top = randomY + "px";

    // Remove centering transform after first move
    box.style.transform = "none";
}

// Function to reset the image to the starting position
function stopMove() {
    box.style.top = (navbarHeight + 20) + "px"; // back below navbar
    box.style.left = "50%";                     // center horizontally
    box.style.transform = "translateX(-50%)";   // center using width
}
