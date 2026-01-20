document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Simple validation logic
    if (user === "admin" && pass === "password123") {
        alert("Login Successful! Welcome to Project INCOPs.");
        // You could use: window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try 'admin' and 'password123'.");
    }
});
