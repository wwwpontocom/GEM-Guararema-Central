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
    const agenda = document.getElementById('tab-agenda');
    
    const navAssistente = document.getElementById('nav-assistente');
    const navAlou = document.getElementById('nav-alou');
    const navAgenda = document.getElementById('nav-agenda');

    // Reset geral de Estilos Nav
    [navAssistente, navAlou, navAgenda].forEach(nav => {
        if (nav) {
            nav.style.opacity = '0.7';
            nav.style.borderBottom = 'none';
        }
    });

    // Esconde todos os conteúdos
    assistente.style.display = 'none';
    alou.style.display = 'none';
    agenda.style.display = 'none';

    // Ativa a aba selecionada
    if (tab === 'assistente') {
        assistente.style.display = 'flex';
        navAssistente.style.opacity = '1';
        navAssistente.style.borderBottom = '2px solid #4a90e2';
    } else if (tab === 'alou') {
        alou.style.display = 'flex';
        navAlou.style.opacity = '1';
        navAlou.style.borderBottom = '2px solid #4a90e2';
    } else if (tab === 'agenda') {
        agenda.style.display = 'flex';
        if (navAgenda) {
            navAgenda.style.opacity = '1';
            navAgenda.style.borderBottom = '2px solid #4a90e2';
        }
        // Renderiza o conteúdo da biblioteca para a agenda
        renderizarAgenda();
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

function toggleChat(forceOpen = false) {
    const sidebar = document.querySelector('.chat-sidebar');
    const btn = document.querySelector('.toggle-chat-btn');
    if (!sidebar) return;

    if (forceOpen) {
        sidebar.classList.remove('minimized');
    } else {
        sidebar.classList.toggle('minimized');
    }

    const isMinimized = sidebar.classList.contains('minimized');
    
    // Update Icon based on platform and state
    if (btn) {
        if (window.innerWidth <= 768) {
            btn.innerText = isMinimized ? '▲' : '▼';
        } else {
            btn.innerText = isMinimized ? '▶' : '◀';
        }
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
            toggleChat(true); // Open immediately when clicked
        });
    }

    // 3. Initial Library Update
    atualizarBibliotecaComMensagens();
    
    // 4. Start listening to logs
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
function abrirCalendarioEscolar() {
    const dataAtual = new Date();
    const mes = dataAtual.toLocaleString('pt-br', { month: 'long' });
    const ano = dataAtual.getFullYear();

    let htmlCalendario = `
        <div style="text-align:center; margin-bottom:15px;">
            <h3 style="margin:0; text-transform: capitalize;">${mes} ${ano}</h3>
        </div>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center;">
            <div style="font-weight:bold; color:#888;">D</div><div style="font-weight:bold;">S</div>
            <div style="font-weight:bold;">T</div><div style="font-weight:bold;">Q</div>
            <div style="font-weight:bold;">Q</div><div style="font-weight:bold;">S</div><div style="font-weight:bold;">S</div>
    `;

    // Gerador de dias (Ajustado para 31 dias para cobrir todos os meses)
    for (let i = 1; i <= 31; i++) {
        htmlCalendario += `
            <div onclick="mostrarListaAlunos('${i}/${dataAtual.getMonth()+1}')" 
                 style="padding:8px; border:1px solid #eee; cursor:pointer; border-radius:4px; font-size:12px;">
                ${i}
            </div>`;
    }

    htmlCalendario += `</div><p style="font-size:11px; margin-top:10px; color:#666;">* Toque em uma data para ver os alunos.</p>`;
    abrirPopup(htmlCalendario, "🗓️");
}

// 4. Função para mostrar a tabela (Versão Profissional com Filtragem)
function mostrarListaAlunos(data) {
    // Filtragem dinâmica baseada no novo JSON de objetos
    const alunosTeoria = DADOS_ALUNOS.filter(a => a.categoria === 'teoria');
    const alunosOutros = DADOS_ALUNOS.filter(a => a.categoria === 'outros');

    const htmlTabela = `
        <div style="font-family: Arial, sans-serif;">
            <h4 style="color:var(--primary); margin-bottom:5px;">📅 Lista: ${data}</h4>
            <hr>
            
            <p style="margin-top:10px;"><b>📚 TURMA DE TEORIA</b></p>
            <table style="width:100%; border-collapse: collapse; margin-bottom: 15px; font-size:13px;">
                ${alunosTeoria.length > 0 ? alunosTeoria.map(aluno => `
                    <tr>
                        <td style="border-bottom:1px solid #eee; padding:6px;">✅ ${aluno.nome}</td>
                        <td style="border-bottom:1px solid #eee; padding:6px; color:#666; text-align:right;"><i>${aluno.instrumento}</i></td>
                    </tr>
                `).join('') : '<tr><td colspan="2" style="color:#999; padding:10px;">Nenhum aluno de teoria.</td></tr>'}
            </table>

            <p><b>🎻 OUTROS ALUNOS</b></p>
            <table style="width:100%; border-collapse: collapse; color: #777; font-size:13px;">
                ${alunosOutros.length > 0 ? alunosOutros.map(aluno => `
                    <tr>
                        <td style="border-bottom:1px solid #eee; padding:6px;">⚪ ${aluno.nome}</td>
                        <td style="border-bottom:1px solid #eee; padding:6px; text-align:right;"><i>${aluno.instrumento}</i></td>
                    </tr>
                `).join('') : '<tr><td colspan="2" style="color:#999; padding:10px;">Nenhum outro aluno.</td></tr>'}
            </table>
            
            <button onclick="abrirCalendarioEscolar()" style="margin-top:15px; width:100%; background:#888; color:white; border:none; padding:10px; border-radius:4px; cursor:pointer; font-weight:bold;">
                ⬅️ Voltar ao Calendário
            </button>
        </div>
    `;

    abrirPopup(htmlTabela, "👥");
}

// Inicializa a carga ao ler o arquivo
carregarDadosAlunos();

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

function selectTab(tabId) {
    // 1. Fecha o menu
    toggleMenu();
    
    // 2. Atualiza nome na Nav
    const labels = {
        'assistente': 'Assistente', 'alou': 'ALOU!', 'chamada': 'Chamada',
        'agenda': 'Agenda', 'cronograma': 'Cronograma', 'turmas': 'Turmas',
        'moo': 'MOO', 'instrumentos': 'Instrumentos', 'exercicios': 'Exercícios',
        'programa': 'Programa Mínimo'
    };
    document.getElementById('active-tab-name').innerText = labels[tabId];

    // 3. Destaca item ativo no menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if(item.innerText.toLowerCase().includes(labels[tabId].toLowerCase())) {
            item.classList.add('active');
        }
    });

    // 4. Chama sua função de troca de aba existente
    if (typeof switchTab === "function") {
        switchTab(tabId);
    }
}
