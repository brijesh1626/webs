/ Function to handle scaling of social icons on hover
const socialIcons = document.querySelectorAll('.social-icon img');

socialIcons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.1)';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1.0)';
  });
});

// Function to handle form submission
const form = document.querySelector('.frm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values
  const name = document.querySelector('.fname').value;
  const email = document.querySelector('.email').value;

  // Do something with the form data, for example, display it in an alert
  alert(`Name: ${name}\nEmail: ${email}`);
});