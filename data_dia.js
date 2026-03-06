Object.assign(BIBLIOTECA_LIVRO, {
    "dia": {
        keywords: ["dia", "agenda", "calendario", "turma", "horario"],
        fase: "Cronograma", 
        titulo: "AGENDA E TURMAS", 
        icone: "📅",
        resumo: "Cronograma mensal das turmas e acesso ao calendário de alunos.",
     html_content: `
    <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; background: #fff;">
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
            <button onclick="localFiltrar('todos')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">Todos</button>
            <button onclick="localFiltrar('teoria1')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T1</button>
            <button onclick="localFiltrar('teoria2')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T2</button>
            <button onclick="localFiltrar('teoria3')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">T3</button>
            <button onclick="localFiltrar('manha')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🌅 Manhã</button>
            <button onclick="localFiltrar('cordas')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎻 Cordas</button>
            <button onclick="localFiltrar('madeiras')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎷 Madeiras</button>
            <button onclick="localFiltrar('metais')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 12px; cursor: pointer;">🎺 Metais</button>
        </div>
    </div>

    <div id="lista-dinamica-alunos" style="background: white; border: 1px solid #eee; padding: 10px; border-radius: 5px; min-height: 100px; max-height: 300px; overflow-y: auto;">
        <p style="color: #999; font-size: 12px; text-align: center;">Carregando lista...</p>
    </div>

    <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px; margin-top: 20px;">
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer;">
            📅 Abrir Calendário de Alunos
        </button>
    </div>

    <script>
        function localFiltrar(filtro) {
            const container = document.getElementById('lista-dinamica-alunos');
            if (!container || typeof DADOS_ALUNOS === 'undefined') return;

            let filtrados = [...DADOS_ALUNOS];

            if (filtro === 'cordas') {
                const f = ['Violino', 'Viola', 'Violoncelo', 'Contrabaixo'];
                filtrados = DADOS_ALUNOS.filter(a => f.includes(a.instrumento));
            } else if (filtro === 'madeiras') {
                const f = ['Flauta', 'Clarinete', 'Saxofone', 'Saxofone Alto', 'Saxofone Tenor', 'Oboé'];
                filtrados = DADOS_ALUNOS.filter(a => f.includes(a.instrumento));
            } else if (filtro === 'metais') {
                const f = ['Trompa', 'Trompete', 'Trombone', 'Eufônio', 'Tuba'];
                filtrados = DADOS_ALUNOS.filter(a => f.includes(a.instrumento));
            } else if (filtro !== 'todos') {
                filtrados = DADOS_ALUNOS.filter(a => a.categoria === filtro);
            }

            filtrados.sort((a, b) => a.nome.localeCompare(b.nome));

            container.innerHTML = '<table style="width:100%; font-size:13px; border-collapse: collapse;">' + 
                filtrados.map(a => \`
                    <tr style="border-bottom:1px solid #eee;">
                        <td style="padding:6px;">\${a.nome}</td>
                        <td style="padding:6px; text-align:right; color:#888;"><i>\${a.instrumento}</i></td>
                    </tr>
                \`).join('') + '</table>';
        }

        // Initialize display
        setTimeout(() => localFiltrar('todos'), 200);
    </script>
`,
        pagina: "Agenda"
    }
});
