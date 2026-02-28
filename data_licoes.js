// --- FIX IS HERE: CHRONOLOGICAL ORDER AND DETAILED PROMPTS ---

Object.assign(BIBLIOTECA_LIVRO, {
    "modulo_licoes": {
        keywords: ["licoes", "alunos", "professor", "gravar", "registro", "presença"],
        fase: "Extras",
        titulo: "CONTROLE DE LIÇÕES",
        icone: "✏️",
        resumo: "Registro detalhado com ordem cronológica e status de aprovação.",
        html_content: `
            <style>
                .licoes-wrapper { padding: 15px; background: #f9f9f9; min-height: 100vh; }
                .selector-box { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; }
                .student-table { width: 100%; border-collapse: collapse; background: white; font-size: 11px; margin-top: 10px; }
                .student-table th { background: #333; color: white; padding: 8px; border: 1px solid #000; text-transform: uppercase; }
                .student-table td { border: 1px solid #000; padding: 6px; text-align: center; height: 25px; color: #333; }
                .btn-action { border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; margin: 5px; color: white; }
                .btn-add { background: #8e44ad; }
                .btn-save-licao { background: #27ae60; width: 100%; margin: 10px 0; }
                .info-header { display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; border: 2px solid #000; background: #fff; }
                .status-aprovado { color: #27ae60; font-weight: bold; font-size: 9px; }
                .status-estudar { color: #c0392b; font-weight: bold; font-size: 9px; }
                
                @media print {
                    .no-print, .btn-action, .selector-box { display: none !important; }
                    .student-table { width: 100%; font-size: 10px; }
                    .licoes-wrapper { background: white; padding: 0; }
                    body { background: white; }
                }
            </style>

            <div class="licoes-wrapper">
                <div class="selector-box no-print">
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <label><b>Selecione o Aluno:</b></label>
                        <button class="btn-action btn-add" onclick="promptNovoAluno()">➕ Novo Aluno</button>
                    </div>
                    <select id="aluno-select" style="width:100%; padding:10px; margin-top:5px;" onchange="initTabelaAluno(this.value)">
                        <option value="">-- Carregando Alunos... --</option>
                    </select>
                    <button class="btn-pdf" style="margin-top:10px; width:100%;" onclick="window.print()">🖨️ Imprimir Ficha de Progresso</button>
                </div>

                <div id="ficha-aluno" style="display:none;">
                    <div class="info-header">
                        <span id="nome-aluno-header">ALUNO: ---</span>
                        <span id="instr-aluno-header">INSTRUMENTO: ---</span>
                    </div>

                    <button class="btn-action btn-save-licao no-print" onclick="abrirPromptGravar()">💾 Gravar Nova Lição</button>

                    <table class="student-table">
                        <thead>
                            <tr>
                                <th style="width: 15%;">DIA / MÊS</th>
                                <th style="width: 25%;">SOLFEJO</th>
                                <th style="width: 25%;">MÉTODO</th>
                                <th style="width: 15%;">HINO</th>
                                <th style="width: 20%;">INSTRUTOR</th>
                            </tr>
                        </thead>
                        <tbody id="body-licoes"></tbody>
                    </table>
                </div>
            </div>

            <script>
                var currentID = "";

                function sincronizarListaAlunos() {
                    firebase.database().ref('lista_alunos').on('value', (snapshot) => {
                        const select = document.getElementById('aluno-select');
                        select.innerHTML = '<option value="">-- Escolha um Aluno --</option>';
                        snapshot.forEach((child) => {
                            const aluno = child.val();
                            select.innerHTML += \`<option value="\${child.key}" data-instr="\${aluno.instrumento}">\${aluno.nome} (\${aluno.instrumento})</option>\`;
                        });
                    });
                }

                function promptNovoAluno() {
                    const nome = prompt("Nome completo do aluno:");
                    if(!nome) return;
                    const instrumento = prompt("Instrumento:");
                    firebase.database().ref('lista_alunos').push({ nome, instrumento });
                }

                function initTabelaAluno(id) {
                    if(!id) { document.getElementById('ficha-aluno').style.display = 'none'; return; }
                    currentID = id;
                    document.getElementById('ficha-aluno').style.display = 'block';
                    const sel = document.getElementById('aluno-select');
                    const option = sel.options[sel.selectedIndex];
                    document.getElementById('nome-aluno-header').innerText = "ALUNO: " + option.text.split(' (')[0];
                    document.getElementById('instr-aluno-header').innerText = "INSTRUMENTO: " + option.getAttribute('data-instr');
                    loadLicoes(id);
                }

                function loadLicoes(id) {
                    firebase.database().ref('licoes_alunos/' + id).on('value', (snapshot) => {
                        const tbody = document.getElementById('body-licoes');
                        tbody.innerHTML = "";
                        const licoes = [];
                        snapshot.forEach(child => { 
                            licoes.push(child.val()); 
                        });

                        // Ordenação por data (formato DD/MM)
                        licoes.sort((a, b) => {
                            const dateA = a.data.split('/').reverse().join('');
                            const dateB = b.data.split('/').reverse().join('');
                            return dateA.localeCompare(dateB);
                        });

                        licoes.forEach(l => {
                            tbody.innerHTML += \`<tr>
                                <td>\${l.data}</td>
                                <td>\${l.solfejo}</td>
                                <td>\${l.metodo}</td>
                                <td>\${l.hino}</td>
                                <td>\${l.instrutor}</td>
                            </tr>\`;
                        });
                    });
                }

             
