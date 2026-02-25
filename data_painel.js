// --- FIX IS HERE: INICIALIZAÇÃO DA BIBLIOTECA "FIQUE INTEIRADO" ---

/**
 * Inicializa o Quadro de Avisos Interativo como uma interface puramente informativa.
 * IDs de grupos e funções de salvamento foram totalmente removidos.
 */
function inicializarPainelInterativo() {
    const renderArea = document.getElementById('render-area');
    if (!renderArea) return;

    const dashboardHTML = `
        <div class="fase-header">FIQUE INTEIRADO: QUADRO DE INFORMAÇÕES</div>
        
        <div class="section-title">
            <div class="icon-box">📌</div>
            <h2>Lembretes e Avisos</h2>
        </div>

        <div class="dashboard-grid" style="display: grid; gap: 20px; margin-top: 15px;">
            
            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📢 AVISOS GERAIS</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Info</span>
                </div>
                <div style="max-height: 150px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; line-height: 1.4;">
                    <div style="margin-bottom: 8px; border-bottom: 1px dotted #eee; padding-bottom: 5px;">
                        • Bem-vindo à nova Biblioteca Interativa.<br>
                        • Utilize o chat ao lado para consultar tópicos musicais.
                    </div>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📝 NOTAS DE AULA</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Estudo</span>
                </div>
                <div style="max-height: 150px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; line-height: 1.4;">
                    <div style="margin-bottom: 8px; border-bottom: 1px dotted #eee; padding-bottom: 5px;">
                        •Assunto do Ensaio do GEM- 20/02/2026  <br>
Atonalismo (Hino 210)  <br>
Você já tentou cantar ou tocar a Escala de Dó Maior e parar, encerrar a escala na nota Si (sétima nota, sensível)?  <br>
Se já fez deve ter percebido, ou se fizer provávelmente perceberá que isso causa uma sensação estranha.  <br>
Desenvolvida no início do século XX, a Música Atonal tem uma harmonia marcada por sons dissonantes, que causan essa sensação estranha que falamos.
Apesar de Carl Maria Friedrich Ernest von Weber, o compositor da partitura do Hino 210, ser de um período chamado de Romantismo que é anterior à Música Atonal, séc XX, ele utilizou do cromatismo e dissonâncias para criar tensão dramática

                    </div>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">💡 DICAS RÁPIDAS</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Dica</span>
                </div>
                <div style="max-height: 150px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; line-height: 1.4;">
                    <div style="margin-bottom: 8px; border-bottom: 1px dotted #eee; padding-bottom: 5px;">
                        • A altura define se o som é grave ou agudo.<br>
                        • A intensidade define o volume (forte ou fraco).
                    </div>
                </div>
            </div>

        </div>

        <div class="footer" style="margin-top: 20px;">
            <span>Biblioteca Interativa - Fique Inteirado</span>
            <span>2026</span>
        </div>
    `;

    renderArea.innerHTML = dashboardHTML;
}

// Inicia o painel assim que o script for carregado ou a janela estiver pronta
window.addEventListener('load', inicializarPainelInterativo);

function exibirPainel() {
    const renderArea = document.getElementById('render-area');
    renderArea.innerHTML = `
        <h2>Bem-vindo ao Painel Central</h2>
        <div class="grid-botoes">...</div>
    `;
}

// Chame uma vez ao carregar o script pela primeira vez
exibirPainel();

// --- END OF FIX ---
