// --- FIX IS HERE: CHRONOLOGICAL ORDER, DETAILED PROMPTS AND EDIT/DELETE ---

Object.assign(BIBLIOTECA_LIVRO, {
    "modulo_licoes": {
        keywords: ["licoes", "alunos", "professor", "gravar", "registro", "presença"],
        fase: "Extras",
        titulo: "CONTROLE DE LIÇÕES",
        icone: "✏️",
        resumo: "Registro detalhado com ordem cronológica e ações de edição.",
        html_content: `
            <style>
                .licoes-wrapper { padding: 15px; background: #f9f9f9; min-height: 100vh; }
                .selector-box { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; }
                .student-table { width: 100%; border-collapse: collapse; background: white; font-size: 11px; margin-top: 10px; }
                .student-table th { background: #333; color: white; padding: 8px; border: 1px solid #000; text-transform: uppercase; }
                .student-table td { border: 1px solid #000; padding: 6px; text-align: center; color: #333; }
                .btn-action { border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; margin: 5px; color: white; }
                .btn-add { background: #8e44ad; }
                .btn-save-licao { background: #27ae60; width: 100%; margin: 10px 0; }
                .btn-edit { background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px; }
                .info-header { display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; border: 2px solid #000; background: #fff; }
                .status-aprovado { color: #27ae60; font-weight: bold; font-size: 9px; }
                .status-estudar { color: #c0392b; font-weight: bold; font-size: 9px; }
                
                @media print {
                    .no-print, .btn-action, .selector-box, .col-acoes { display: none !important; }
                    .student-table { width: 100%; font-size: 10px; }
                    .licoes-wrapper { background: white; padding: 0; }
                }
            </style>

            <div class="licoes-wrapper">
                <div class="selector-box no-print">
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <label><b>Selecione o Aluno:</b></label>
                        <button class="btn-action btn-add" onclick="window.promptNovoAluno()">➕ Novo Aluno</button>
                    </div>
                    <select id="aluno-select" style="width:100%; padding:10px; margin-top:5px;" onchange="window.initTabelaAluno(this.value)">
                        <option value="">-- Carregando Alunos... --</option>
                    </select>
                    <button class="btn-pdf" style="margin-top:10px; width:100%;" onclick="window.print()">🖨️ Imprimir Ficha de Progresso</button>
                </div>

                <div id="ficha-aluno" style="display:none;">
                    <div class="info-header">
                        <span id="nome-aluno-header">ALUNO: ---</span>
                        <span id="instr-aluno-header">INSTRUMENTO: ---</span>
                    </div>

                    <button class="btn-action btn-save-licao no-print" onclick="window.abrirPromptGravar()">💾 Gravar Nova Lição</button>

                    <table class="student-table">
                        <thead>
                            <tr>
                                <th style="width: 12%;">DIA/MÊS</th>
                                <th style="width: 25%;">SOLFEJO</th>
                                <th style="width: 25%;">MÉTODO</th>
                                <th style="width: 13%;">HINO</th>
                                <th style="width: 15%;">INSTRUTOR</th>
                                <th class="col-acoes no-print" style="width: 10%;">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody id="body-licoes"></tbody>
                    </table>
                </div>
            </div>

            <script>
                window.sincronizarListaAlunos = function() {
                    firebase.database().ref('lista_alunos').on('value', (snapshot) => {
                        const select = document.getElementById('aluno-select');
                        if(!select) return;
                        select.innerHTML = '<option value="">-- Escolha um Aluno --</option>';
                        snapshot.forEach((child) => {
                            const aluno = child.val();
                            select.innerHTML += \`<option value="\${child.key}" data-instr="\${aluno.instrumento}">\${aluno.nome} (\${aluno.instrumento})</option>\`;
                        });
                    });
                };

                window.promptNovoAluno = function() {
                    const nome = prompt("Nome completo do aluno:");
                    if(!nome) return;
                    const instrumento = prompt("Instrumento:");
                    firebase.database().ref('lista_alunos').push({ nome, instrumento });
                };

                window.initTabelaAluno = function(id) {
                    if(!id) { document.getElementById('ficha-aluno').style.display = 'none'; return; }
                    window.currentID = id;
                    document.getElementById('ficha-aluno').style.display = 'block';
                    const sel = document.getElementById('aluno-select');
                    const option = sel.options[sel.selectedIndex];
                    document.getElementById('nome-aluno-header').innerText = "ALUNO: " + option.text.split(' (')[0];
                    document.getElementById('instr-aluno-header').innerText = "INSTRUMENTO: " + option.getAttribute('data-instr');
                    window.loadLicoes(id);
                };

                window.loadLicoes = function(id) {
                    firebase.database().ref('licoes_alunos/' + id).on('value', (snapshot) => {
                        const tbody = document.getElementById('body-licoes');
                        if(!tbody) return;
                        tbody.innerHTML = "";
                        const licoes = [];
                        snapshot.forEach(child => { 
                            let data = child.val();
                            data.key = child.key; // Guardamos a chave para editar/deletar
                            licoes.push(data); 
                        });

                        licoes.sort((a, b) => a.data.split('/').reverse().join('').localeCompare(b.data.split('/').reverse().join('')));

                        licoes.forEach(l => {
                            tbody.innerHTML += \`<tr>
                                <td>\${l.data}</td>
                                <td>\${l.solfejo}</td>
                                <td>\${l.metodo}</td>
                                <td>\${l.hino}</td>
                                <td>\${l.instrutor}</td>
                                <td class="col-acoes no-print">
                                    <button class="btn-edit" onclick="window.editarLicao('\${l.key}')">✏️</button>
                                    <button class="btn-edit" onclick="window.excluirLicao('\${l.key}')">🗑️</button>
                                </td>
                            </tr>\`;
                        });
                    });
                };

                window.abrirPromptGravar = function() {
                    if(!window.currentID) return;
                    const licaoBase = { data: new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}), solfejo: "-", metodo: "-", hino: "-", instrutor: "-" };
                    window.processarLicao(null, licaoBase);
                };

                window.editarLicao = function(key) {
                    firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).once('value', (snapshot) => {
                        const l = snapshot.val();
                        // Limpar as tags HTML para o prompt não ficar feio
                        const limpar = (str) => str.split('<br>')[0];
                        window.processarLicao(key, {
                            data: l.data,
                            solfejo: limpar(l.solfejo),
                            metodo: limpar(l.metodo),
                            hino: limpar(l.hino),
                            instrutor: l.instrutor
                        });
                    });
                };

                window.processarLicao = function(key, defaults) {
                    const dataL = prompt("Data (DD/MM):", defaults.data);
                    if(!dataL) return;
                    
                    const helper = "\\n(A = Aprovado / E = Estudar)";
                    const fSts = (v, s) => v + (s.toUpperCase() === 'A' ? '<br><span class="status-aprovado">Aprovado</span>' : '<br><span class="status-estudar">Estudar</span>');

                    const s_lic = prompt("SOLFEJO - Lição/Pág:", defaults.solfejo);
                    const s_sts = fSts(s_lic, prompt("SOLFEJO - Status" + helper));

                    const m_lic = prompt("MÉTODO - Lição/Pág:", defaults.metodo);
                    const m_sts = fSts(m_lic, prompt("MÉTODO - Status" + helper));

                    const h_lic = prompt("HINO:", defaults.hino);
                    const h_sts = fSts(h_lic, prompt("HINO - Status" + helper));

                    const inst = prompt("Instrutor:", defaults.instrutor);

                    const licao = { data: dataL, solfejo: s_sts, metodo: m_sts, hino: h_sts, instrutor: inst };

                    const ref = firebase.database().ref('licoes_alunos/' + window.currentID);
                    if(key) ref.child(key).update(licao); else ref.push(licao);
                };

                window.excluirLicao = function(key) {
                    if(confirm("Deseja excluir este registro permanentemente?")) {
                        firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).remove();
                    }
                };

                window.sincronizarListaAlunos();
            </script>
        `,
        pagina: "Extra"
    }
});
