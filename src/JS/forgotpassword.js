async function resetPassword(event){
    event.preventDefault();
    
    // Get the input values and trim whitespace
    const email = document.getElementById("email").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    
    if (!email || !newPassword) {
        showNotification("Fields can not be empty!");
        return;
    }

    // Check length (8-16 characters)
    if (newPassword.length < 8 || newPassword.length > 16) {
        showAllPasswordRequirements();
        return;
    }
    
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(newPassword)) {
        showAllPasswordRequirements();
        return;
    }
    
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(newPassword)) {
        showAllPasswordRequirements();
        return;
    }

    // Check for at least one number
    if (!/[0-9]/.test(newPassword)) {
        showAllPasswordRequirements();
        return false;
    }

    try {
        showSuccessNotification("Updating...");

        let prodURl = 'https://senergy-webapi.azurewebsites.net/api/User/UpdatePassword';
        let devURL = 'https://localhost:7287/api/User/UpdatePassword';
        
        const response = await fetch(prodURl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: email,
                NewPassword: newPassword
            })
        });
        
        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            
            jwtToken = result.Data.JWTModel.EncodedToken;

            localStorage.setItem('Token', jwtToken);
            
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
    const passwordField = document.getElementById('newPassword');
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

function showAllPasswordRequirements() {
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
    notification.className = "alert alert-info"; // Using info style for general requirements
    notification.style.padding = "15px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.style.maxWidth = "300px";
    
    // Create the main message
    const mainMessage = document.createElement("div");
    mainMessage.innerHTML = "<strong>Password Requirements:</strong>";
    mainMessage.style.marginBottom = "10px";
    
    // Create the requirements list
    const requirementsList = document.createElement("ul");
    requirementsList.style.margin = "0";
    requirementsList.style.paddingLeft = "20px";
    
    // All requirements
    const allRequirements = [
        "Must be between 8 and 16 characters long",
        "Must contain at least one uppercase letter (A-Z)",
        "Must contain at least one lowercase letter (a-z)",
        "Must contain at least one number (1-9)"
    ];
    
    // Add all requirements to list
    allRequirements.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        listItem.style.marginBottom = "5px";
        requirementsList.appendChild(listItem);
    });
    
    // Append main message and list to notification
    notification.appendChild(mainMessage);
    notification.appendChild(requirementsList);
    
    notificationContainer.appendChild(notification);
   
    setTimeout(() => {
        notification.remove();
    }, 7000); // Show for 7 seconds for info message
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