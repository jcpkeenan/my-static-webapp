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

// Define fake credentials for testing
const fakeUsername = "admin";
const fakePassword = "password123";
let jwtToken = null;

// Function to validate login
async function validateLogin(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the input values and trim whitespace
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Check if credentials match
    // if (username === fakeUsername && password === fakePassword) {
    //     // Redirect to dashboard on success
    //     window.location.href = "maindashboard.html";
    // } else {
    //     // Show error message
    //     showNotification("Incorrect username or password");
    // }

    // Basic validation
    if (!username || !password) {
        showNotification("Please enter both email and password");
        return;
    }

    try {
        // Show loading state (optional)
        showSuccessNotification("Authenticating...");
        
        // Make API call to authenticate
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
            
            // Store the JWT token in global variable
            // Adjust the property name based on your API response structure
            jwtToken = result.Data.JWTModel.EncodedToken;

            localStorage.setItem('Token', jwtToken);
            
            // Optional: Log for debugging (remove in production)
            console.log('Authentication successful, token stored');
            
            // Redirect to dashboard on success
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

// Function to display notification
function showNotification(message) {
    // Check if notification container already exists
    let notificationContainer = document.getElementById("notification-container");
    
    // If it doesn't exist, create it
    if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        notificationContainer.style.position = "fixed";
        notificationContainer.style.bottom = "20px";
        notificationContainer.style.right = "20px";
        notificationContainer.style.zIndex = "1000";
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "alert alert-danger";
    notification.style.padding = "15px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.textContent = message;
    
    // Add it to the container
    notificationContainer.appendChild(notification);
    
    // Remove it after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showSuccessNotification(message) {
    // Check if notification container already exists
    let notificationContainer = document.getElementById("notification-container");
    
    // If it doesn't exist, create it
    if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        notificationContainer.style.position = "fixed";
        notificationContainer.style.bottom = "20px";
        notificationContainer.style.right = "20px";
        notificationContainer.style.zIndex = "1000";
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "alert alert-success";
    notification.style.padding = "15px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.style.backgroundColor = "#d4edda";
    notification.style.color = "#155724";
    notification.style.border = "1px solid #c3e6cb";
    notification.textContent = message;
    
    // Add it to the container
    notificationContainer.appendChild(notification);
    
    // Remove it after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add event listener to form submit button
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".btn-primary");
    
    if (submitButton) {
        // Replace the href behavior with our validation function
        submitButton.removeAttribute("href");
        submitButton.addEventListener("click", validateLogin);
    }
});