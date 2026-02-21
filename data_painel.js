// --- FIX IS HERE: INICIALIZAÇÃO DA BIBLIOTECA "FIQUE INTEIRADO" ---

/**
 * Inicializa o Quadro de Avisos Interativo na área de renderização principal.
 * Substitui o conteúdo inicial "Aguardando consulta...".
 */
function inicializarPainelInterativo() {
    const renderArea = document.getElementById('render-area');
    
    if (!renderArea) return;

    // Conteúdo HTML seguindo o estilo das "Fases"
    const dashboardHTML = `
        <div class="fase-header">FIQUE INTEIRADO: QUADRO DE AVISOS</div>
        
        <div class="section-title">
            <div class="icon-box">📢</div>
            <h2>Status dos Grupos</h2>
        </div>

        <div class="dashboard-grid" style="display: grid; gap: 20px; margin-top: 15px;">
            
            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📍 HISTÓRICO GRUPO A</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Ativo</span>
                </div>
                <div id="log-grupo-a" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">
                    Carregando histórico...
                </div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-a" placeholder="Onde pararam?" style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                    <button onclick="salvarLog('grupo_a')" style="padding: 5px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Salvar</button>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📍 HISTÓRICO GRUPO B</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Ativo</span>
                </div>
                <div id="log-grupo-b" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">
                    Carregando histórico...
                </div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-b" placeholder="Onde pararam?" style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                    <button onclick="salvarLog('grupo_b')" style="padding: 5px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Salvar</button>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📍 HISTÓRICO GRUPO C</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Ativo</span>
                </div>
                <div id="log-grupo-c" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">
                    Carregando histórico...
                </div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-c" placeholder="Onde pararam?" style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                    <button onclick="salvarLog('grupo_c')" style="padding: 5px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Salvar</button>
                </div>
            </div>

        </div>

        <div class="footer" style="margin-top: 20px;">
            <span>Biblioteca Interativa - Fique Inteirado</span>
            <span>2026</span>
        </div>
    `;

    renderArea.innerHTML = dashboardHTML;
    
    // Tenta carregar os históricos caso a função carregarHistoricos já esteja definida
    if (typeof carregarHistoricos === "function") {
        carregarHistoricos();
    }
}

// Executa a inicialização ao carregar a janela
window.addEventListener('load', inicializarPainelInterativo);

// --- END OF FIX ---
