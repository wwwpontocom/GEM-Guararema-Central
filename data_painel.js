// --- FIX IS HERE: UNIFIED DASHBOARD FUNCTION ---

/**
 * Renderiza o Quadro de Avisos "Fique Inteirado"
 * Esta função é chamada tanto no carregamento inicial quanto pelo botão "Início"
 */
function exibirPainel() {
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
                        Se já fez deve ter percebido, ou se fizer provavelmente perceberá que isso causa uma sensação estranha.  <br>
                        Desenvolvida no início do século XX, a Música Atonal tem uma harmonia marcada por sons dissonantes, que causam essa sensação estranha que falamos.<br>
                        Apesar de Carl Maria Friedrich Ernest von Weber ser do período Romântico, ele utilizou cromatismo e dissonâncias para criar tensão dramática.
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

// Inicializa o painel no carregamento da página
window.addEventListener('load', exibirPainel);

// --- END OF FIX ---
