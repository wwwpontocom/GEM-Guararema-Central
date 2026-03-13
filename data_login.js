// --- 1. MONITOR DE ESTADO E ACESSO AUTOMÁTICO ---
document.addEventListener("DOMContentLoaded", () => {
    verificarAcesso();
});

function verificarAcesso() {
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');
    const userSalvo = localStorage.getItem("gem_user_email");

    // Se existe e-mail no LocalStorage, libera a interface imediatamente
    if (userSalvo) {
        console.log("Acesso automático garantido via LocalStorage:", userSalvo);
        if(loginScreen) loginScreen.style.display = 'none';
        if(mainContainer) mainContainer.style.display = 'flex';
    } else {
        // Se não há LocalStorage, verifica o Firebase Auth tradicional
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Sessão Firebase detectada:", user.email);
                checkAuthorization(user.email, loginScreen, mainContainer);
            } else {
                console.log("Nenhuma sessão ativa. Bloqueando tela.");
                if(loginScreen) loginScreen.style.display = 'flex';
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
                console.log("Autorização confirmada no Banco de Dados.");
                // Salva no LocalStorage para o próximo acesso ser instantâneo
                localStorage.setItem("gem_user_email", email);
                
                if(loginScreen) loginScreen.style.display = 'none';
                if(mainContainer) mainContainer.style.display = 'flex';
            } else {
                alert("Este e-mail não está autorizado no banco de dados.");
                sairDoSistema(false); // Sair sem pedir confirmação
            }
        })
        .catch((error) => {
            console.error("Erro no Banco de Dados:", error);
            sairDoSistema(false); 
        });
}

// --- 3. AÇÃO DE LOGIN MANUAL ---
function realizarLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Sucesso! O onAuthStateChanged cuidará do resto
            console.log("Login realizado com sucesso.");
        })
        .catch(error => alert("Erro ao entrar: " + error.message));
}

// --- 4. AÇÃO DE LOGOUT E LIMPEZA ---
function sairDoSistema(confirmar = true) {
    if (confirmar && !confirm("Deseja realmente sair e desautorizar este navegador?")) {
        return;
    }

    // Limpa a memória local para impedir o auto-login
    localStorage.removeItem("gem_user_email");

    firebase.auth().signOut().then(() => {
        console.log("Sessão encerrada.");
        location.reload();
    }).catch(() => {
        location.reload();
    });
}

// --- 5. REGISTRO DE NOVOS ACESSOS (Para a aba Admin) ---
function registrarEAutenticar() {
    const email = document.getElementById('admin-email-input').value.trim();
    if (!email) return alert("Insira um e-mail.");

    const emailKey = email.replace(/\./g, '_');

    firebase.database().ref('usuarios_autorizados/' + emailKey).set({
        email: email,
        data_registro: new Date().toISOString()
    }).then(() => {
        alert("E-mail autorizado com sucesso!");
        // Opcional: já logar este e-mail no navegador atual
        localStorage.setItem("gem_user_email", email);
        location.reload();
    }).catch(err => alert("Erro: " + err.message));
}
