/ Get references to the menu and button elements
const menu = document.querySelector('.menu ul');
const menuButton = document.querySelector('.menu-button');

// Add a click event listener to the button
menuButton.addEventListener('click', () => {
    // Toggle the "active" class on the menu element
    menu.classList.toggle('active');
});