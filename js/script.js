
// Part 2: 
// Function that takes in parameters and calculates a value
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 10)); 

//Global variable
let animationActive = false;
// Changes text value of button upon activation and deactivation of animation
function updateButtonText(button) {
    // Local variable
    let text = animationActive ? "Stop Animation" : "Start Animation";
    button.textContent = text;
}
const button = document.querySelector('.animatebutton2');
updateButtonText(button);

button.addEventListener('click', function() {
    animationActive = !animationActive;      // Toggle the state
    updateButtonText(button);                // Update the button text
});

// Part 3: Function to Open and Close modal
function setupModal(modalId, openBtnId, closeBtnId) {
  const modal = document.getElementById(modalId);
  const openModalButton = document.getElementById(openBtnId);
  const closeModalButton = document.getElementById(closeBtnId);

  openModalButton.addEventListener("click", () => {
    modal.classList.add("show");
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

setupModal("modal", "openModal", "closeModal");