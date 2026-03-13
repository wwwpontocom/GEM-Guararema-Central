// Function to handle login using the scripts already in your index.html
function loginInstructor(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login successful!");
            checkAuthorization(userCredential.user.email);
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

// Function to check if the email is in our Whitelist
function checkAuthorization(email) {
    const emailKey = email.replace(/\./g, '_');
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Welcome, Instructor!");
                // Here you call the function to show your hidden menu items
                document.getElementById('side-menu').classList.add('authorized');
            } else {
                alert("Unauthorized email. Logging out.");
                firebase.auth().signOut();
            }
        });
}
