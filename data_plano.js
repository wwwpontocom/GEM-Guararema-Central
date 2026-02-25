 Object.assign(BIBLIOTECA_LIVRO, {
        "plano_aulas": {
    keywords: ["plano", "aulas", "cronograma", "estudo", "progresso", "turma"],
    fase: "Extras", 
    titulo: "PLANO DE AULAS", 
    icone: "📅",
    resumo: "Organização e cronograma sugerido para as turmas do GEM.",
    html_content: `
        <p>Consulte aqui o seu roteiro de estudos e as metas para cada fase do aprendizado.</p>
        
        <div class="dashboard-grid" style="display: grid; gap: 15px; margin-top: 15px;">
            <div style="border: 1px solid #eee; padding: 10px; border-radius: 8px; background: #fdfdfd;">
                <h3 style="color: var(--primary); font-size: 14px; margin-top: 0;">👥 TURMA A</h3>
                <ul style="list-style: none; padding: 0; font-size: 13px; color: #555;">
                    <li style="margin-bottom: 5px;"><strong>Aula 1:</strong> Introdução e Teoria Inicial</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 2:</strong> Figuras e Valores</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 3:</strong> Prática de Leitura Rítmica</li>
                </ul>
            </div>

            <div style="border: 1px solid #eee; padding: 10px; border-radius: 8px; background: #fdfdfd;">
                <h3 style="color: var(--primary); font-size: 14px; margin-top: 0;">👥 TURMA B</h3>
                <ul style="list-style: none; padding: 0; font-size: 13px; color: #555;">
                    <li style="margin-bottom: 5px;"><strong>Aula 1:</strong> Revisão e Divisão Proporcional</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 2:</strong> Solfejo e Alturas</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 3:</strong> Exercícios de Fixação</li>
                </ul>
            </div>

            <div style="border: 1px solid #eee; padding: 10px; border-radius: 8px; background: #fdfdfd;">
                <h3 style="color: var(--primary); font-size: 14px; margin-top: 0;">👥 TURMA C</h3>
                <ul style="list-style: none; padding: 0; font-size: 13px; color: #555;">
                    <li style="margin-bottom: 5px;"><strong>Aula 1:</strong> Percepção Auditiva</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 2:</strong> Dinâmica e Expressão</li>
                    <li style="margin-bottom: 5px;"><strong>Aula 3:</strong> Avaliação de Progresso</li>
                </ul>
            </div>
        </div>
    `,
    pagina: "Extra"
 }
     });
