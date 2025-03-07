
// Simple form validation for the contact form
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name === '' || email === '' || message === '') {
        e.preventDefault(); // Prevent form submission if fields are empty
        alert('Please fill out all fields');
    } else {
        alert('Message Sent! Thank you, ' + name);
        // Form will submit to Formspree as it has a valid action URL
    }
});



