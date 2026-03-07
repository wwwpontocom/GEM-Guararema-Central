Object.assign(BIBLIOTECA_LIVRO, {
    "dia": {
        keywords: ["dia", "agenda", "calendario", "turma", "horario"],
        fase: "Cronograma", 
        titulo: "AGENDA E TURMAS", 
        icone: "📅",
        resumo: "Cronograma mensal das turmas e acesso ao calendário de alunos.",
html_content: `
    <style>
        .acc-btn {
            background-color: #eee; color: #444; cursor: pointer; padding: 12px; width: 100%;
            border: none; text-align: left; outline: none; font-size: 14px; transition: 0.4s;
            border-bottom: 1px solid #ddd; font-weight: bold; display: flex; justify-content: space-between;
            align-items: center;
        }
        .acc-btn.active, .acc-btn:hover { background-color: #ccc; }
        .acc-btn:after { content: '\\002B'; color: #777; font-weight: bold; }
        .acc-btn.active:after { content: "\\2212"; }
        .panel {
            padding: 0 10px; background-color: white; max-height: 0; overflow: hidden;
            transition: max-height 0.2s ease-out; border-bottom: 1px solid #eee;
        }
        .panel table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0; }
        .panel td { padding: 10px; border-bottom: 1px solid #f9f9f9; }
    </style>

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

    <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px; margin-top: 10px; margin-bottom: 20px;">
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; width: 100%; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
            📅 ABRIR CALENDÁRIO DE ALUNOS
        </button>
    </div>

    <div style="border: 1px solid #ddd; border-radius: 5px; overflow: hidden;">
        <button class="acc-btn" onclick="toggleAccordion(this)">👥 Todos os Alunos</button>
        <div class="panel">
            <table>
              <tr><td>Arthur Guimeiro (T1)</td><td style="text-align:right; color:#888;">Viola</td></tr>
            <tr><td>Arthur Rasado (T1)</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
            <tr><td>Breno Soutos (T1)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Caíque (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Davi Rodralves (T1)</td><td style="text-align:right; color:#888;">Eufônio</td></tr>
            <tr><td>Elton (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Evandro Bemoki (T2)</td><td style="text-align:right; color:#888;">Saxofone Alto</td></tr>
            <tr><td>Guilherme Sancelo (T2)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Heitor (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Hendril Wallodoro (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Jefferson Diarreto (T3)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>João Pedro Carreitas (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>João Vítor Dedeiros (T2)</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
            <tr><td>Lorenzo Melo Beoki (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Lucas Gabriel dos Aatos (T1)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Luiz Antônio Ináilva (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Luiz Gustavo de Olievedo (T2)</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
            <tr><td>Maurício Eira (T1)</td><td style="text-align:right; color:#888;">TBD</td></tr>
            <tr><td>Pedro (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Rafael Josantos (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Robson Des (T3)</td><td style="text-align:right; color:#888;">Viola</td></tr>
            <tr><td>Samuel Carlos de Eira (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Thiago Alves Vieiilva (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Vanderlei (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
        </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">📘 Turma T1</button>
        <div class="panel">
            <table>
                <tr><td>Heitor</td><td style="text-align:right; color:#888;">Violino</td></tr>
                <tr><td>João Pedro Carreitas</td><td style="text-align:right; color:#888;">Violino</td></tr>
                <tr><td>Arthur Guimeiro</td><td style="text-align:right; color:#888;">Viola</td></tr>
            </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">📗 Turma T2</button>
        <div class="panel">
            <table>
                <tr><td>Evandro Bemoki</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
                <tr><td>Guilherme Sancelo</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">🎻 Cordas</button>
        <div class="panel">
            <table>
                <tr><td>Heitor</td><td style="text-align:right; color:#888;">Violino</td></tr>
                <tr><td>Arthur Guimeiro</td><td style="text-align:right; color:#888;">Viola</td></tr>
                <tr><td>Jefferson Diarreto</td><td style="text-align:right; color:#888;">Violino</td></tr>
            </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">🎷 Madeiras</button>
        <div class="panel">
            <table>
                <tr><td>Arthur Rasado</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
                <tr><td>Breno Soutos</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            </table>
        </div>
    </div>
`,
        pagina: "Agenda"
    }
});
