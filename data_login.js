// --- CONFIGURATION & INITIALIZATION ---
// Ensure your firebase-config is already loaded before this script

// 1. MONITOR AUTH STATE (The "Automatic Brain")
firebase.auth().onAuthStateChanged((user) => {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');

    if (user) {
        // --- USER IS LOGGED IN ---
        console.log("Session detected:", user.email);
        
        // Silently check if the user is authorized in the database
        checkAuthorization(user.email, loginScreen, mainContainer);
    } else {
        // --- NO USER LOGGED IN ---
        console.log("No session. Showing login screen.");
        if(loginScreen) loginScreen.style.display = 'flex';
        if(mainContainer) mainContainer.style.display = 'none';
    }
});

// 2. CHECK AUTHORIZATION (The "Whitelist" Filter)
function checkAuthorization(email, loginScreen, mainContainer) {
    // Sanitize email: replace ALL dots with underscores
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Access Granted: Instructor authorized.");
                
                // Switch visibility
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
                
                // Add class to side-menu if it exists
                const sideMenu = document.getElementById('side-menu');
                if(sideMenu) sideMenu.classList.add('authorized');
            } else {
                console.error("Access Denied: Email not in whitelist.");
                alert("This account is not authorized as an instructor.");
                sairDoSistema(); // Force logout
            }
        })
        .catch((error) => {
            console.error("Database error:", error);
            sairDoSistema();
        });
}

// 3. LOGIN ACTION (Called by the "ENTRAR" Button)
function realizarLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    if (!email || !senha) {
        alert("Please fill in all fields.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            console.log("Login successful!");
            // The onAuthStateChanged observer above will handle the rest
        })
        .catch((error) => {
            let message = "Error logging in.";
            if (error.code === 'auth/wrong-password') message = "Wrong password.";
            if (error.code === 'auth/user-not-found') message = "User not found.";
            alert(message + " (" + error.message + ")");
        });
}

// 4. LOGOUT ACTION
function sairDoSistema() {
    firebase.auth().signOut().then(() => {
        console.log("User signed out.");
        location.reload(); // Refresh to clear all sensitive data from memory
    });
}
