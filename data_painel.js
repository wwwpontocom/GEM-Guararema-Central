// --- FIX IS HERE: INICIALIZAÇÃO DA BIBLIOTECA "FIQUE INTEIRADO" ---

function salvarLog(categoria) {
    const sufixo = categoria.split('_')[1]; 
    const inputElement = document.getElementById(`input-log-${sufixo}`);
    const logDisplay = document.getElementById(`log-grupo-${sufixo}`);

    if (inputElement && inputElement.value.trim() !== "") {
        const novoLog = inputElement.value.trim();
        const data = new Date().toLocaleDateString('pt-BR');
        const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        
        const entradaCompleta = `<div style="margin-bottom: 8px; border-bottom: 1px dotted #eee; padding-bottom: 5px;">
                                    <strong style="color: var(--primary); font-size: 10px;">[${data} ${hora}]</strong><br>${novoLog}
                                 </div>`;
        
        const historicoAtual = localStorage.getItem(`log_${categoria}`) || "";
        const historicoAtualizado = entradaCompleta + historicoAtual;
        
        localStorage.setItem(`log_${categoria}`, historicoAtualizado);
        logDisplay.innerHTML = historicoAtualizado;
        inputElement.value = ""; 
    }
}

function carregarHistoricos() {
    ["grupo_a", "grupo_b", "grupo_c"].forEach(id => {
        const sufixo = id.split('_')[1];
        const logDisplay = document.getElementById(`log-grupo-${sufixo}`);
        if (logDisplay) {
            const salvo = localStorage.getItem(`log_${id}`);
            logDisplay.innerHTML = salvo || "<span style='color:#999; font-style:italic;'>Sem avisos recentes.</span>";
        }
    });
}

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
                <div id="log-grupo-a" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">Carregando...</div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-a" placeholder="Novo lembrete..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                    <button onclick="salvarLog('grupo_a')" style="padding: 5px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Postar</button>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">📝 NOTAS DE AULA</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Estudo</span>
                </div>
                <div id="log-grupo-b" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">Carregando...</div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-b" placeholder="Anotar progresso..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                    <button onclick="salvarLog('grupo_b')" style="padding: 5px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Anotar</button>
                </div>
            </div>

            <div class="notice-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); margin-bottom: 10px;">
                    <h3 style="margin: 0; font-size: 14px; color: var(--primary);">💡 IDEIAS E INSIGHTS</h3>
                    <span style="font-size: 10px; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">Criativo</span>
                </div>
                <div id="log-grupo-c" style="max-height: 120px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 10px; line-height: 1.4;">Carregando...</div>
                <div style="display: flex; gap: 5px;">
                    <input type="text" id="input-log-c" placeholder="Registrar ideia..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
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
    carregarHistoricos();
}

window.addEventListener('load', inicializarPainelInterativo);

// --- END OF FIX ---
