Object.assign(BIBLIOTECA_LIVRO, {
    "manual_uso": {
        keywords: ["manual", "instruções", "ajuda", "como usar", "instrutor"],
        fase: "Extras",
        titulo: "MANUAL DO INSTRUTOR",
        icone: "📖",
        resumo: "Guia prático para navegação e ativação das ferramentas da plataforma.",
        html_content: `
    <style>
        .manual-section { padding: 15px; font-family: sans-serif; color: #333; line-height: 1.6; }
        .step-card { 
            background: #fff; border-left: 4px solid #4a90e2; padding: 15px; 
            margin-bottom: 15px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .alert-blue { 
            background: #eef4fb; border: 1px solid #4a90e2; color: #2c3e50; 
            padding: 10px; border-radius: 5px; font-weight: bold; text-align: center;
            animation: pulse-blue 2s infinite;
        }
        @keyframes pulse-blue {
            0% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(74, 144, 226, 0); }
            100% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
        }
        .step-number { 
            background: #4a90e2; color: white; width: 24px; height: 24px; 
            display: inline-block; text-align: center; border-radius: 50%; 
            margin-right: 10px; font-size: 14px;
        }
    </style>

    <div class="manual-section">
        <h3 style="color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            Ativação do Assistente GEM (IA)
        </h3>
        
        <p>Para garantir a melhor experiência pedagógica, siga as instruções abaixo para interagir com a nossa Inteligência Artificial:</p>

        <div class="step-card">
            <span class="step-number">1</span> 
            <strong>Localize a Faixa de Ativação:</strong> Na parte inferior da tela do Portal, você verá uma faixa horizontal azul destacada.
        </div>

        <div class="step-card">
            <span class="step-number">2</span> 
            <strong>Ação de Toque/Clique:</strong> 
            <div class="alert-blue" style="margin-top: 10px;">
                🔹 CLIQUE OU TOQUE NA FAIXA AZUL INFERIOR
            </div>
            <p style="font-size: 12px; margin-top: 10px; color: #666;">
                Isso expandirá a interface de chat e permitirá o envio de comandos texto.
            </p>
        </div>

        <div class="step-card">
            <span class="step-number">3</span> 
            <strong>Interação por Item:</strong> O assistente responderá item por item. Certifique-se de aguardar o processamento da dúvida atual antes de enviar a próxima para evitar conflitos de resposta.
        </div>

        <div class="step-card">
            <span class="step-number">4</span> 
            <strong>Navegação Lateral:</strong> Use o menu (☰) para alternar entre as lições enquanto mantém o assistente aberto para consultas rápidas em tempo real.
        </div>

        <div style="text-align: center; color: #888; font-size: 11px; margin-top: 30px;">
            Manual GEM GM Central - Versão Instrutor 2026
        </div>
    </div>
`,
        pagina: "Extras"
    }
});
