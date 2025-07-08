$(document).ready(function() {
    // Fix for navbar toggler on mobile
    $('.navbar-toggler').on('click', function() {
        $('#navbarSupportedContent').toggleClass('show');
    });
    
    // Adjust card height on smaller screens
    function adjustCardHeight() {
        if (window.innerWidth < 576) {
            $('.card').css('margin-top', '10px');
        } else {
            $('.card').css('margin-top', '');
        }
    }
    
    // Run on page load
    adjustCardHeight();
    
    // Run on window resize
    $(window).resize(function() {
        adjustCardHeight();
    });
    
    // Form validation
    $('a.btn-primary').on('click', function(e) {
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (!username || !password) {
            e.preventDefault();
            alert('Please fill in all required fields');
        }
    });
    
    // Fix for iOS input zoom
    $('input, select, textarea').on('touchstart focusin', function() {
        $(this).attr('autocomplete', 'off');
        $(this).attr('autocorrect', 'off');
        $(this).attr('autocapitalize', 'off');
        $(this).attr('spellcheck', 'false');
    });
});

let jwtToken = null;

async function validateLogin(event) {
    event.preventDefault();
    
    // Get the input values and trim whitespace
    const username = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (!username || !password) {
        showNotification("Please enter both email and password");
        return;
    }

    try {
        showSuccessNotification("Authenticating...");
        
        const response = await fetch('https://senergy-webapi.azurewebsites.net/api/User/Authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EMailAddress: username,
                Password: password
            })
        });
        
        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            
            jwtToken = result.Data.JWTModel.EncodedToken;
            let firstName = result.Data.FirstName;
            let lastName = result.Data.LastName;

            localStorage.setItem('Token', jwtToken);
            localStorage.setItem('FirstName', firstName);
            localStorage.setItem('LastName', lastName);
            
            console.log('Authentication successful, token stored');
            
            window.location.href = "maindashboard.html";
            
        } else {
            // Handle authentication failure
            const errorData = await response.json().catch(() => ({}));
            const errorMessage = errorData.message || "Authentication failed";
            showNotification(errorMessage);
        }
        
    } catch (error) {
        // Handle network or other errors
        console.error('Login error:', error);
        showNotification("Network error. Please try again.");
    }
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Function to display notification
function showNotification(message) {
    let notificationContainer = document.getElementById("notification-container");
    
    if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        notificationContainer.style.position = "fixed";
        notificationContainer.style.bottom = "20px";
        notificationContainer.style.right = "20px";
        notificationContainer.style.zIndex = "1000";
        document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement("div");
    notification.className = "alert alert-danger";
    notification.style.padding = "15px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showSuccessNotification(message) {
    let notificationContainer = document.getElementById("notification-container");
    
    if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        notificationContainer.style.position = "fixed";
        notificationContainer.style.bottom = "20px";
        notificationContainer.style.right = "20px";
        notificationContainer.style.zIndex = "1000";
        document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement("div");
    notification.className = "alert alert-success";
    notification.style.padding = "15px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.style.backgroundColor = "#d4edda";
    notification.style.color = "#155724";
    notification.style.border = "1px solid #c3e6cb";
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".btn-primary");
    
    if (submitButton) {
        // Replace the href behavior with our validation function
        submitButton.removeAttribute("href");
        submitButton.addEventListener("click", validateLogin);
    }
});