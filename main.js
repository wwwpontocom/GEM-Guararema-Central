 function askAI() {
        const input = document.getElementById('user-input');
        const text = input.value.trim().toLowerCase();
        if (!text) return;

    // Se o usuário pedir histórico, atualizamos a biblioteca antes de buscar
    if (text.includes("conversa") || text.includes("histórico")) {
        atualizarBibliotecaComMensagens();
    }

        addMessage(input.value, 'user');
        input.value = '';

        let bestMatch = null;
        let highestScore = 0;

        for (let key in BIBLIOTECA_LIVRO) {
            let score = 0;
            const item = BIBLIOTECA_LIVRO[key];
            item.keywords.forEach(k => { if (text.includes(k)) score += 10; });
            if (item.html_content.toLowerCase().includes(text)) score += 5;

            if (score > highestScore) {
                highestScore = score;
                bestMatch = key;
            }
        }

        if (bestMatch && highestScore > 0) {
            const data = BIBLIOTECA_LIVRO[bestMatch];
            renderPage(bestMatch);
            
            let resposta = `Encontrei na pág. ${data.pagina}: ${data.resumo}`;
            
            if (text.includes("grave") || text.includes("agudo") || text.includes("altura")) {
                resposta = "A Altura depende da frequência: sons Graves têm baixa frequência (110Hz) e sons Agudos têm alta frequência (880Hz).";
            } else if (text.includes("timbre")) {
                resposta = "O Timbre permite identificar se o som vem de um violino ou de um trompete.";
            } else if (text.includes("instrumento")) {
                resposta = "Os instrumentos estão na pág. 9, divididos em Teclados, Cordas, Madeiras e Metais.";
            }

            addMessage(resposta, 'bot');
        } else {
            addMessage("Não encontrei esse tópico. Tente 'índice', 'elementos' ou 'propriedades'.", 'bot');
        }
    }

let usuarioLogado = null;
const SENHA_MESTRA = "1234";

function validarEObterNome() {
    if (usuarioLogado) return usuarioLogado;
    
    const nome = prompt("Por favor, digite seu Nome:");
    if (!nome) return null;
    
    const senha = prompt("Digite o Código de Acesso:");
    if (senha === SENHA_MESTRA) {
        usuarioLogado = nome;
        return nome;
    } else {
        alert("Acesso negado: Código incorreto.");
        return null;
    }
}


    function renderPage(chave) {
    const dados = BIBLIOTECA_LIVRO[chave];
    const area = document.getElementById('render-area');
    area.style.opacity = 0;
    
    setTimeout(() => {
        area.innerHTML = `
            <div class="fase-header">${dados.fase}</div>
            <div class="section-title"><div class="icon-box">${dados.icone}</div><h2>${dados.titulo}</h2></div>
            <div class="content-text">${dados.html_content}</div>
            <div class="footer"><span>MÉTODO SIMPLIFICADO (MSAM)</span><span>Pág. ${dados.pagina}</span><span>CCB</span></div>
        `;
        area.style.opacity = 1;

        // Se a página aberta for um grupo, ativa a escuta do Firebase para aquele grupo específico
        if (chave.startsWith('grupo_')) {
            ativarEscutaEspecifica(chave);
        }
    }, 150);
}

// Nova função para garantir que o histórico carregue na hora
function ativarEscutaEspecifica(grupo) {
    db.ref('onde_estamos/' + grupo).limitToLast(10).on('value', (snapshot) => {
        const dados = snapshot.val();
        const sufixo = grupo.split('_')[1];
        const container = document.getElementById(`log-grupo-${sufixo}`);
        
        if (!container) return; // Segurança caso a página mude rápido

        let html = "";
        if (dados) {
            const logs = Object.values(dados).reverse();
            logs.forEach(item => {
                const d = new Date(item.timestamp);
                const dataFormatada = d.toLocaleDateString() + " " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0');
                html += `<p style="font-size:11px; margin: 5px 0; border-bottom: 1px solid #ddd; color: #333; text-align: left;">
                            <strong>[${dataFormatada}] ${item.instrutor}:</strong> ${item.nota}
                         </p>`;
            });
        } else {
            html = "<p style='font-size:11px; color:#999;'>Nenhum registro encontrado para este grupo.</p>";
        }
        container.innerHTML = html;
    });
}

// No seu código de switchTab ou inicialização, garanta que:
document.getElementById('alou-content').style.display = 'flex';
// E pode deletar o elemento 'alou-lock-screen' do seu HTML.

   function addMessage(msg, side) {
        const win = document.getElementById('chat-window');
        const div = document.createElement('div');
        div.className = `msg ${side}`;
        div.innerText = msg;
        win.appendChild(div);
        
        // Garante que o scroll acompanhe a última mensagem
        win.scrollTo({
            top: win.scrollHeight,
            behavior: 'smooth'
        });
    }
    
   function switchTab(tab) {
    const assistente = document.getElementById('tab-assistente');
    const alou = document.getElementById('tab-alou');
    const navAssistente = document.getElementById('nav-assistente');
    const navAlou = document.getElementById('nav-alou');

    if (tab === 'assistente') {
        // Controle de Exibição
        assistente.style.display = 'flex';
        alou.style.display = 'none';
        
        // Feedback Visual na Nav
        navAssistente.style.opacity = '1';
        navAssistente.style.borderBottom = '2px solid #4a90e2';
        navAlou.style.opacity = '0.7';
        navAlou.style.borderBottom = 'none';
    } else {
        // Controle de Exibição
        assistente.style.display = 'none';
        alou.style.display = 'flex';
        
        // Feedback Visual na Nav
        navAssistente.style.opacity = '0.7';
        navAssistente.style.borderBottom = 'none';
        navAlou.style.opacity = '1';
        navAlou.style.borderBottom = '2px solid #4a90e2';
    }
}

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzc2DANm1nkILg6T2jrAzm-skD7_-ctt4",
    authDomain: "alou-1a679.firebaseapp.com",
    databaseURL: "https://alou-1a679-default-rtdb.firebaseio.com",
    projectId: "alou-1a679",
    storageBucket: "alou-1a679.firebasestorage.app",
    messagingSenderId: "1033857515698",
    appId: "1:1033857515698:web:441a10a14503dffffac9ab"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// 1. Escuta a lista de participantes e popula o <select>
db.ref('participantes').on('value', (snapshot) => {
    const lista = snapshot.val();
    const select = document.getElementById('aluno-lista');
    if (lista) {
        select.innerHTML = '<option value="">Quem está enviando?</option>';
        for (let nome in lista) {
            let option = document.createElement('option');
            option.value = nome; 
            option.textContent = nome + " (" + lista[nome] + ")"; 
            select.appendChild(option);
        }
    }
});

function enviarMensagemPublica() {
    const inputMsg = document.getElementById('alou-input');
    const inputNome = document.getElementById('aluno-nome-input'); // Your new text input
    const texto = inputMsg.value.trim();
    const nome = inputNome.value.trim();
    
    if (!texto) return;
    if (!nome) {
        alert("Por favor, digite seu nome antes de enviar!");
        return;
    }

    db.ref('chat_comunitario').push({
        usuario: nome,
        mensagem: texto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    inputMsg.value = "";
}

function salvarLog(grupo) {
    const sufixo = grupo.split('_')[1];
    const inputLog = document.getElementById(`input-log-${sufixo}`);
    const inputNome = document.getElementById('aluno-nome-input');
    const texto = inputLog.value.trim();
    const nome = inputNome.value.trim();

    if (!texto || !nome) {
        alert("Preencha seu nome e a nota do log.");
        return;
    }

    db.ref('onde_estamos/' + grupo).push({
        instrutor: nome,
        nota: texto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    inputLog.value = "";
}

// Escuta mensagens em tempo real
db.ref('chat_comunitario').limitToLast(20).on('child_added', (snapshot) => {
    const data = snapshot.val();
    const chatWin = document.getElementById('alou-chat-window');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg bot'; // Style for community chat
    msgDiv.style.background = "#fff";
    msgDiv.style.color = "#333";
    msgDiv.style.alignSelf = "flex-start";
    
    const d = new Date(data.timestamp);
    const hora = d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0');

    msgDiv.innerHTML = `<small style="color:var(--primary); font-weight:bold;">${data.usuario} [${hora}]</small><br>${data.mensagem}`;
    chatWin.appendChild(msgDiv);
    chatWin.scrollTop = chatWin.scrollHeight;
});

async function gerarPDFDoDia() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const dataAtual = new Date().toLocaleDateString();
    
    db.ref('chat_comunitario').once('value').then((snapshot) => {
        const dados = snapshot.val();
        let y = 30;
        
        doc.setFontSize(16);
        doc.text("RELATÓRIO DIÁRIO - ALOU!MSA", 10, 10);
        doc.setFontSize(10);
        doc.text(`Data do Arquivo: ${dataAtual}`, 10, 20);
        doc.line(10, 22, 200, 22);

        for (let id in dados) {
            const linha = `${dados[id].usuario}: ${dados[id].mensagem}`;
            const splitText = doc.splitTextToSize(linha, 180);
            
            if (y + (splitText.length * 7) > 280) {
                doc.addPage();
                y = 20;
            }
            
            doc.text(splitText, 10, y);
            y += (splitText.length * 7);
        }

        doc.save(`Backup_MSA_${dataAtual.replace(/\//g, '-')}.pdf`);
    });
}

// Adicione esta função para buscar as mensagens e colocá-las no objeto do livro
function atualizarBibliotecaComMensagens() {
    db.ref('chat_comunitario').once('value').then((snapshot) => {
        const dados = snapshot.val();
        let htmlHistorico = '<div style="font-family: monospace; font-size: 12px; background: #f4f4f4; padding: 10px; border-radius: 5px;">';
        
        for (let id in dados) {
            htmlHistorico += `<p><strong>${dados[id].usuario}:</strong> ${dados[id].mensagem}</p>`;
        }
        htmlHistorico += '</div>';

        BIBLIOTECA_LIVRO["historico_alou"] = {
            keywords: ["conversas", "historico", "mensagens", "chat", "comunitario", "alou"],
            fase: "LOGS",
            titulo: "HISTÓRICO DO ALOU!MSA",
            icone: "💬",
            resumo: "Estas são as últimas conversas registradas no chat comunitário via Firebase.",
            html_content: htmlHistorico,
            pagina: "Cloud"
        };
    });
}

// Chame a função uma vez ao carregar
atualizarBibliotecaComMensagens();


function enviarMensagemPublica() {
    const inputMsg = document.getElementById('alou-input');
    const texto = inputMsg.value.trim();
    
    if (!texto) return;

    // Trigger the prompt validation
    const nome = validarEObterNome();
    if (!nome) return; // Stop if they cancel or get the password wrong

    db.ref('chat_comunitario').push({
        usuario: nome,
        mensagem: texto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    inputMsg.value = "";
}

function salvarLog(grupo) {
    const sufixo = grupo.split('_')[1];
    const inputLog = document.getElementById(`input-log-${sufixo}`);
    const texto = inputLog.value.trim();

    if (!texto) return;

    // Trigger the prompt validation
    const nome = validarEObterNome();
    if (!nome) return;

    db.ref('onde_estamos/' + grupo).push({
        instrutor: nome,
        nota: texto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    if(inputLog) inputLog.value = "";
}

function escutarLogs() {
    ['grupo_a', 'grupo_b', 'grupo_c'].forEach(grupo => {
        db.ref('onde_estamos/' + grupo).limitToLast(10).on('value', (snapshot) => {
            const dados = snapshot.val();
            let html = "";
            const sufixo = grupo.split('_')[1];
            
            // Importante: Como o HTML_CONTENT é injetado dinamicamente pelo renderPage,
            // precisamos verificar se o container existe no DOM no momento
            const container = document.getElementById(`log-grupo-${sufixo}`);
            
            if (dados) {
                // Inverter ordem para o mais recente aparecer no topo
                const logs = Object.values(dados).reverse();
                logs.forEach(item => {
                    const d = new Date(item.timestamp);
                    const dataFormatada = d.toLocaleDateString() + " " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0');
                    html += `<p style="font-size:11px; margin: 5px 0; border-bottom: 1px solid #ddd; color: #333;">
                                <strong>[${dataFormatada}] ${item.instrutor}:</strong> ${item.nota}
                             </p>`;
                });
            } else {
                html = "<p style='font-size:11px; color:#999;'>Nenhum registro encontrado.</p>";
            }
            
            if (container) container.innerHTML = html;
        });
    });
}

let deferredPrompt;
const btnInstalar = document.getElementById('btn-instalar');

// Escuta o evento do navegador que permite a instalação

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // This line makes the button visible ONLY when installation is possible
    document.getElementById('btn-instalar').style.display = 'block'; 
});

btnInstalar.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Mostra o prompt de instalação do navegador
        deferredPrompt.prompt();
        // Aguarda a escolha do usuário
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('Usuário aceitou a instalação');
        }
        // Limpa o prompt, só pode ser usado uma vez
        deferredPrompt = null;
        btnInstalar.style.display = 'none';
    }
});

// Esconde o botão se o app já estiver instalado
window.addEventListener('appinstalled', () => {
    btnInstalar.style.display = 'none';
    deferredPrompt = null;
    console.log('PWA instalado com sucesso!');
});

function toggleChat() {
    const sidebar = document.querySelector('.chat-sidebar');
    sidebar.classList.toggle('minimized');
    
    // Feedback no botão
    const btn = document.querySelector('.toggle-chat-btn');
    btn.innerText = sidebar.classList.contains('minimized') ? '▲' : '▼';
}
