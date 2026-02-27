Object.assign(BIBLIOTECA_LIVRO, {
    "modulo_licoes": {
        keywords: ["licoes", "alunos", "professor", "gravar", "registro", "presença"],
        fase: "Extras",
        titulo: "CONTROLE DE LIÇÕES",
        icone: "✏️",
        resumo: "Registro individual de progresso com lista dinâmica via Firebase.",
        html_content: `
            <style>
                .licoes-wrapper { padding: 15px; background: #f9f9f9; min-height: 100vh; }
                .selector-box { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; }
                .student-table { width: 100%; border-collapse: collapse; background: white; font-size: 12px; margin-top: 10px; }
                .student-table th { background: #4a90e2; color: white; padding: 10px; border: 1px solid #357abd; }
                .student-table td { border: 1px solid #ddd; padding: 8px; text-align: center; height: 30px; }
                .btn-action { border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; margin: 5px; color: white; }
                .btn-add { background: #8e44ad; }
                .btn-save-licao { background: #27ae60; }
                .info-header { display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; background: #eee; border-radius: 5px; }
                
                @media print {
                    .no-print, .btn-action, .selector-box { display: none !important; }
                    .student-table { width: 100%; font-size: 10px; }
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
                    <button class="btn-pdf" style="margin-top:10px; width:100%;" onclick="window.print()">🖨️ Gerar Relatório PDF</button>
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
                                <th>DATA</th>
                                <th>SOLFEJO</th>
                                <th>MÉTODO</th>
                                <th>HINO</th>
                                <th>INSTRUTOR</th>
                            </tr>
                        </thead>
                        <tbody id="body-licoes"></tbody>
                    </table>
                </div>
            </div>

            <script>
                var currentID = "";

                // 1. Escuta a lista de alunos em tempo real
                function sincronizarListaAlunos() {
                    const dbLista = firebase.database().ref('lista_alunos');
                    dbLista.on('value', (snapshot) => {
                        const select = document.getElementById('aluno-select');
                        select.innerHTML = '<option value="">-- Escolha um Aluno --</option>';
                        
                        snapshot.forEach((child) => {
                            const aluno = child.val();
                            select.innerHTML += \`<option value="\${child.key}" data-instr="\${aluno.instrumento}">\${aluno.nome} (\${aluno.instrumento})</option>\`;
                        });
                    });
                }

                // 2. Cadastra novo aluno via Prompt
                function promptNovoAluno() {
                    const nome = prompt("Nome completo do aluno:");
                    if(!nome) return;
                    const instrumento = prompt("Instrumento:");
                    
                    const novoRef = firebase.database().ref('lista_alunos').push();
                    novoRef.set({ nome, instrumento });
                }

                function initTabelaAluno(id) {
                    if(!id) { document.getElementById('ficha-aluno').style.display = 'none'; return; }
                    currentID = id;
                    document.getElementById('ficha-aluno').style.display = 'block';
                    
                    const sel = document.getElementById('aluno-select');
                    const option = sel.options[sel.selectedIndex];
                    document.getElementById('nome-aluno-header').innerText = "ALUNO: " + option.text.split(' (')[0];
                    document.getElementById('instr-aluno-header').innerText = "INSTR: " + option.getAttribute('data-instr');

                    loadLicoes(id);
                }

                function loadLicoes(id) {
                    firebase.database().ref('licoes_alunos/' + id).on('value', (snapshot) => {
                        const tbody = document.getElementById('body-licoes');
                        tbody.innerHTML = "";
                        snapshot.forEach(child => {
                            const l = child.val();
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

                function abrirPromptGravar() {
                    const dataL = prompt("Data (DD/MM):", new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}));
                    if(!dataL || !currentID) return;
                    
                    const licao = {
                        data: dataL,
                        solfejo: prompt("Solfejo:") || "-",
                        metodo: prompt("Método:") || "-",
                        hino: prompt("Hino:") || "-",
                        instrutor: prompt("Instrutor:") || "-"
                    };

                    firebase.database().ref('licoes_alunos/' + currentID).push(licao);
                }

                // Inicia a sincronização ao carregar o módulo
                sincronizarListaAlunos();
            </script>
        `,
        pagina: "Extra"
    }
});
