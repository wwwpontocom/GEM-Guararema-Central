function askAI() {
    const input = document.getElementById('user-input');
    const text = input.value.trim().toLowerCase();
    if (!text) return;

    // Se o usuário pedir histórico, atualizamos a biblioteca antes de buscar
    if (text.includes("conversa") || text.includes("histórico")) {
        if (typeof atualizarBibliotecaComMensagens === 'function') {
            atualizarBibliotecaComMensagens();
        }
    }

    addMessage(input.value, 'user');
    input.value = '';

    let bestMatch = null;
    let highestScore = 0;

    for (let key in BIBLIOTECA_LIVRO) {
        let score = 0;
        const item = BIBLIOTECA_LIVRO[key];
        
        // Search logic
        if (item.keywords) {
            item.keywords.forEach(k => { if (text.includes(k.toLowerCase())) score += 10; });
        }
        if (item.html_content && item.html_content.toLowerCase().includes(text)) score += 5;

        if (score > highestScore) {
            highestScore = score;
            bestMatch = key;
        }
    }

    if (bestMatch && highestScore > 0) {
        const data = BIBLIOTECA_LIVRO[bestMatch];
        
        // FIX: Changed renderPage to mostrarConteudo
        mostrarConteudo(bestMatch); 
        
        let resposta = `Encontrei na pág. ${data.pagina || '---'}: ${data.resumo || 'Veja o conteúdo na tela.'}`;
        
        // Specific overrides for quick facts
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
    // 1. Mapeamento de todas as abas do sistema
    const allTabs = [
        'assistente', 'alou', 'agenda', 'cronograma', 
        'turmas', 'moo', 'instrumentos', 'exercicios', 'audios', 'programa'
    ];
    
    // 2. Reset Geral: Esconde todas e limpa estilos
    allTabs.forEach(id => {
        const contentEl = document.getElementById('tab-' + id);
        const navEl = document.getElementById('nav-' + id);
        
        if (contentEl) contentEl.style.display = 'none';
        if (navEl) {
            navEl.style.opacity = '0.7';
            navEl.style.borderBottom = 'none';
        }
    });

    // 3. Ativa a aba solicitada
    const activeContent = document.getElementById('tab-' + tab);
    const activeNav = document.getElementById('nav-' + tab);

    if (activeContent) {
        // Lógica de exibição específica
        if (tab === 'alou' || tab === 'assistente') {
            activeContent.style.display = 'flex';
        } else {
            activeContent.style.display = 'block';
        }

        // --- GATILHO DA AGENDA ---
        if (tab === 'agenda') {
            console.log("Iniciando renderização da Agenda...");
            if (typeof renderizarAgenda === "function") {
                renderizarAgenda();
            }
        }
    }

    // 4. Destaque visual na Nav (se existir)
    if (activeNav) {
        activeNav.style.opacity = '1';
        activeNav.style.borderBottom = '2px solid #4a90e2';
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

    // Usando sua lógica de validação de Nome/Senha Mestra
    const nome = validarEObterNome();
    if (!nome) return; 

    db.ref('chat_comunitario').push({
        usuario: nome,
        mensagem: texto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        inputMsg.value = "";
    }).catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
    });
}

function salvarLog(grupo) {
    const sufixo = grupo.split('_')[1];
    const inputLog = document.getElementById(`input-log-${sufixo}`);
    const inputNome = document.getElementById('aluno-nome-input');
    const inputCodigo = document.getElementById('input-codigo-acesso');
    
    let nome = inputNome ? inputNome.value.trim() : "";
    let codigo = inputCodigo ? inputCodigo.value.trim() : "";
    const texto = inputLog ? inputLog.value.trim() : "";

    if (!texto) {
        alert("Por favor, digite a nota do log.");
        return;
    }

    // Fallbacks caso o formulário não esteja preenchido
    if (!nome) {
        nome = prompt("Por favor, digite seu nome (Instrutor):");
        if (!nome) return;
    }

    if (!codigo) {
        codigo = prompt("Digite o código de acesso para salvar:");
        if (!codigo) return;
    }

    db.ref('onde_estamos/' + grupo).push({
        instrutor: nome,
        nota: texto,
        codigo_utilizado: codigo,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        alert("Histórico atualizado com sucesso!");
        if (inputLog) inputLog.value = "";
    }).catch((error) => {
        console.error("Erro ao salvar no Firebase:", error);
        alert("Erro ao salvar. Verifique sua conexão.");
    });
}

// ÚNICO Escutador para o Chat Comunitário
db.ref('chat_comunitario').limitToLast(20).on('child_added', (snapshot) => {
    const data = snapshot.val();
    const chatWin = document.getElementById('alou-chat-window');
    
    if (!chatWin) return; 

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg bot'; 
    msgDiv.style.background = "#fff";
    msgDiv.style.color = "#333";
    msgDiv.style.alignSelf = "flex-start";
    msgDiv.style.marginBottom = "8px";
    
    const d = new Date(data.timestamp);
    const hora = d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0');

    msgDiv.innerHTML = `<small style="color:var(--primary); font-weight:bold;">${data.usuario} [${hora}]</small><br>${data.mensagem}`;
    chatWin.appendChild(msgDiv);
    chatWin.scrollTop = chatWin.scrollHeight;
});

function carregarLogs() {
    console.log("Sincronizando logs com Firebase...");
    if (typeof escutarLogs === "function") {
        escutarLogs();
    }
}

function escutarLogs() {
    ['grupo_a', 'grupo_b', 'grupo_c'].forEach(grupo => {
        db.ref('onde_estamos/' + grupo).limitToLast(10).on('value', (snapshot) => {
            const dados = snapshot.val();
            let html = "";
            const sufixo = grupo.split('_')[1];
            const container = document.getElementById(`log-grupo-${sufixo}`);
            
            if (dados) {
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

function toggleChat(forceOpen = false) {
    const sidebar = document.querySelector('.chat-sidebar');
    const header = document.querySelector('.chat-header');
    if (!sidebar) return;

    if (forceOpen) {
        sidebar.classList.remove('minimized');
    } else {
        sidebar.classList.toggle('minimized');
    }

    const isMinimized = sidebar.classList.contains('minimized');
    
    // Update header text based on state
    if (header) {
        header.innerText = isMinimized ? 'Abrir Assistente GEM' : 'Fechar Assistente GEM';
    }

    // Scroll to bottom if opened
    if (!isMinimized) {
        const win = document.getElementById('chat-window');
        if (win) {
            setTimeout(() => {
                win.scrollTop = win.scrollHeight;
            }, 300);
        }
    }
}

// Single initialization block
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.chat-header');
    const userInput = document.getElementById('user-input');
 const sidebar = document.querySelector('.chat-sidebar');

    // 1. Toggle on header click
    if (header) {
        header.addEventListener('click', (e) => {
            // Don't toggle if clicking the internal input specifically
            if (e.target.tagName !== 'INPUT') {
                toggleChat();
            }
        });
    }

    // 2. AUTO-OPEN when user types or focuses on search
    if (userInput) {
        userInput.addEventListener('input', () => {
            const sidebar = document.querySelector('.chat-sidebar');
            if (sidebar && sidebar.classList.contains('minimized')) {
                toggleChat(true); // Force open
            }
        });
        
      userInput.addEventListener('focus', () => {
            if (sidebar && sidebar.classList.contains('minimized')) {
                toggleChat(true); // Open immediately when clicked
            }
        });
    }

    // 3. Initial Library Update
    atualizarBibliotecaComMensagens();

   // 4. Force Start Minimized with correct text
    if (sidebar) {
        sidebar.classList.add('minimized');
        if (header) {
            header.innerText = 'Abrir Assistente GEM';
        }
    }
    
    // 5. Start listening to logs
    escutarLogs();
});

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function abrirPopup(input, icone = '📚') {
    // CORREÇÃO: Transforma string simples em Array para o .map não quebrar
    const slidesArray = Array.isArray(input) ? input : [input];

    if (!document.getElementById('modal-animation-style')) {
        const style = document.createElement('style');
        style.id = 'modal-animation-style';
        style.innerHTML = `
            .modal-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:3000; backdrop-filter: blur(4px); }
            .modal-page { background: white; border-radius: 12px; width: 500px; max-width: 90%; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); position: relative; border-top: 5px solid var(--primary); touch-action: pan-y; }
            .slider-container { display: flex; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); width: 100%; }
            .slide { min-width: 100%; padding: 30px; box-sizing: border-box; font-family: Arial; user-select: none; max-height: 70vh; overflow-y: auto; }
            .nav-btn { background: var(--primary); color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; }
            .nav-btn:disabled { background: #ccc; cursor: not-allowed; }
            .dots { display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; }
            .dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
            .dot.active { background: var(--primary); }
        `;
        document.head.appendChild(style);
    }

    currentSlide = 0;
    const overlay = document.createElement('div');
    overlay.className = "modal-overlay";
    
    // Esconde navegação se houver apenas 1 slide
    const showNav = slidesArray.length > 1 ? 'flex' : 'none';

    overlay.innerHTML = `
        <div class="modal-page" id="modalPage">
            <div class="slider-container" id="slider">
                ${slidesArray.map(content => `<div class="slide">${content}</div>`).join('')}
            </div>
            
            <div class="dots" id="dots" style="display: ${showNav}">
                ${slidesArray.map((_, i) => `<div class="dot ${i===0?'active':''}"></div>`).join('')}
            </div>

            <div style="display:flex; justify-content: space-between; padding: 0 20px 20px;">
                <button class="nav-btn" id="prevBtn" style="display: ${showNav}" disabled onclick="mudarSlide(-1)">Anterior</button>
                <button class="nav-btn" onclick="fecharPopup(this)" style="background:#888;">Fechar</button>
                <button class="nav-btn" id="nextBtn" style="display: ${showNav}" onclick="mudarSlide(1)">Próximo</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const modalPage = overlay.querySelector('#modalPage');
    modalPage.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
    modalPage.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, {passive: true});

    function handleSwipe() {
        if (slidesArray.length <= 1) return;
        const threshold = 50;
        if (touchStartX - touchEndX > threshold) mudarSlide(1);
        else if (touchEndX - touchStartX > threshold) mudarSlide(-1);
    }
}

function mudarSlide(direcao) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if(!slider || slides.length === 0) return;
    
    currentSlide = Math.max(0, Math.min(currentSlide + direcao, slides.length - 1));
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === slides.length - 1;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function fecharPopup(btn) {
    btn.closest('.modal-overlay').remove();
}

let DADOS_ALUNOS = []; 
const URL_GITHUB = "https://raw.githubusercontent.com/wwwpontocom/GEM-Guararema-Central/refs/heads/main/alunos.json";

// 2. Carga Assíncrona dos Dados
async function carregarDadosAlunos() {
    try {
        const response = await fetch(URL_GITHUB);
        DADOS_ALUNOS = await response.json();
        console.log("Dados dos alunos carregados com sucesso!");
    } catch (error) {
        console.error("Erro ao carregar JSON do GitHub:", error);
        DADOS_ALUNOS = []; 
    }
}

// 3. Função para abrir o Calendário (Consolidada)
// --- FIX IS HERE: Updated Calendar Logic ---
function abrirCalendarioEscolar() {
    const dataAtual = new Date();
    const mesIdx = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();
    const nomeMes = dataAtual.toLocaleString('pt-br', { month: 'long' });

    let htmlCalendario = `
        <div style="text-align:center; margin-bottom:15px;">
            <h3 style="margin:0; text-transform: capitalize;">${nomeMes} ${ano}</h3>
        </div>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center;">
            <div style="font-weight:bold; color:#f44336;">D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
    `;

    const contagemDias = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
    const ultimoDia = new Date(ano, mesIdx + 1, 0).getDate();

    for (let i = 1; i <= ultimoDia; i++) {
        const d = new Date(ano, mesIdx, i);
        const diaSemana = d.getDay(); 
        contagemDias[diaSemana]++; 
        
        const n = contagemDias[diaSemana]; // Occurrence: 1st, 2nd, 3rd...

        htmlCalendario += `
            <div onclick="mostrarListaAlunos('${i}/${mesIdx+1}', ${n})" 
                 style="padding:8px; border:1px solid #eee; cursor:pointer; border-radius:4px; font-size:12px;">
                ${i}
            </div>`;
    }

    htmlCalendario += `</div><p style="font-size:11px; margin-top:10px; color:#666;">* Selecione uma data para ver a Turma ${1}, ${2} ou ${3}.</p>`;
    abrirPopup(htmlCalendario, "🗓️");
}

// --- FIX IS HERE: Updated Filtering Logic ---
function mostrarListaAlunos(dataStr, n) {
    // We map 1st occurrence to teoria1, 2nd to teoria2, etc. (Max 3)
   const sem = n > 3 ? 3 : n;

    // 1. Get students currently in the active theory group
    const alunosTeoria = DADOS_ALUNOS.filter(a => a.categoria === `teoria${sem}`);
    
    // 2. Automatically generate "Outros": Everyone NOT in the current theory group
    // This excludes those in current theory AND those in 'manha' (if you want manha in others)
    const alunosOutros = DADOS_ALUNOS.filter(a => a.categoria !== `teoria${sem}`);

    const htmlTabela = `
        <div style="font-family: Arial, sans-serif;">
            <h4 style="color:var(--primary); margin-bottom:5px;">📅 Lista: ${dataStr} (Grupo ${sem})</h4>
            <hr>
            <p style="margin-top:10px;"><b>📚 TURMA DE TEORIA - GRUPO ${sem}</b></p>
            <table style="width:100%; border-collapse: collapse; margin-bottom: 15px; font-size:13px;">
                ${alunosTeoria.length > 0 ? alunosTeoria.map(aluno => `
                    <tr>
                        <td style="border-bottom:1px solid #eee; padding:6px;">✅ ${aluno.nome}</td>
                        <td style="border-bottom:1px solid #eee; padding:6px; color:#666; text-align:right;"><i>${aluno.instrumento}</i></td>
                    </tr>
                `).join('') : '<tr><td colspan="2" style="color:#999; padding:10px;">Sem alunos de teoria hoje.</td></tr>'}
            </table>

            <p><b>🎻 OUTROS ALUNOS (Em Prática)</b></p>
            <table style="width:100%; border-collapse: collapse; color: #777; font-size:13px;">
                ${alunosOutros.length > 0 ? alunosOutros.map(aluno => `
                    <tr>
                        <td style="border-bottom:1px solid #eee; padding:6px;">⚪ ${aluno.nome}</td>
                        <td style="border-bottom:1px solid #eee; padding:6px; text-align:right;"><i>${aluno.instrumento}</i></td>
                    </tr>
                `).join('') : '<tr><td colspan="2" style="color:#999; padding:10px;">Nenhum outro aluno.</td></tr>'}
            </table>
            <button onclick="abrirCalendarioEscolar()" style="margin-top:15px; width:100%; background:#888; color:white; border:none; padding:10px; border-radius:4px; cursor:pointer;">⬅️ Voltar</button>
        </div>
    `;
    abrirPopup(htmlTabela, "👥");
}

// Inicializa a carga ao ler o arquivo
carregarDadosAlunos();

function renderizarAgenda() {
    const container = document.getElementById('agenda-render-area');
    if (!container) return;

    container.innerHTML = `
        <div style="text-align: center;">
            <h2 style="color: var(--primary); margin-bottom: 20px;">📅 Agenda de Aulas</h2>
            <p style="color: #666; font-size: 14px;">Consulte o calendário escolar e a lista de alunos para o dia selecionado.</p>
            <br>
            <button onclick="abrirCalendarioEscolar()" class="btn-calendar">
                📂 ABRIR CALENDÁRIO COMPLETO
            </button>
            <div id="quick-view" style="margin-top: 30px;">
                </div>
        </div>
    `;
}

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

function selectTab(tabId) {
    // 1. Fecha o menu
    toggleMenu();
    
    // 2. Atualiza nome na Nav (ADICIONADO 'plano')
    const labels = {
        'assistente': 'Assistente', 'alou': 'ALOU!', 'chamada': 'Chamada',
        'agenda': 'Agenda', 'cronograma': 'Cronograma', 'turmas': 'Turmas',
        'moo': 'MOO',  'instrumentos': 'Instrumentos', 'exercicios': 'Exercícios',
        'programa': 'Programa Mínimo', 'audios': 'Hinos', 'plano': 'Plano de Aula',
        'msa': 'MSA' , 'teoria': 'Teoria'
    };
    
    const activeLabel = labels[tabId] || 'GEM';
    const activeTabNameEl = document.getElementById('active-tab-name');
    if (activeTabNameEl) {
        activeTabNameEl.innerText = activeLabel;
    }

    // 3. Lógica de Injeção de Conteúdo
    const renderArea = document.getElementById('render-area');
    
  // --- NOVO BLOCO PARA MSA ---
    if (tabId === 'msa') {
        if (typeof switchTab === "function") switchTab('assistente');
        if (typeof mostrarConteudo === "function") {
            mostrarConteudo('indice'); 
        }
    }
    // ---------------------------
     else if (tabId === 'programa') {
        if (typeof switchTab === "function") switchTab('assistente');
        if (typeof mostrarConteudo === "function") {
            mostrarConteudo('programa_minimo');
        }
    }
      
      else if (tabId === 'audios' || tabId === 'biblioteca') {
        if (typeof switchTab === "function") switchTab('assistente');
        // Usamos a chave 'biblioteca_audios' que criamos no objeto BIBLIOTECA_LIVRO
        if (typeof mostrarConteudo === "function") {
            mostrarConteudo('biblioteca_audios');
        }
    }
      
  else if (tabId === 'instrumentos') {
        if (typeof switchTab === "function") switchTab('assistente');
        if (renderArea && typeof BIBLIOTECA_LIVRO !== 'undefined' && BIBLIOTECA_LIVRO["vamos_aprender"]) {
            renderArea.innerHTML = BIBLIOTECA_LIVRO["vamos_aprender"].html_content;
            renderArea.scrollTop = 0;
        }
    }

   else if (tabId === 'moo') {
    if (typeof switchTab === "function") switchTab('assistente');
    mostrarConteudo('moo_p1'); // Inicia na página 1
}
    
    // --- NOVO BLOCO PARA PLANO DE AULA ---
    else if (tabId === 'plano') {
        if (typeof switchTab === "function") switchTab('assistente');
        if (renderArea && typeof BIBLIOTECA_LIVRO !== 'undefined' && BIBLIOTECA_LIVRO["plano_aulas"]) {
            renderArea.innerHTML = BIBLIOTECA_LIVRO["plano_aulas"].html_content;
            renderArea.scrollTop = 0;
        }
    }
    // -------------------------------------
    else if (tabId === 'turmas') {
        if (typeof switchTab === "function") switchTab('assistente');
     mostrarConteudo('dia');
    } 

        else if (tabId === 'teoria') {
        // Para a aba 📅 Teoria (Logs do Grupo A)
        mostrarConteudo('historico_teoria');
    }
        
     else if (tabId === 'licoes') {
    if (typeof switchTab === "function") switchTab('assistente');
    mostrarConteudo('modulo_licoes');
}
         
    else {
        if (typeof switchTab === "function") {
            switchTab(tabId);
        }
    }

    // 5. Destaca item ativo no menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if(item.innerText.toLowerCase().includes(activeLabel.toLowerCase())) {
            item.classList.add('active');
        }
    });
}


function mostrarConteudo(chave) {
    const renderArea = document.getElementById('render-area');
    const activeTabNameEl = document.getElementById('active-tab-name');
    
    if (!renderArea || typeof BIBLIOTECA_LIVRO === 'undefined' || !BIBLIOTECA_LIVRO[chave]) {
        console.error("Render failed: Area or Data missing for", chave);
        return;
    }

    const dados = BIBLIOTECA_LIVRO[chave];
    
    // 1. Prepare UI State
    renderArea.style.display = 'block';
    renderArea.style.opacity = '0.5'; // Subtle transition feedback
    renderArea.scrollTop = 0;

    // 2. Build Header (Skip if it's the index)
    let cabecalhoFinal = "";
    if (chave !== 'indice') {
        cabecalhoFinal = `
            <div class="fase-header" style="background:#888; color:white; text-align:center; padding:8px; font-size:14px; border-radius:4px; margin-bottom:20px;">
                ${dados.fase}
            </div>
            <div class="section-title" style="background:#e3f2fd; border-bottom:3px solid #4a90e2; padding:10px; display:flex; align-items:center; margin:10px 0;">
                <div class="icon-box" style="background:#4a90e2; color:white; border-radius:4px; padding:4px 8px; margin-right:12px; font-weight:bold;">
                    ${dados.icone}
                </div>
                <h2 style="margin:0; font-size:16px; text-transform:uppercase;">${dados.titulo}</h2>
            </div>
        `;
    }

    // 3. Inject Full Template
    renderArea.innerHTML = `
        ${cabecalhoFinal}
        <div class="content-text">${dados.html_content}</div>
        <div class="footer" style="margin-top:20px; padding:10px; border-top:1px solid #eee; display:flex; justify-content:space-between; font-size:10px; color:#888;">
            <span>MÉTODO SIMPLIFICADO (MSAM)</span>
            <span>Pág. ${dados.pagina || '---'}</span>
            <span>CCB Guararema</span>
        </div>
    `;

    // 4. Update UI labels and Opacity
    if (activeTabNameEl) activeTabNameEl.innerText = dados.titulo;
    renderArea.style.opacity = '1';

    // 5. Execute internal scripts (Critical for interactive scores/grids)
    const scripts = renderArea.querySelectorAll("script");
    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.text = oldScript.text;
        document.body.appendChild(newScript).parentNode.removeChild(newScript);
    });

    // 6. Trigger Firebase listeners for specific groups
    if (chave.startsWith('grupo_') && typeof ativarEscutaEspecifica === 'function') {
        ativarEscutaEspecifica(chave);
    }
}
function renderTurmas() {
    // Redireciona para o motor principal usando a chave mestre
    mostrarConteudo('historico_teoria');
}



function voltarAoInicio() {
    // 1. Resetar visualmente os containers (Garante que nada fique display: none)
    const tabAssistente = document.getElementById('tab-assistente');
    const renderArea = document.getElementById('render-area');
    
    if (tabAssistente) tabAssistente.style.display = 'flex';
    
    // 2. Chama selectTab. 
    // NOTA: selectTab já chama toggleMenu() internamente, então não chame toggleMenu aqui!
    if (typeof selectTab === "function") {
        selectTab('assistente');
    }

    // 3. Reconstruir o conteúdo do Painel
    if (renderArea) {
        renderArea.innerHTML = ""; // Limpa resultados de busca (Fase 1, etc)
        
        if (typeof exibirPainel === "function") {
            exibirPainel(); // Esta função DEVE estar dentro do seu data_painel.js
            console.log("Dashboard reconstruído.");
        } else {
            console.warn("Função exibirPainel não encontrada. Verifique o data_painel.js");
            // Se falhar, tentamos apenas limpar a área para o usuário ver o assistente vazio
            renderArea.innerHTML = "<h2>Início</h2><p>Clique no menu para navegar.</p>";
        }
    }
}

// Initialize from localStorage or default to 1 (100%)
let currentZoom = parseFloat(localStorage.getItem('preferredZoom')) || 1;

function changeZoom(delta, reset = false) {
    const displayArea = document.querySelector('.display-area'); 
    const zoomText = document.getElementById('zoom-level');
    
    if (reset) {
        currentZoom = 1;
    } else {
        // Se delta for 0, mantemos o currentZoom atual (vindo do localStorage)
        currentZoom += delta;
    }

    // Constraints: min 50%, max 200%
    if (currentZoom < 0.5) currentZoom = 0.5;
    if (currentZoom > 2) currentZoom = 2;

    // Apply the zoom
    if (displayArea) {
        displayArea.style.zoom = currentZoom;
    }

    // Update the UI text
    if (zoomText) {
        zoomText.innerText = Math.round(currentZoom * 100) + '%';
    }

    // Save to storage
    localStorage.setItem('preferredZoom', currentZoom);
    console.log("Zoom saved:", currentZoom); // Debug para confirmar no console
}

// Load the saved preference on startup
document.addEventListener('DOMContentLoaded', () => {
    // Pegamos o valor mais recente do storage logo no início
    const savedZoom = localStorage.getItem('preferredZoom');
    if (savedZoom !== null) {
        currentZoom = parseFloat(savedZoom);
    }
    
    // Chamamos com delta 0 e reset false para APENAS aplicar o que foi carregado
    changeZoom(0, false);
});

function filtrarListaRapida(filtro) {
    const container = document.getElementById('lista-dinamica-alunos');
    if (!container) return;

    let filtrados = DADOS_ALUNOS;

    // Filter Logic
    if (filtro === 'teoria1' || filtro === 'teoria2' || filtro === 'teoria3' || filtro === 'manha') {
        filtrados = DADOS_ALUNOS.filter(a => a.categoria === filtro);
    } else if (filtro === 'cordas') {
        const familia = ['Violino', 'Viola', 'Violoncelo', 'Contrabaixo'];
        filtrados = DADOS_ALUNOS.filter(a => familia.includes(a.instrumento));
    } else if (filtro === 'madeiras') {
        const familia = ['Flauta', 'Clarinete', 'Saxofone', 'Saxofone Alto', 'Saxofone Tenor', 'Oboé', 'Fagote'];
        filtrados = DADOS_ALUNOS.filter(a => familia.includes(a.instrumento));
    } else if (filtro === 'metais') {
        const familia = ['Trompa', 'Trompete', 'Trombone', 'Eufônio', 'Tuba'];
        filtrados = DADOS_ALUNOS.filter(a => familia.includes(a.instrumento));
    }

    // Sort Alphabetically
    filtrados.sort((a, b) => a.nome.localeCompare(b.nome));

    // Render Table
    container.innerHTML = `
        <table style="width:100%; font-size:12px; border-collapse: collapse;">
            ${filtrados.map(a => `
                <tr style="border-bottom:1px solid #f9f9f9;">
                    <td style="padding:5px;">${a.nome}</td>
                    <td style="padding:5px; text-align:right; color:#888;"><i>${a.instrumento}</i></td>
                </tr>
            `).join('')}
        </table>
    `;
}



window.toggleAccordion = function(btn) {
    btn.classList.toggle("active");
    var panel = btn.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        // Force scrollHeight calculation for smooth expansion
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};
