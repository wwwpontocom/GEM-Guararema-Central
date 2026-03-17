// --- 1. MONITOR DE ESTADO E ACESSO AUTOMÁTICO ---
document.addEventListener("DOMContentLoaded", () => {
    verificarAcesso();
});

function verificarAcesso() {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');
    const userSalvo = localStorage.getItem("gem_user_email");

    if (userSalvo) {
        console.log("Acesso via LocalStorage detectado. Sincronizando com Firebase...");
        
        if(loginScreen) loginScreen.style.display = 'none';
        if(mainContainer) mainContainer.style.display = 'flex';

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                console.log("Firebase Auth em standby. Re-autenticando silenciosamente...");
                firebase.auth().signInAnonymously().catch(err => console.error("Erro no silent auth:", err));
            } else {
                console.log("Firebase Auth Ativo: ", user.uid);
            }
        });
    } else {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                checkAuthorization(user.email, loginScreen, mainContainer);
            } else {
                if(loginScreen) {
                    // FIX IS HERE: Ensuring flex-direction for mobile visibility
                    loginScreen.style.display = 'flex';
                    loginScreen.style.flexDirection = 'column';
                    loginScreen.style.justifyContent = 'center';
                    loginScreen.style.alignItems = 'center';
                    loginScreen.style.minHeight = 'vh'; 
                }
                if(mainContainer) mainContainer.style.display = 'none';
            }
        });
    }
}

// --- 2. VERIFICAÇÃO NO BANCO DE DADOS (WHITELIST) ---
function checkAuthorization(email, loginScreen, mainContainer) {
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Autorização confirmada.");
                localStorage.setItem("gem_user_email", email);
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
            } else {
                alert("Este e-mail não está autorizado.");
                sairDoSistema(false);
            }
        })
        .catch((error) => {
            console.error("Erro nas Rules:", error);
            alert("Erro de autenticação. Por favor, faça login novamente.");
            sairDoSistema(false);
        });
}

// --- 3. AÇÃO DE LOGIN MANUAL (INSTRUTORES) ---
function realizarLogin() {
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-senha').value;

    if (!email || !senha) return alert("Preencha todos os campos.");

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, senha);
        })
        .then(() => {
            console.log("Login manual ok.");
        })
        .catch(error => alert("Erro: " + error.message));
}

// --- 4. LOGOUT (LIMPEZA TOTAL) ---
function sairDoSistema(confirmar = true) {
    if (confirmar && !confirm("Deseja desautorizar este navegador?")) return;

    localStorage.removeItem("gem_user_email");
    firebase.auth().signOut().then(() => {
        location.reload();
    });
}
