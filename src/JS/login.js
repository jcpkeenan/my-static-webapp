// Define fake credentials for testing
const fakeUsername = "admin";
const fakePassword = "password123";

// Function to validate login
function validateLogin(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the input values and trim whitespace
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Check if credentials match
    if (username === fakeUsername && password === fakePassword) {
        // Redirect to dashboard on success
        window.location.href = "maindashboard.html";
    } else {
        // Show error message
        showNotification("Incorrect username or password");
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

// Add event listener to form submit button
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".btn-primary");
    
    if (submitButton) {
        // Replace the href behavior with our validation function
        submitButton.removeAttribute("href");
        submitButton.addEventListener("click", validateLogin);
    }
});