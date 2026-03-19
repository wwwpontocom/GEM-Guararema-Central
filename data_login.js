// --- No topo do seu data_login.js ---
// Estado da Sessão Global
let currentSessionInfo = {
    email: localStorage.getItem("gem_user_email") || "",
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
            checkAuthorization(user.email, loginScreen, mainContainer);
        } else {
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

// --- 2. VERIFICAÇÃO E BIFURCAÇÃO DE LOGS ---
function checkAuthorization(email, loginScreen, mainContainer) {
    const emailKey = email.replace(/\./g, '_');
    
    firebase.database().ref('usuarios_autorizados/' + emailKey).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                currentSessionInfo.email = email;
                localStorage.setItem("gem_user_email", email);
                document.body.classList.add('user-mode'); 
                
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
                
                // DISPARA OS DOIS REGISTROS SEPARADOS
                gerenciarRegistros(email);
            } else {
                alert("Acesso negado: E-mail não autorizado.");
                sairDoSistema(false);
            }
        })
        .catch(() => {
            sairDoSistema(false);
        });
}

// Função inteligente que decide onde gravar cada dado
function gerenciarRegistros(email) {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = (navEntries.length > 0 && navEntries[0].type === "reload");

    if (isReload) {
        // Se for apenas um F5, grava apenas no nó técnico de logs
        registrarLogSistema(email, "RELOAD");
    } else {
        // Se for uma entrada nova (Login), grava em ambos
        registrarAcessoReal(email);
        registrarLogSistema(email, "LOGIN_INICIAL");
    }
}

// Nó: historico_acessos (Privado no Firebase)
function registrarAcessoReal(email) {
    firebase.database().ref('historico_acessos').push({
        email: email,
        data_hora: new Date().toLocaleString("pt-BR"),
        dispositivo: navigator.userAgent,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

// Nó: logs_sistema (Privado e descartável)
function registrarLogSistema(email, acao) {
    firebase.database().ref('logs_sistema').push({
        email: email,
        acao: acao,
        data_hora: new Date().toLocaleString("pt-BR"),
        timestamp: firebase.database.ServerValue.TIMESTAMP
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
