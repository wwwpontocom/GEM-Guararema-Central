// 1. MONITOR AUTH STATE
firebase.auth().onAuthStateChanged((user) => {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');

    if (user) {
        console.log("Session detected:", user.email);
        checkAuthorization(user.email, loginScreen, mainContainer);
    } else {
        console.log("No session. Showing login screen.");
        if(loginScreen) loginScreen.style.display = 'flex';
        if(mainContainer) mainContainer.style.display = 'none';
    }
});

// 2. CHECK AUTHORIZATION
function checkAuthorization(email, loginScreen, mainContainer) {
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Access Granted.");
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
            } else {
                alert("This email is not authorized in the database.");
                sairDoSistema();
            }
        })
        .catch((error) => {
            console.error("Database error:", error);
            // If the database rules block us before we check, we should log out
            sairDoSistema(); 
        });
}

// 3. LOGIN ACTION
function realizarLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    if (!email || !senha) {
        alert("Please fill in all fields.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .catch(error => alert("Erro: " + error.message));
}

// 4. LOGOUT ACTION
function sairDoSistema() {
    firebase.auth().signOut().then(() => {
        location.reload();
    });
}
