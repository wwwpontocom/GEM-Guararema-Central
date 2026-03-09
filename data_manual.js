/* --- FIX IS HERE: DETAILED MENU EXPLANATION ADDED --- */
Object.assign(BIBLIOTECA_LIVRO, {
    "manual_uso": {
        keywords: ["manual", "instruções", "ajuda", "como usar", "instrutor", "menu"],
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
        .menu-guide { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-top: 20px; }
        .menu-guide ul { list-style: none; padding: 0; }
        .menu-guide li { margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .menu-guide b { color: #2c3e50; }
    </style>

    <div class="manual-section">
        <h3 style="color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            Ativação do Assistente GEM (IA)
        </h3>
        
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
                Isso expandirá a interface de chat e permitirá o envio de comandos de texto.
            </p>
        </div>

        <div class="step-card">
            <span class="step-number">3</span> 
            <strong>Interação por Item:</strong> O assistente responderá item por item. Aguarde o processamento antes de enviar a próxima dúvida.
        </div>

        <h3 style="color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 30px;">
            Guia Detalhado do Menu Lateral (☰)
        </h3>
        <p>Abaixo, a explicação de cada funcionalidade disponível no Menu Principal:</p>

        <div class="menu-guide">
            <ul>
                <li><b>🏠 Início:</b> Retorna à tela principal do painel (Dashboard).</li>
                <li><b>🤖 Assistente:</b> Abre a interface de Inteligência Artificial para consultas teóricas.</li>
                <li><b>📖 Manual de Uso:</b> Este guia de instruções de uso.</li>
                <li><b>✏️ Lições:</b> Acesso ás Lições e Atividades práticas das Aulas Anteriores.</li>
                <li><b>👥 Turmas:</b> Visualização das Turmas do Dia, Calendário e controle de Turmas (quantidades).</li>
                <li><b>📅 Teoria:</b> Consulta ao Histórico de aulas teóricas ministradas.</li>
                <li><b>⏳ Plano de Aula:</b> Cronograma e planejamento das fases de ensino.</li>
                <li><b>🎼 MSA:</b> Conteúdo focado no Método Simplificado de Aprendizagem.</li>
                <li><b>🎼 MOO:</b> Acesso ao Manual de Orientação Orquestral.</li>
                <li><b>🎼 MOR:</b> Acesso ao Manual de Orgão.</li>
                <li><b>🎵 Hinos:</b> Àudios dos hinos com possibilidade de mudança de andamento, com Média, mínima e máxima, para estudos.</li>
                <li><b>🎷 Instrumentos:</b> Seção "Vamos Aprender" com foco em cada instrumento.</li>
                <li><b>✏️ Exercícios:</b> Repositório de exercícios gerais para os alunos.</li>
                <li><b>📋 Programa Mínimo:</b> Tabela de requisitos para ingressar nos Ensaios, RJM; Cultos Locais e Oficialização (testes).</li>
                <li><b>📢 ALÔ GEM:</b> Área de chat comunitário, logs.</li>
            </ul>
        </div>

        <div style="text-align: center; color: #888; font-size: 11px; margin-top: 30px;">
            Manual GEM GM Central - 2026
        </div>
    </div>
`,
        pagina: "Extras"
    }
});
