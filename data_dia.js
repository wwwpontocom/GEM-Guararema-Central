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
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; width: 100%; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer; margin-bottom: 10px; font-weight: bold;">
            📅 ABRIR CALENDÁRIO DE ALUNOS
        </button>
        
        <button id="btn-carregar-lista" onclick="document.getElementById('area-filtro-alunos').style.display='block'; this.style.display='none'; localFiltrar('todos');" style="padding: 10px; width: 100%; background: #2ecc71; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
            👥 VER LISTA E FILTROS DE ALUNOS
        </button>
    </div>

    <div id="area-filtro-alunos" style="display: none; margin-top: 20px; border-top: 2px dashed #ccc; padding-top: 20px;">
        <p style="margin-bottom: 10px; font-weight: bold;">🔍 Filtro Rápido de Turmas:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 15px;">
            <button onclick="localFiltrar('todos')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">Todos</button>
            <button onclick="localFiltrar('teoria1')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T1</button>
            <button onclick="localFiltrar('teoria2')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T2</button>
            <button onclick="localFiltrar('teoria3')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T3</button>
            <button onclick="localFiltrar('manha')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🌅 Manhã</button>
            <button onclick="localFiltrar('cordas')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎻 Cordas</button>
            <button onclick="localFiltrar('madeiras')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎷 Madeiras</button>
            <button onclick="localFiltrar('metais')" style="padding: 6px 12px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">🎺 Metais</button>
        </div>

        <div id="lista-dinamica-alunos" style="background: white; border: 1px solid #eee; padding: 10px; border-radius: 5px; min-height: 100px; max-height: 350px; overflow-y: auto;">
            <p style="color: #999; font-size: 12px; text-align: center;">Selecione um filtro...</p>
        </div>
    </div>

    <script>
        function localFiltrar(filtro) {
            const container = document.getElementById('lista-dinamica-alunos');
            if (!container) return;
            
            // Check for DADOS_ALUNOS in the global scope
            const baseDados = window.DADOS_ALUNOS || [];
            
            if (baseDados.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:#999; padding: 20px;">Carregando dados dos alunos...</p>';
                return;
            }

            let filtrados = [];

            if (filtro === 'todos') {
                filtrados = [...baseDados];
            } else if (filtro === 'cordas') {
                const fam = ['Violino', 'Viola', 'Violoncelo', 'Contrabaixo'];
                filtrados = baseDados.filter(a => fam.includes(a.instrumento));
            } else if (filtro === 'madeiras') {
                const fam = ['Flauta', 'Clarinete', 'Saxofone', 'Saxofone Alto', 'Saxofone Tenor', 'Oboé'];
                filtrados = baseDados.filter(a => fam.includes(a.instrumento));
            } else if (filtro === 'metais') {
                const fam = ['Trompa', 'Trompete', 'Trombone', 'Eufônio', 'Tuba'];
                filtrados = baseDados.filter(a => fam.includes(a.instrumento));
            } else {
                // Filters by categoria (teoria1, teoria2, teoria3, manha)
                filtrados = baseDados.filter(a => a.categoria === filtro);
            }

            filtrados.sort((a, b) => a.nome.localeCompare(b.nome));

            if (filtrados.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:#999; padding: 20px;">Nenhum aluno encontrado neste grupo.</p>';
            } else {
                container.innerHTML = \`
                    <table style="width:100%; font-size:13px; border-collapse: collapse;">
                        \${filtrados.map(a => \`
                            <tr style="border-bottom:1px solid #eee;">
                                <td style="padding:8px;">\${a.nome}</td>
                                <td style="padding:8px; text-align:right; color:#666;"><i>\${a.instrumento}</i></td>
                            </tr>
                        \`).join('')}
                    </table>\`;
            }
        }
    </script>
`,
        pagina: "Agenda"
    }
});
