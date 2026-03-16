Object.assign(BIBLIOTECA_LIVRO, {
    "modulo_licoes": {
        keywords: ["licoes", "alunos", "professor", "gravar", "registro", "presença"],
        fase: "Extras",
       titulo: `CONTROLE DE LIÇÕES <button type="button" class="btn-action btn-add" style="margin-left:15px; padding: 4px 10px; font-size: 11px; vertical-align: middle; background: #0284c7; color: white; border-radius: 5px; border: none; font-weight: bold; cursor: pointer;" onclick="window.promptNovoAluno()">➕ Novo Aluno</button>`,
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
                .btn-add { background: #0284c7; } /* Changed from purple to blue */
                .btn-save-licao { background: #27ae60; width: 100%; margin: 10px 0; color: white; padding: 12px; font-weight: bold; border: none; border-radius: 5px; cursor: pointer; }
                .btn-edit { background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px; }
                .info-header { display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; border: 2px solid #000; background: #fff; }
                .status-aprovado { color: #27ae60; font-weight: bold; font-size: 9px; }
                .status-estudar { color: #c0392b; font-weight: bold; font-size: 9px; }
                .search-box { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
                
                #modal-licao { display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.6); overflow-y: auto; }
                .modal-content { background:white; margin: 5% auto; padding:20px; border-radius:10px; width:90%; max-width:450px; }
                .modal-section { border: 1px solid #ddd; padding: 10px; border-radius: 5px; margin-bottom: 10px; background: #fff; }
                .modal-section-title { font-weight: bold; font-size: 12px; color: #444; margin-bottom: 8px; display: block; border-bottom: 1px solid #eee; }
                .form-row { display: flex; gap: 10px; margin-bottom: 5px; }
                .form-group { flex: 1; }
                .form-group label { display:block; font-size:11px; font-weight:bold; margin-bottom:2px; }
                .form-group input, .form-group select { width:100%; padding:6px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px; font-size: 13px; }
                .radio-group { display: flex; gap: 15px; align-items: center; margin-top: 5px; font-size: 12px; }
                .modal-footer { display:flex; justify-content: space-between; margin-top:15px; }

                @media print {
                    .no-print, .btn-action, .selector-box, .col-acoes, .btn-save-licao, .search-box, #modal-licao { display: none !important; }
                    .student-table { width: 100%; font-size: 10px; }
                    .licoes-wrapper { background: white; padding: 0; }
                }
            </style>

            <div class="licoes-wrapper">
                <div id="modal-licao">
                    <div class="modal-content">
                        <h3 id="modal-titulo" style="margin-top:0">Gravar Lição</h3>
                        <input type="hidden" id="modal-key">
                        
                        <div class="form-group" style="margin-bottom:15px">
                            <label>Data (DD/MM):</label>
                            <input type="text" id="m-data">
                        </div>

                        <div class="modal-section">
                            <span class="modal-section-title">BONA</span>
                            <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-bona-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-bona-p"></div>
                            </div>
                            <div class="radio-group">
                                <label><input type="radio" name="st-bona" value="A" checked> Aprovado</label>
                              
                            </div>
                              <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-bona-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-bona-p"></div>
                            </div>
                            <div class="radio-group">
                              
                                <label><input type="radio" name="st-bona" value="E"> Estudar</label>
                            </div>
                        </div>

                        <div class="modal-section">
                            <span class="modal-section-title">MSA</span>
                            <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-msa-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-msa-p"></div>
                            </div>
                            <div class="radio-group">
                                <label><input type="radio" name="st-msa" value="A" checked> Aprovado</label>
                          
                            </div>
                             <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-msa-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-msa-p"></div>
                            </div>
                            <div class="radio-group">
                                
                                <label><input type="radio" name="st-msa" value="E"> Estudar</label>
                            </div>
                        </div>

                        <div class="modal-section">
                            <span class="modal-section-title">MÉTODO</span>
                            <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-metodo-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-metodo-p"></div>
                            </div>
                            <div class="radio-group">
                                <label><input type="radio" name="st-metodo" value="A" checked> Aprovado</label>
                              
                            </div>
                              <div class="form-row">
                                <div class="form-group"><label>Lição:</label><input type="text" id="m-metodo-l"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-metodo-p"></div>
                            </div>
                            <div class="radio-group">
                                <label><input type="radio" name="st-metodo" value="E"> Estudar</label>
                            </div>
                        </div>

                        <div class="modal-section">
                            <span class="modal-section-title">HINO</span>
                            <div class="form-row">
                               <input type="text" id="m-hino" placeholder="Ex: 123 ou Hino 456">
                               </div>
                            <div class="radio-group">
                              <label><input type="radio" name="st-hino" value="A" checked> Aprovado</label>
                              <label><input type="radio" name="st-hino" value="E"> Estudar</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Quem ensinou:</label>
                            <select id="m-instrutor">
                                <option value="">-- Selecione --</option>
                                <option value="Alecson">Alecson</option>
                                <option value="Alessandro">Alessandro</option>
                                <option value="Breno">Breno</option>
                                <option value="Davi">Davi</option>
                                <option value="Dudu">Dudu</option>
                                <option value="Jonny">Jonny</option>
                                <option value="João">João</option>
                                <option value="Leo">Leo</option>
                                <option value="Marcos">Marcos</option>
                                <option value="Osvaldo">Osvaldo</option>
                                <option value="Rodrigo">Rodrigo</option>
                                <option value="Ronaldo">Ronaldo</option>
                                <option value="Rudi">Rudi</option>
                                <option value="Vitor">Vitor</option>
                            </select>
                        </div>

                        <div class="modal-footer">
                            <button class="btn-action" style="background:#7f8c8d" onclick="document.getElementById('modal-licao').style.display='none'">Cancelar</button>
                            <button class="btn-action" style="background:#27ae60" onclick="window.salvarModal()">Salvar Registro</button>
                        </div>
                    </div>
                </div>

                <div class="selector-box no-print">
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <label><b>Selecione o Aluno:</b></label>
                      
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
                                <th style="width: 15%;">MÉTODO</th>
                                <th style="width: 15%;">HINO</th>
                                <th style="width: 18%;">INSTRUTOR</th>
                                <th class="col-acoes no-print" style="width: 12%;">AÇÕES</th>
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
                    if(document.getElementById('input-busca')) document.getElementById('input-busca').value = "";
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
                                <td>\${l.metodo || "-"}</td>
                                <td>\${l.hino || "-"}</td>
                                <td>\${l.instrutor}</td>
                                <td class="col-acoes no-print">
                                    <button class="btn-edit" onclick="window.editarLicao('\${l.key}')">✏️</button>
                                    <button class="btn-edit" onclick="window.excluirLicao('\${l.key}')">🗑️</button>
                                </td>
                            </tr>\`;
                        });
                    });
                };

                window.filtrarTabela = function() {
                    const input = document.getElementById('input-busca');
                    const filter = input.value.toUpperCase();
                    const tbody = document.getElementById('body-licoes');
                    const tr = tbody.getElementsByTagName('tr');
                    for (let i = 0; i < tr.length; i++) {
                        let rowText = tr[i].textContent || tr[i].innerText;
                        tr[i].style.display = rowText.toUpperCase().indexOf(filter) > -1 ? "" : "none";
                    }
                };

                window.abrirPromptGravar = function() {
                    if(!window.currentID) return alert("Selecione um aluno.");
                    window.processarLicao(null, { 
                        data: new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}), 
                        bona: "-", msa: "-", metodo: "-", hino: "-", instrutor: "" 
                    });
                };

                window.editarLicao = function(key) {
                    firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).once('value', (snapshot) => {
                        const l = snapshot.val();
                        const extrair = (str) => {
                            if(!str || str === "-") return { l: "", p: "", status: "A" };
                            const status = str.includes('status-estudar') ? "E" : "A";
                            const match = str.match(/lição: (.*?) - pág: (.*?) -/);
                            return { l: match ? match[1] : "", p: match ? match[2] : "", status: status };
                        };
                        
                        const b = extrair(l.bona);
                        const m = extrair(l.msa);
                        const met = extrair(l.metodo);
                        const hin = extrair(l.hino);

                        document.getElementById('modal-licao').style.display = 'block';
                        document.getElementById('modal-key').value = key;
                        document.getElementById('m-data').value = l.data;
                        document.getElementById('m-bona-l').value = b.l; document.getElementById('m-bona-p').value = b.p;
                        document.querySelector(\`input[name="st-bona"][value="\${b.status}"]\`).checked = true;
                        
                        document.getElementById('m-msa-l').value = m.l; document.getElementById('m-msa-p').value = m.p;
                        document.querySelector(\`input[name="st-msa"][value="\${m.status}"]\`).checked = true;

                        document.getElementById('m-metodo-l').value = met.l; document.getElementById('m-metodo-p').value = met.p;
                        document.querySelector(\`input[name="st-metodo"][value="\${met.status}"]\`).checked = true;

                        document.getElementById('m-hino-l').value = hin.l; document.getElementById('m-hino-p').value = hin.p;
                        document.querySelector(\`input[name="st-hino"][value="\${hin.status}"]\`).checked = true;

                        document.getElementById('m-instrutor').value = l.instrutor;
                    });
                };

                window.processarLicao = function(key, defaults) {
                    document.getElementById('modal-licao').style.display = 'block';
                    document.getElementById('modal-titulo').innerText = key ? "Editar Registro" : "Gravar Nova Lição";
                    document.getElementById('modal-key').value = key || "";
                    document.getElementById('m-data').value = defaults.data;
                    document.getElementById('m-bona-l').value = ""; document.getElementById('m-bona-p').value = "";
                    document.getElementById('m-msa-l').value = ""; document.getElementById('m-msa-p').value = "";
                    document.getElementById('m-metodo-l').value = ""; document.getElementById('m-metodo-p').value = "";
                    document.getElementById('m-hino-l').value = ""; document.getElementById('m-hino-p').value = "";
                    document.getElementById('m-instrutor').value = "";
                };

                window.salvarModal = function() {
                    const key = document.getElementById('modal-key').value;
                    const format = (idL, idP, name, label) => {
                        const l = document.getElementById(idL).value;
                        const p = document.getElementById(idP).value;
                        const st = document.querySelector(\`input[name="\${name}"]:checked\`).value;
                        if(!l && !p) return "-";
                        const statusLabel = st === 'A' ? 'Aprovado' : 'Estudar';
                        const statusClass = st === 'A' ? 'status-aprovado' : 'status-estudar';
                        return \`\${label} - lição: \${l} - pág: \${p} - <span class="\${statusClass}">\${statusLabel}</span>\`;
                    };

                    const licao = {
                        data: document.getElementById('m-data').value,
                        bona: format('m-bona-l', 'm-bona-p', 'st-bona', 'BONA'),
                        msa: format('m-msa-l', 'm-msa-p', 'st-msa', 'MSA'),
                        metodo: format('m-metodo-l', 'm-metodo-p', 'st-metodo', 'MÉTODO'),
                        hino: format('m-hino-l', 'm-hino-p', 'st-hino', 'HINO'),
                        instrutor: document.getElementById('m-instrutor').value
                    };

                    const ref = firebase.database().ref('licoes_alunos/' + window.currentID);
                    if(key) ref.child(key).update(licao); else ref.push(licao);
                    document.getElementById('modal-licao').style.display = 'none';
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
