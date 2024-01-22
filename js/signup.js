

function signUpWithEmailAndPassword() {
    var companyName = document.getElementById('companyName').value;
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var statusLabel = document.getElementById('statusLabel');

    var auth = firebase.auth();
    auth.createUserWithEmailAndPassword(newUsername, newPassword)
        .then((userCredential) => {
            // Signed up successfully
            var user = userCredential.user;
            console.log('User signed up:', user);

            // Additional logic, e.g., updating user profile
            user.updateProfile({
                displayName: companyName,
            }).then(() => {
                console.log('User profile updated successfully');
            }).catch((error) => {
                console.error('Error updating user profile:', error);
            });

            // Additional logic, e.g., saving company information to Realtime Database
            var database = firebase.database();
            var userId = user.uid;
            database.ref('users/' + userId).set({
                username: newUsername,
                companyName: companyName,
            }).then(() => {
                console.log('User information saved to Realtime Database');
            }).catch((error) => {
                console.error('Error saving user information to Realtime Database:', error);
            });
            

            // Update status label
            statusLabel.innerText = 'Signup successful!';
            statusLabel.classList.remove('text-red-500');
            statusLabel.classList.add('text-green-500');
        })
        .catch((error) => {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Signup error:', errorCode, errorMessage);

            // Update status label
            statusLabel.innerText = `Signup failed: ${errorMessage}`;
            statusLabel.classList.remove('text-green-500');
            statusLabel.classList.add('text-red-500');
        });
}



function handleEnterKey(event) {
    if (event.key === 'Enter') {
        signUpWithEmailAndPassword()
    }
}
document.addEventListener('keydown', handleEnterKey);
