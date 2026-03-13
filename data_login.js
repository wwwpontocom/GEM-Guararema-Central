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

// Este código deve rodar assim que o index.html abrir
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // --- JÁ ESTÁ LOGADO ---
        console.log("Login automático detectado:", user.email);
        
        // Esconde o formulário de login e mostra o conteúdo
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-container').style.display = 'flex';
        
        // Opcional: Validar se o e-mail está na Whitelist (usuarios_autorizados)
        checkAuthorization(user.email);
    } else {
        // --- NÃO ESTÁ LOGADO ---
        console.log("Nenhum usuário salvo. Mostrando tela de login...");
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('main-container').style.display = 'none';
    }
});

function realizarLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .catch(error => alert("Erro ao entrar: " + error.message));
}

function sairDoSistema() {
    firebase.auth().signOut().then(() => {
        alert("Sessão encerrada.");
        location.reload();
    });
}
