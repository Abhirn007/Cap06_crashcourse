<script>
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var role = document.getElementById('role').value;
    var password = document.getElementById('password').value;
    var user = { name: name, role: role, password: password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign up successful!');
    window.location.href = "login.html"; // Redirect to login page
});
</script>