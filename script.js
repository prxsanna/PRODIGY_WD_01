// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform basic validation
    if (name.trim() === '') {
        alert('Please enter your name');
        return;
    }

    if (email.trim() === '' || !validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter a message');
        return;
    }

    // If all validation passes, you can proceed with form submission or other actions
    // For example, you might send the form data to a server using fetch or XMLHttpRequest
    // and handle the response accordingly.
}

// Function to validate email format
function validateEmail(email) {
    // Regular expression for email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Event listener to handle form submission
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
