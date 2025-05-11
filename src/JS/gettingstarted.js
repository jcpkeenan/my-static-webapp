document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('Z2NZNJqJhFU5Oy2fM');

     // Get the navbar toggler button
     const navbarToggler = document.querySelector('.navbar-toggler');
    
     // If the navbar toggler has Bootstrap 5 attributes but we're using Bootstrap 4
     if (navbarToggler && navbarToggler.getAttribute('data-bs-toggle') === 'collapse') {
         // Replace Bootstrap 5 attributes with Bootstrap 4 attributes
         navbarToggler.setAttribute('data-toggle', 'collapse');
         navbarToggler.setAttribute('data-target', '#navbarSupportedContent');
         
         // Remove Bootstrap 5 attributes to prevent conflicts
         navbarToggler.removeAttribute('data-bs-toggle');
         navbarToggler.removeAttribute('data-bs-target');
     }

    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('submitButton');
    
    function updateSubmitButton() {
        submitButton.disabled = !termsCheckbox.checked;
        
        if (termsCheckbox.checked) {
            submitButton.classList.remove('btn-secondary');
            submitButton.classList.add('btn-primary');
        } else {
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-secondary');
        }
    }
    
    updateSubmitButton();
    
    termsCheckbox.addEventListener('change', updateSubmitButton);
});

function sendEmail(){

    document.getElementById('submitButton').disabled = true;
    
    const form = document.getElementById('contactForm');

    let from_name = document.getElementById('inputFirstName').value + ' ' + document.getElementById('inputLastName').value;
    let first_name = document.getElementById('inputFirstName').value;
    let last_name = document.getElementById('inputLastName').value;
    let from_email = document.getElementById('inputEmail').value;
    let phone_number = document.getElementById('inputPhoneNumber').value;
    let message = document.getElementById('inputNotes').value;
    const now = new Date();
    const localeTime = now.toLocaleTimeString();

    let message_body = `
    Contact Form Submission from: ${from_name}

    First Name: ${first_name}
    Last Name: ${last_name}
    Email: ${from_email}
    Phone: ${phone_number}

    Message:
    ${message}
    `
    const templateParams = {
        title: "Getting Started With Senergy AI",
        name: from_name,
        time: localeTime,
        message: message_body,
        email: from_email,
    };

    emailjs.send('service_f7vpbte', 'template_rd5s9h7', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
             // Create success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.color = 'green';
            successMessage.style.padding = '10px';
            successMessage.style.marginTop = '10px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.backgroundColor = '#d4edda';
            successMessage.style.border = '1px solid #c3e6cb';
            successMessage.id = 'statusMessage';
            
            // Add the message to the form
            form.appendChild(successMessage);
            
            // Reset the form
            form.reset();
            
            // Remove the message after 5 seconds
            setTimeout(function() {
                 if (successMessage.parentNode) {
                     successMessage.parentNode.removeChild(successMessage);
                     window.location.href = "registerthankyou.html";
                 }
            }, 3000);
        }, function(error) {
            console.log('FAILED...', error);
            // Create error message
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Failed to send message. Please try again later.';
            errorMessage.style.color = 'red';
            errorMessage.style.padding = '10px';
            errorMessage.style.marginTop = '10px';
            errorMessage.style.borderRadius = '5px';
            errorMessage.style.backgroundColor = '#f8d7da';
            errorMessage.style.border = '1px solid #f5c6cb';
            errorMessage.id = 'statusMessage';
            
            // Add the message to the form
            form.appendChild(errorMessage);
            
            // Remove the message after 5 seconds
            setTimeout(function() {
                if (errorMessage.parentNode) {
                    errorMessage.parentNode.removeChild(errorMessage);
                }
            }, 5000);
    });
}