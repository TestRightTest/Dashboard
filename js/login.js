var auth = firebase.auth();
var redirecting = false; // Initialize the flag

// Login Code Working
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginStatusLabel = document.getElementById('loginStatusLabel');

    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('User signed in:', user);

            // Update status label
            loginStatusLabel.innerText = 'Login successful!';
            loginStatusLabel.classList.remove('text-red-500');
            loginStatusLabel.classList.add('text-green-500');

            // Call getCurrentUserId after successful login
            history.replaceState({}, document.title, 'dashboard.html');
            // getCurrentUserId();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Login error:', errorCode, errorMessage);

            // Update status label
            loginStatusLabel.innerText = `Login failed: ${errorMessage}`;
            loginStatusLabel.classList.remove('text-green-500');
            loginStatusLabel.classList.add('text-red-500');
        });
}


function handleEnterKey(event) {
    if (event.key === 'Enter') {
        login()
    }
}
document.addEventListener('keydown', handleEnterKey);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var userId = user.uid;
        var email = user.email;

        // Perform actions based on the user information
        console.log('User ID:', userId);
        console.log('Email:', email);


        if (user && window.location.pathname !== '/dashboard.html' && !redirecting) {
            // Set the flag to avoid repeated redirects
            redirecting = true;
            // Redirect to the dashboard
            
            window.location.href = 'dashboard.html';
            window.location.replace = 'dashboard.html';
        }
        // You can use the user information to customize the dashboard content
    } else {
        // User is not signed in, redirect to the login page
        // window.location.href = 'login.html';
    }
});