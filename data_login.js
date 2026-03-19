// --- No topo do seu data_login.js ---
// Isso cria um "Estado da Sessão" global para o PWA
let currentSessionInfo = {
    email: localStorage.getItem("gem_user_email") || "", // Tenta recuperar se já logado
    dispositivo: navigator.userAgent
};

// --- 1. MONITOR DE ESTADO E ACESSO AUTOMÁTICO ---
document.addEventListener("DOMContentLoaded", () => {
    verificarAcesso();
});

function verificarAcesso() {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Sempre verifica autorização e grava log ao detectar um usuário logado
            checkAuthorization(user.email, loginScreen, mainContainer);
        } else {
            // Se não há usuário, limpa o localStorage e mostra login
            localStorage.removeItem("gem_user_email");
            if(loginScreen) {
                loginScreen.style.display = 'flex';
                loginScreen.style.flexDirection = 'column';
                loginScreen.style.justifyContent = 'center';
                loginScreen.style.alignItems = 'center';
            }
            if(mainContainer) mainContainer.style.display = 'none';
        }
    });
}


// --- 2. VERIFICAÇÃO E REGISTRO DE LOG ---
function checkAuthorization(email, loginScreen, mainContainer) {
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                // 1. Atualiza o objeto global de sessão
                currentSessionInfo.email = email;
                
                // 2. Persiste para o navegador (usado pelo data_licoes.js)
                localStorage.setItem("gem_user_email", email);

                // 3. Ativa o bloqueio visual de edição/exclusão no CSS
                document.body.classList.add('user-mode'); 
                
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
                
                // 4. Registra o log histórico
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
