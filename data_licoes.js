// --- FIX IS HERE: AUTOMATIC STUDENT LINKING, FIREBASE UPDATE AND SEARCH FILTER ---

Object.assign(BIBLIOTECA_LIVRO, {
    "modulo_licoes": {
        keywords: ["licoes", "alunos", "professor", "gravar", "registro", "presença"],
        fase: "Extras",
        titulo: "CONTROLE DE LIÇÕES",
        icone: "✏️",
        resumo: "Registro detalhado com ordem cronológica, edição e busca rápida.",
        html_content: `
            <style>
                .licoes-wrapper { padding: 15px; background: #f9f9f9; min-height: 100vh; font-family: sans-serif; }
                .selector-box { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; }
                .student-table { width: 100%; border-collapse: collapse; background: white; font-size: 11px; margin-top: 10px; }
                .student-table th { background: #333; color: white; padding: 8px; border: 1px solid #000; text-transform: uppercase; }
                .student-table td { border: 1px solid #000; padding: 6px; text-align: center; color: #333; }
                .btn-action { border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; margin: 5px; color: white; }
                .btn-add { background: #8e44ad; }
                .btn-save-licao { background: #27ae60; width: 100%; margin: 10px 0; color: white; padding: 12px; font-weight: bold; border: none; border-radius: 5px; cursor: pointer; }
                .btn-edit { background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px; }
                .info-header { display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; border: 2px solid #000; background: #fff; }
                .status-aprovado { color: #27ae60; font-weight: bold; font-size: 9px; }
                .status-estudar { color: #c0392b; font-weight: bold; font-size: 9px; }
                .search-box { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
                
                @media print {
                    .no-print, .btn-action, .selector-box, .col-acoes, .btn-save-licao, .search-box { display: none !important; }
                    .student-table { width: 100%; font-size: 10px; }
                    .licoes-wrapper { background: white; padding: 0; }
                }
            </style>

            <div class="licoes-wrapper">
                <div class="selector-box no-print">
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <label><b>Selecione o Aluno:</b></label>
                        <button type="button" class="btn-action btn-add" onclick="window.promptNovoAluno()">➕ Novo Aluno</button>
                    </div>
                    <select id="aluno-select" style="width:100%; padding:10px; margin-top:5px;" onchange="window.initTabelaAluno(this.value)">
                        <option value="">-- Carregando Alunos... --</option>
                    </select>
                </div>

                <div id="ficha-aluno" style="display:none;">
                    <div class="info-header">
                        <span id="nome-aluno-header">ALUNO: ---</span>
                        <span id="instr-aluno-header">INSTRUMENTO: ---</span>
                    </div>

                    <div class="no-print">
                        <input type="text" id="input-busca" class="search-box" placeholder="🔍 Buscar por data, lição, hino ou instrutor..." onkeyup="window.filtrarTabela()">
                        <button type="button" class="btn-save-licao" onclick="window.abrirPromptGravar()">💾 Gravar Nova Lição</button>
                    </div>

                    <table class="student-table" id="tabela-registro">
                        <thead>
                            <tr>
                                <th style="width: 10%;">DATA</th>
                                <th style="width: 15%;">BONA</th>
                                <th style="width: 15%;">MSA</th>
                                <th style="width: 20%;">MÉTODO</th>
                                <th style="width: 12%;">HINO</th>
                                <th style="width: 18%;">INSTRUTOR</th>
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
                        const currentVal = select.value;
                        select.innerHTML = '<option value="">-- Escolha um Aluno --</option>';
                        snapshot.forEach((child) => {
                            const aluno = child.val();
                            const selected = child.key === currentVal ? 'selected' : '';
                            select.innerHTML += \`<option value="\${child.key}" data-instr="\${aluno.instrumento}" \${selected}>\${aluno.nome}</option>\`;
                        });
                    });
                };

                window.promptNovoAluno = function() {
                    const nome = prompt("Nome completo do aluno:");
                    if(!nome) return;
                    const instrumento = prompt("Instrumento:");
                    if(!instrumento) return;
                    firebase.database().ref('lista_alunos').push({ nome, instrumento });
                };

                window.initTabelaAluno = function(id) {
                    const ficha = document.getElementById('ficha-aluno');
                    if(!id) { if(ficha) ficha.style.display = 'none'; return; }
                    window.currentID = id;
                    ficha.style.display = 'block';
                    const sel = document.getElementById('aluno-select');
                    const option = sel.options[sel.selectedIndex];
                    document.getElementById('nome-aluno-header').innerText = "ALUNO: " + option.text;
                    document.getElementById('instr-aluno-header').innerText = "INSTRUMENTO: " + option.getAttribute('data-instr');
                    
                    const busca = document.getElementById('input-busca');
                    if(busca) busca.value = ""; 
                    
                    window.loadLicoes(id);
                };

                window.loadLicoes = function(id) {
                    firebase.database().ref('licoes_alunos/' + id).on('value', (snapshot) => {
                        const tbody = document.getElementById('body-licoes');
                        if(!tbody) return;
                        tbody.innerHTML = "";
                        const licoes = [];
                        snapshot.forEach(child => { 
                            let item = child.val();
                            item.key = child.key;
                            licoes.push(item); 
                        });
                        licoes.sort((a, b) => a.data.split('/').reverse().join('').localeCompare(b.data.split('/').reverse().join('')));
                        licoes.forEach(l => {
                            tbody.innerHTML += \`<tr>
                                <td>\${l.data}</td>
                                <td>\${l.bona || "-"}</td>
                                <td>\${l.msa || "-"}</td>
                                <td>\${l.metodo}</td>
                                <td>\${l.hino}</td>
                                <td>\${l.instrutor}</td>
                                <td class="col-acoes no-print">
                                    <button class="btn-edit" onclick="window.editarLicao('\${l.key}')">✏️</button>
                                    <button class="btn-edit" onclick="window.excluirLicao('\${l.key}')">🗑️</button>
                                </td>
                            </tr>\`;
                        });
                        window.filtrarTabela(); 
                    });
                };

                window.filtrarTabela = function() {
                    const input = document.getElementById('input-busca');
                    const filter = input.value.toUpperCase();
                    const tbody = document.getElementById('body-licoes');
                    const tr = tbody.getElementsByTagName('tr');

                    for (let i = 0; i < tr.length; i++) {
                        let rowText = tr[i].textContent || tr[i].innerText;
                        if (rowText.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                };

                window.abrirPromptGravar = function() {
                    if(!window.currentID) return alert("Selecione um aluno.");
                    const licaoBase = { data: new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}), bona: "-", msa: "-", metodo: "-", hino: "-", instrutor: "-" };
                    window.processarLicao(null, licaoBase);
                };

                window.editarLicao = function(key) {
                    firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).once('value', (snapshot) => {
                        const l = snapshot.val();
                        const limpar = (str) => str ? str.split('<br>')[0] : "";
                        window.processarLicao(key, {
                            data: l.data,
                            bona: limpar(l.bona),
                            msa: limpar(l.msa),
                            metodo: limpar(l.metodo),
                            hino: limpar(l.hino),
                            instrutor: l.instrutor
                        });
                    });
                };

                window.processarLicao = function(key, defaults) {
                    const dataL = prompt("1. DATA (DD/MM):", defaults.data);
                    if(!dataL) return;

                    const formatarInput = (raw, label) => {
                        if(!raw || raw === "-") return "-";
                        const partes = raw.trim().split(" ");
                        const valor = partes[0];
                        const status = (partes[1] || "A").toUpperCase();
                        const statusHTML = (status === 'A') 
                            ? '<br><span class="status-aprovado">Aprovado</span>' 
                            : '<br><span class="status-estudar">Estudar</span>';
                        return valor + statusHTML;
                    };

                    const bInput = prompt("2. BONA (Lição + Espaço + Status A/E):\\nEx: 15 A", defaults.bona);
                    if(bInput === null) return;
                    
                    const mInput = prompt("3. MSA (Lição + Espaço + Status A/E):\\nEx: 2.4 E", defaults.msa);
                    if(mInput === null) return;

                    const metInput = prompt("4. MÉTODO (Lição + Espaço + Status A/E):", defaults.metodo);
                    if(metInput === null) return;

                    const hinoInput = prompt("5. HINO (Número + Espaço + Status A/E):", defaults.hino);
                    if(hinoInput === null) return;

                    const instrutor = prompt("6. INSTRUTOR:", defaults.instrutor);
                    if(instrutor === null) return;

                    const licao = { 
                        data: dataL, 
                        bona: formatarInput(bInput, "BONA"), 
                        msa: formatarInput(mInput, "MSA"), 
                        metodo: formatarInput(metInput, "MÉTODO"), 
                        hino: formatarInput(hinoInput, "HINO"), 
                        instrutor: instrutor 
                    };

                    const ref = firebase.database().ref('licoes_alunos/' + window.currentID);
                    if(key) ref.child(key).update(licao); else ref.push(licao);
                };

                window.excluirLicao = function(key) {
                    if(confirm("Deseja excluir permanentemente este registro?")) {
                        firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).remove();
                    }
                };

                if(typeof firebase !== 'undefined') window.sincronizarListaAlunos();
            </script>
        `,
        pagina: "Extra"
    }
});
