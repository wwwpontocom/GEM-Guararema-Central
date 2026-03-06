Object.assign(BIBLIOTECA_LIVRO, {
    "dia": {
        keywords: ["dia", "agenda", "calendario", "turma", "horario"],
        fase: "Cronograma", 
        titulo: "AGENDA E TURMAS", 
        icone: "📅",
        resumo: "Cronograma mensal das turmas e acesso ao calendário de alunos.",
      html_content: `
    <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Segunda-feira</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Atividade</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">1ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 1 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">2ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 2 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">3ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 3 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">4ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Ensaio Geral</td></tr>
        </tbody>
    </table>

    <div style="margin-bottom: 20px;">
        <p style="margin-bottom: 10px; font-weight: bold;">🔍 Filtro Rápido de Turmas:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 5px;">
            <button onclick="filtrarListaRapida('todos')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">Todos</button>
            <button onclick="filtrarListaRapida('teoria1')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T1</button>
            <button onclick="filtrarListaRapida('teoria2')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T2</button>
            <button onclick="filtrarListaRapida('teoria3')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T3</button>
            <button onclick="filtrarListaRapida('manha')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🌅 Manhã</button>
            <button onclick="filtrarListaRapida('cordas')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎻 Cordas</button>
            <button onclick="filtrarListaRapida('madeiras')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎷 Madeiras</button>
            <button onclick="filtrarListaRapida('metais')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎺 Metais</button>
        </div>
    </div>

    <div id="lista-dinamica-alunos" style="background: white; border: 1px solid #eee; padding: 10px; border-radius: 5px; min-height: 50px; max-height: 300px; overflow-y: auto;">
        <p style="color: #999; font-size: 12px; text-align: center;">Carregando lista...</p>
    </div>

    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="setTimeout(() => filtrarListaRapida('todos'), 100)" style="display:none;">

    <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px; margin-top: 20px;">
        <p><b>Controle de Frequência</b></p>
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer;">
            📅 Abrir Calendário de Alunos
        </button>
    </div>
`,
        pagina: "Agenda"
    }
});
