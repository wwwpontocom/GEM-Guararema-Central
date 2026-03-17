// --- 1. MONITOR DE ESTADO E ACESSO AUTOMÁTICO ---
document.addEventListener("DOMContentLoaded", () => {
    verificarAcesso();
});

function verificarAcesso() {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');
    const userSalvo = localStorage.getItem("gem_user_email");

    if (userSalvo) {
        if(loginScreen) loginScreen.style.display = 'none';
        if(mainContainer) mainContainer.style.display = 'flex';

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                firebase.auth().signInAnonymously().catch(err => console.error("Erro no silent auth:", err));
            }
        });
    } else {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                checkAuthorization(user.email, loginScreen, mainContainer);
            } else {
                if(loginScreen) {
                    // Ajuste para garantir visibilidade no mobile
                    loginScreen.style.display = 'flex';
                    loginScreen.style.flexDirection = 'column';
                    loginScreen.style.justifyContent = 'center';
                    loginScreen.style.alignItems = 'center';
                    loginScreen.style.minHeight = '60vh'; 
                }
                if(mainContainer) mainContainer.style.display = 'none';
            }
        });
    }
}

// --- 2. VERIFICAÇÃO E REGISTRO DE LOG ---
function checkAuthorization(email, loginScreen, mainContainer) {
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                localStorage.setItem("gem_user_email", email);
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
                
                // Grava log de quem entrou (Auditoria)
                registrarLogAcesso(email);
            } else {
                alert("Acesso negado: E-mail não autorizado na whitelist.");
                sairDoSistema(false);
            }
        })
        .catch(() => {
            sairDoSistema(false);
        });
}

function registrarLogAcesso(email) {
    const logRef = firebase.database().ref('logs_acesso').push();
    logRef.set({
        email: email,
        data_hora: new Date().toLocaleString("pt-BR"),
        dispositivo: navigator.userAgent
    });
}

// --- 3. AÇÃO DE LOGIN MANUAL ---
function realizarLogin() {
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-senha').value;

    if (!email || !senha) return alert("Preencha todos os campos.");

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, senha);
        })
        .then(() => {
            console.log("Login realizado com sucesso.");
        })
        .catch(error => alert("Erro ao entrar: " + error.message));
}

// --- 4. LOGOUT ---
function sairDoSistema(confirmar = true) {
    if (confirmar && !confirm("Deseja sair do sistema?")) return;

    localStorage.removeItem("gem_user_email");
    firebase.auth().signOut().then(() => {
        location.reload();
    });
}
