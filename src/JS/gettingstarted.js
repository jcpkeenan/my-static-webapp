document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('submitButton');
    
    // Function to update button state
    function updateSubmitButton() {
        submitButton.disabled = !termsCheckbox.checked;
        
        // Update visual appearance of the button
        if (termsCheckbox.checked) {
            submitButton.classList.remove('btn-secondary');
            submitButton.classList.add('btn-primary');
        } else {
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-secondary');
        }
    }
    
    // Set initial state
    updateSubmitButton();
    
    // Add event listener to checkbox
    termsCheckbox.addEventListener('change', updateSubmitButton);
});

function submit(){
    window.location.href = "registerthankyou.html";
}