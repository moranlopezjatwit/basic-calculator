document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace this with actual authentication logic)
    if (username === 'user' && password === 'password') {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
