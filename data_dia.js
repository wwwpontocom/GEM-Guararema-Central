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

    <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px; margin-top: 10px;">
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; width: 100%; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
            📅 ABRIR CALENDÁRIO DE ALUNOS
        </button>
    </div>

    <div id="area-filtro-alunos" style="display: block; margin-top: 20px; border-top: 2px dashed #ccc; padding-top: 20px;">
        <p style="margin-bottom: 10px; font-weight: bold;">🔍 Filtro Rápido de Turmas:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 15px;">
            <button onclick="localFiltrar('todos')" style="padding: 8px 12px; background: #fff; border: 1px solid var(--primary); color: var(--primary); border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">Todos</button>
            <button onclick="localFiltrar('teoria1')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T1</button>
            <button onclick="localFiltrar('teoria2')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T2</button>
            <button onclick="localFiltrar('teoria3')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T3</button>
            <button onclick="localFiltrar('manha')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🌅 Manhã</button>
            <button onclick="localFiltrar('cordas')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎻 Cordas</button>
            <button onclick="localFiltrar('madeiras')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎷 Madeiras</button>
            <button onclick="localFiltrar('metais')" style="padding: 8px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎺 Metais</button>
        </div>

        <div id="lista-dinamica-alunos" style="background: white; border: 1px solid #eee; padding: 10px; border-radius: 5px; min-height: 150px; max-height: 400px; overflow-y: auto; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
            <p style="color: #999; font-size: 12px; text-align: center;">Carregando lista...</p>
        </div>
    </div>

    <script>
        function localFiltrar(filtro) {
            const container = document.getElementById('lista-dinamica-alunos');
            if (!container) return;

            // Embedded data to ensure it works instantly
            const LISTA_INTERNA = [
                { "nome": "Arthur Guimeiro", "instrumento": "Viola", "categoria": "teoria1" },
                { "nome": "Arthur Rasado", "instrumento": "Saxofone", "categoria": "teoria1" },
                { "nome": "Breno Soutos", "instrumento": "Flauta", "categoria": "teoria1" },
                { "nome": "Davi Rodralves", "instrumento": "Eufônio", "categoria": "teoria1" },
                { "nome": "Heitor", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "João Pedro Carreitas", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "Lucas Gabriel dos Aatos", "instrumento": "Flauta", "categoria": "teoria1" },
                { "nome": "Luiz Antônio Ináilva", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "Maurício Eira", "instrumento": "TBD", "categoria": "teoria1" },
                { "nome": "Pedro", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "Rafael Josantos", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "Samuel Carlos de Eira", "instrumento": "Violino", "categoria": "teoria1" },
                { "nome": "Evandro Bemoki", "instrumento": "Saxofone Alto", "categoria": "teoria2" },
                { "nome": "Guilherme Sancelo", "instrumento": "Flauta", "categoria": "teoria2" },
                { "nome": "Andrew Wallodoro", "instrumento": "Violino", "categoria": "teoria2" },
                { "nome": "João Vítor Dedeiros", "instrumento": "Clarinete", "categoria": "teoria2" },
                { "nome": "Lorenzo Melo Beoki", "instrumento": "Violino", "categoria": "teoria2" },
                { "nome": "Luiz Gustavo de Olievedo", "instrumento": "Clarinete", "categoria": "teoria2" },
                { "nome": "Thiago Alves Vieiilva", "instrumento": "Violino", "categoria": "teoria2" },
                { "nome": "Jefferson Diarreto", "instrumento": "Violino", "categoria": "teoria3" },
                { "nome": "Robson Des", "instrumento": "Viola", "categoria": "teoria3" },
                { "nome": "Caíque", "instrumento": "Violino", "categoria": "manha" },
                { "nome": "Elton", "instrumento": "Violino", "categoria": "manha" },
                { "nome": "Vanderlei", "instrumento": "Violino", "categoria": "manha" }
            ];

            let filtrados = [];
            if (filtro === 'todos') {
                filtrados = [...LISTA_INTERNA];
            } else if (filtro === 'cordas') {
                const f = ['Violino', 'Viola', 'Violoncelo', 'Contrabaixo'];
                filtrados = LISTA_INTERNA.filter(a => f.includes(a.instrumento));
            } else if (filtro === 'madeiras') {
                const f = ['Flauta', 'Clarinete', 'Saxofone', 'Saxofone Alto', 'Saxofone Tenor', 'Oboé'];
                filtrados = LISTA_INTERNA.filter(a => f.includes(a.instrumento));
            } else if (filtro === 'metais') {
                const f = ['Trompa', 'Trompete', 'Trombone', 'Eufônio', 'Tuba'];
                filtrados = LISTA_INTERNA.filter(a => f.includes(a.instrumento));
            } else {
                filtrados = LISTA_INTERNA.filter(a => a.categoria === filtro);
            }

            filtrados.sort((a, b) => a.nome.localeCompare(b.nome));

            container.innerHTML = '<table style="width:100%; font-size:13px; border-collapse: collapse;">' + 
                filtrados.map(a => \`
                    <tr style="border-bottom:1px solid #eee;">
                        <td style="padding:10px 6px;">\${a.nome}</td>
                        <td style="padding:10px 6px; text-align:right; color:#888;"><i>\${a.instrumento}</i></td>
                    </tr>
                \`).join('') + '</table>';
        }

        // Initialize display automatically
        setTimeout(() => localFiltrar('todos'), 150);
    </script>
`,
        pagina: "Agenda"
    }
});
