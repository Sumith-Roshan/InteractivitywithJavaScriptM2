
function changeImage(image) {
  var largeImageDiv = document.getElementById('image');
  largeImageDiv.innerHTML = '<img src="' + image.src + '" alt="Large Image">';
}
// Function to initialize event listeners on page load
window.onload = function () {
    console.log("Page loaded and event listeners initialized.");
    addTabFocusToImages();
    trackMouseMovement();
};

// Function to track mouse movement
function trackMouseMovement() {
    document.addEventListener("mousemove", (event) => {
        console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
    });
}

// Function to add tabindex attributes for keyboard access
function addTabFocusToImages() {
    let images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log(`Tabindex added to image ${i + 1}`);
        
        // Adding keyboard event for accessibility
        images[i].addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                this.click(); // Simulate click on Enter or Space
            }
        });
    }
}
