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

 /* New Statistics Styles */
       .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px; }
        .stat-card { background: #fff; border: 1px solid #e0e6ed; padding: 10px; border-radius: 6px; text-align: center; }
        .stat-val { display: block; font-size: 18px; font-weight: bold; color: #4a90e2; }
        .stat-label { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; }
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
            <tr><td style="border: 1px solid #ddd; padding: 8px;">4ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Ensaio </td></tr>
        </tbody>
    </table>

    <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px; margin-top: 10px; margin-bottom: 20px;">
        <button onclick="abrirCalendarioEscolar()" style="padding: 10px; width: 100%; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
            📅 ABRIR CALENDÁRIO DE ALUNOS
        </button>
    </div>

    <div class="stats-grid" id="stats-dashboard">
        <div class="stat-card">
            <span class="stat-val" id="count-total">0</span>
            <span class="stat-label">👥 Total</span>
        </div>
        <div class="stat-card">
            <span class="stat-val" id="count-cordas">0</span>
            <span class="stat-label">🎻 Cordas</span>
        </div>
        <div class="stat-card">
            <span class="stat-val" id="count-madeiras">0</span>
            <span class="stat-label">🎷 Madeiras</span>
        </div>
        <div class="stat-card">
            <span class="stat-val" id="count-metais">0</span>
            <span class="stat-label">🎺 Metais</span>
        </div>
    </div>

    <div style="border: 1px solid #ddd; border-radius: 5px; overflow: hidden;">
        <button class="acc-btn" onclick="toggleAccordion(this)">👥 Todos os Alunos</button>
        <div class="panel">
            <table>
              <tr><td>Arthur Guimarães Ribeiro (T1)</td><td style="text-align:right; color:#888;">Viola</td></tr>
            <tr><td>Arthur Ramos Rosado (T1)</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
            <tr><td>Breno Sousa dos Santos Rosado (T1)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Caíque (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Davi Rodrigues Gonçalves (T1)</td><td style="text-align:right; color:#888;">Eufônio</td></tr>
            <tr><td>Elton (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Evandro Bendochi (T2)</td><td style="text-align:right; color:#888;">Saxofone Alto</td></tr>
            <tr><td>Guilherme Sanches Melo (T2)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Heitor (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Hendril Wallace Teodoro (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Jefferson Dias Barreto (T3)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>João Pedro Carrara de Freitas (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>João Vítor Dias Alves Medeiros (T2)</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
            <tr><td>Lorenzo Melo Bendochi (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Lucas Gabriel dos Anjos Matos (T1)</td><td style="text-align:right; color:#888;">Flauta</td></tr>
            <tr><td>Luiz Antônio Inácio da Silva (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Luiz Gustavo de Olieveira Azevedo (T2)</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
            <tr><td>Maurício Oliveira (T1)</td><td style="text-align:right; color:#888;">TBD</td></tr>
            <tr><td>Pedro (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Rafael José dos Santos (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Robson Mendes (T3)</td><td style="text-align:right; color:#888;">Viola</td></tr>
            <tr><td>Samuel Carlos de Siqueira (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Thiago Alves Vieira da Silva (T2)</td><td style="text-align:right; color:#888;">Violino</td></tr>
            <tr><td>Vanderlei (M)</td><td style="text-align:right; color:#888;">Violino</td></tr>
        </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">📘 Turma T1</button>
        <div class="panel">
           <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Arthur Guimarães Ribeiro</td><td style="text-align:right; color:#888;">Viola</td></tr>
        <tr><td>Arthur Ramos Rosado</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
        <tr><td>Breno Sousa dos Santos Rosado</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>Davi Rodrigues Gonçalves</td><td style="text-align:right; color:#888;">Eufônio</td></tr>
        <tr><td>Heitor</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>João Pedro Carrara de Freitas</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Lucas Gabriel dos Anjos Matos</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>Luiz Antônio Inácio da Silva</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Maurício Oliveira</td><td style="text-align:right; color:#888;">TBD</td></tr>
        <tr><td>Pedro</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Rafael José dos Santos</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Samuel Carlos de Siqueira</td><td style="text-align:right; color:#888;">Violino</td></tr>
    </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">📗 Turma T2</button>
        <div class="panel">
            <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Evandro Bendochi</td><td style="text-align:right; color:#888;">Saxofone Alto</td></tr>
        <tr><td>Guilherme Sanches Melo</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>Hendril Wallace Teodoro</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>João Vítor Dias Alves Medeiros</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
        <tr><td>Lorenzo Melo Bendoch</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Luiz Gustavo de Oliveira Azevedo</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
        <tr><td>Thiago Alves Vieira da Silva</td><td style="text-align:right; color:#888;">Violino</td></tr>
    </table>
        </div>

        <button class="acc-btn" onclick="toggleAccordion(this)">📘 Turma T3</button>
<div class="panel">
    <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Jefferson Dias Barreto</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Pedro</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Robson Mendes</td><td style="text-align:right; color:#888;">Viola</td></tr>
    </table>
</div>

<button class="acc-btn" onclick="toggleAccordion(this)">☀️ Turma Manhã</button>
<div class="panel">
    <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Caíque</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Elton</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Vanderlei</td><td style="text-align:right; color:#888;">Violino</td></tr>
    </table>
</div>

       <button class="acc-btn" onclick="toggleAccordion(this)">🎻 Cordas</button>
<div class="panel">
    <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Arthur Guimarães Ribeiro</td><td style="text-align:right; color:#888;">Viola</td></tr>
        <tr><td>Caíque</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Elton</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Heitor</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Hendril Wallace Teodoro</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Jefferson Dias Barreto</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>João Pedro Carrara de Freitas</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Lorenzo Melo Bendochi</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Luiz Antônio Inácio da Silva</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Pedro (T1)</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Rafael José dos Santos</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Robson Mendes</td><td style="text-align:right; color:#888;">Viola</td></tr>
        <tr><td>Samuel Carlos de Oliveira</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Thiago Alves Vieira da Silva</td><td style="text-align:right; color:#888;">Violino</td></tr>
        <tr><td>Vanderlei</td><td style="text-align:right; color:#888;">Violino</td></tr>
    </table>
</div>

        <button class="acc-btn" onclick="toggleAccordion(this)">🎷 Madeiras</button>
<div class="panel">
    <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Arthur Ramos Rosado</td><td style="text-align:right; color:#888;">Saxofone</td></tr>
        <tr><td>Breno Sousa dos Santos Rosado</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>Evandro Bendochi</td><td style="text-align:right; color:#888;">Saxofone Alto</td></tr>
        <tr><td>Guilherme Sanches Melo</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>João Vítor Dias Medeiros</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
        <tr><td>Lucas Gabriel dos Anjos Matos</td><td style="text-align:right; color:#888;">Flauta</td></tr>
        <tr><td>Luiz Gustavo de Oliveira Azevedo</td><td style="text-align:right; color:#888;">Clarinete</td></tr>
    </table>
</div>

<button class="acc-btn" onclick="toggleAccordion(this)">🎺 Metais</button>
<div class="panel">
    <table style="width: 100%; border-collapse: collapse;">
        <tr><td>Davi Rodrigues Gonçalves</td><td style="text-align:right; color:#888;">Eufônio</td></tr>
    </table>
</div>
    </div>

    <script>
        function updateStats() {
            // Get all rows from the master table (first panel)
            const allRows = document.querySelectorAll('.panel table')[0].querySelectorAll('tr');
            
            let total = allRows.length;
            let cordas = 0, madeiras = 0, metais = 0;

            allRows.forEach(row => {
                const instrument = row.cells[1].innerText.toLowerCase();
                
                if (instrument.includes('violin') || instrument.includes('viola')) {
                    cordas++;
                } else if (instrument.includes('sax') || instrument.includes('flaut') || instrument.includes('clarin')) {
                    madeiras++;
                } else if (instrument.includes('euf')) {
                    metais++;
                }
            });

            // Update the UI
            document.getElementById('count-total').innerText = total;
            document.getElementById('count-cordas').innerText = cordas;
            document.getElementById('count-madeiras').innerText = madeiras;
            document.getElementById('count-metais').innerText = metais;
        }

        // Run calculation after a short delay to ensure DOM is ready
        setTimeout(updateStats, 100);
    </script>
`,
        pagina: "Agenda"
    }
});
