

function openRequestPasswordModal() {
    $("#RequestPasswordModal").modal('show');
}

async function closeRequestPasswordModal() {

    let prodURl = 'https://senergy-webapi.azurewebsites.net/api/User/RequestPassword';
    let devURL = 'https://localhost:7287/api/User/RequestPassword';

    const email = document.getElementById("email").value.trim();
    
    await fetch(prodURl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            UserEmail: email,
        })
    });

    $("#RequestPasswordModal").modal('hide');
    window.location.href = "index.html";  
}