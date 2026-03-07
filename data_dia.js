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

    <div style="margin-top: 20px; border-top: 2px dashed #ccc; padding-top: 20px;">
        <p style="margin-bottom: 10px; font-weight: bold;">🔍 Selecionar Lista:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 15px;">
            <button onclick="window.trocarLista('todos')" style="padding: 8px 10px; background: #444; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">Todos</button>
            <button onclick="window.trocarLista('t1')" style="padding: 8px 10px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T1</button>
            <button onclick="window.trocarLista('t2')" style="padding: 8px 10px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T2</button>
            <button onclick="window.trocarLista('t3')" style="padding: 8px 10px; background: #eee; border: 1px solid #ccc; border-radius: 4px; font-size: 11px; cursor: pointer;">T3</button>
            <button onclick="window.trocarLista('cordas')" style="padding: 8px 10px; background: #fff; border: 1px solid #4a90e2; color: #4a90e2; border-radius: 4px; font-size: 11px; cursor: pointer;">🎻 Cordas</button>
            <button onclick="window.trocarLista('madeiras')" style="padding: 8px 10px; background: #fff; border: 1px solid #2ecc71; color: #2ecc71; border-radius: 4px; font-size: 11px; cursor: pointer;">🎷 Madeiras</button>
            <button onclick="window.trocarLista('metais')" style="padding: 8px 10px; background: #fff; border: 1px solid #e67e22; color: #e67e22; border-radius: 4px; font-size: 11px; cursor: pointer;">🎺 Metais</button>
        </div>

        <div style="background: white; border: 1px solid #eee; border-radius: 5px; max-height: 400px; overflow-y: auto;">
            <table style="width:100%; font-size:13px; border-collapse: collapse;">
                <tbody id="corpo-tabela-alunos">
                    </tbody>
            </table>
        </div>
    </div>

    <script>
        window.listas = {
            todos: \`
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Heitor (T1)</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">João Pedro Carreitas (T1)</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Arthur Guimeiro (T1)</td><td style="text-align:right; padding:10px; color:#888;">Viola</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Arthur Rasado (T1)</td><td style="text-align:right; padding:10px; color:#888;">Saxofone</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Breno Soutos (T1)</td><td style="text-align:right; padding:10px; color:#888;">Flauta</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Davi Rodralves (T1)</td><td style="text-align:right; padding:10px; color:#888;">Eufônio</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Evandro Bemoki (T2)</td><td style="text-align:right; padding:10px; color:#888;">Saxofone</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">João Vítor Dedeiros (T2)</td><td style="text-align:right; padding:10px; color:#888;">Clarinete</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Jefferson Diarreto (T3)</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
            \`,
            t1: \`
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Heitor</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">João Pedro Carreitas</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Arthur Guimeiro</td><td style="text-align:right; padding:10px; color:#888;">Viola</td></tr>
            \`,
            cordas: \`
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Heitor</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Arthur Guimeiro</td><td style="text-align:right; padding:10px; color:#888;">Viola</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Jefferson Diarreto</td><td style="text-align:right; padding:10px; color:#888;">Violino</td></tr>
            \`,
            madeiras: \`
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Arthur Rasado</td><td style="text-align:right; padding:10px; color:#888;">Saxofone</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Breno Soutos</td><td style="text-align:right; padding:10px; color:#888;">Flauta</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">João Vítor Dedeiros</td><td style="text-align:right; padding:10px; color:#888;">Clarinete</td></tr>
            \`,
            metais: \`
                <tr><td style="padding:10px; border-bottom:1px solid #eee;">Davi Rodralves</td><td style="text-align:right; padding:10px; color:#888;">Eufônio</td></tr>
            \`
        };

        window.trocarLista = function(id) {
            const container = document.getElementById('corpo-tabela-alunos');
            if (container && window.listas[id]) {
                container.innerHTML = window.listas[id];
            }
        };

        // Inicia com a lista completa
        setTimeout(() => window.trocarLista('todos'), 100);
    </script>
`,
        pagina: "Agenda"
    }
});
