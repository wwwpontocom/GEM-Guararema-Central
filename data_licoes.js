// --- FIX: Módulo de Lições com Função de Edição ---

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
                .btn-save-licao { background: #27ae60; width: 100%; margin: 10px 0; color: white; padding: 12px; font-weight: bold; border: none; border-radius: 5px; cursor: pointer; }
                .btn-edit { background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px; }
                .status-aprovado { color: #27ae60; font-weight: bold; font-size: 10px; display: block; }
                .status-estudar { color: #c0392b; font-weight: bold; font-size: 10px; display: block; }
                .search-box { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
                #modal-licao { display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.6); overflow-y: auto; }
                .modal-content { background:white; margin: 2% auto; padding:20px; border-radius:10px; width:90%; max-width:450px; }
                .modal-section { border: 1px solid #ddd; padding: 10px; border-radius: 5px; margin-bottom: 10px; background: #fff; }
                .modal-section-title { font-weight: bold; font-size: 12px; color: #0284c7; margin-bottom: 8px; display: block; border-bottom: 1px solid #eee; }
                .form-row { display: flex; gap: 10px; margin-bottom: 5px; align-items: center; }
                .form-group { flex: 1; }
                .form-group label { display:block; font-size:10px; font-weight:bold; margin-bottom:2px; }
                .form-group input, .form-group select { width:100%; padding:6px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px; font-size: 12px; }
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

                        ${['bona', 'msa', 'metodo', 'hino'].map(cat => `
                        <div class="modal-section">
                            <span class="modal-section-title">${cat.toUpperCase()}</span>
                            <div class="form-row">
                                <div class="form-group"><label>✅ Aprovado:</label><input type="text" id="m-${cat}-l" placeholder="Lição"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-${cat}-p" placeholder="Pág"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>📖 Estudar:</label><input type="text" id="m-${cat}-le" placeholder="Lição"></div>
                                <div class="form-group"><label>Pág:</label><input type="text" id="m-${cat}-pe" placeholder="Pág"></div>
                            </div>
                        </div>`).join('')}

                        <div class="form-group">
                            <label>Quem ensinou:</label>
                            <select id="m-instrutor">
                                <option value="">-- Selecione --</option>
                                <option value="Alecson">Alecson</option>
                                <option value="Alessandro">Alessandro</option>
                                <option value="Breno">Breno</option>
                                <option value="Davi">Davi</option>
                                <option value="Eduardo">Eduardo</option>
                                <option value="Jefferson">Jefferson</option>
                                <option value="Jonny">Jonny</option>
                                <option value="João">João</option>
                                <option value="Leo">Leo</option>
                                <option value="Marcos">Marcos</option>
                                <option value="Osvaldo">Osvaldo</option>
                                <option value="Pedro">Pedro</option>
                                <option value="Rodrigo">Rodrigo</option>
                                <option value="Robson">Robson</option>
                                <option value="Ronaldo">Ronaldo</option>
                                <option value="Rudi">Rudi</option>
                                <option value="Vitor">Vitor</option>
                            </select>
                        </div>

                        <div class="modal-footer" style="display:flex; justify-content: space-between; margin-top:15px;">
                            <button class="btn-action" style="background:#7f8c8d" onclick="document.getElementById('modal-licao').style.display='none'">Cancelar</button>
                            <button class="btn-action" style="background:#27ae60" onclick="window.salvarModal()">Salvar Registro</button>
                        </div>
                    </div>
                </div>

                <div class="selector-box">
                    <label><b>Selecione o Aluno:</b></label>
                    <select id="aluno-select" style="width:100%; padding:10px; margin-top:5px;" onchange="window.initTabelaAluno(this.value)">
                        <option value="">-- Carregando Alunos... --</option>
                    </select>
                </div>

                <div id="ficha-aluno" style="display:none;">
                    <div style="display: flex; justify-content: space-between; font-weight: bold; margin: 10px 0; padding: 10px; border: 2px solid #000; background: #fff;">
                        <span id="nome-aluno-header">ALUNO: ---</span>
                        <span id="instr-aluno-header">INSTRUMENTO: ---</span>
                    </div>

                    <input type="text" id="input-busca" class="search-box" placeholder="🔍 Buscar por data, lição ou instrutor..." onkeyup="window.filtrarTabela()">
                    <button type="button" class="btn-save-licao" onclick="window.abrirPromptGravar()">💾 Gravar Nova Lição</button>

                    <table class="student-table" id="tabela-registro">
                        <thead>
                            <tr>
                                <th>DATA</th><th>BONA</th><th>MSA</th><th>MÉTODO</th><th>HINO</th><th>INSTRUTOR</th><th class="no-print">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody id="body-licoes"></tbody>
                    </table>
                </div>
            </div>

            <script>
                window.formatarSaidaLicao = (cat) => {
                    const l = document.getElementById('m-'+cat+'-l').value;
                    const p = document.getElementById('m-'+cat+'-p').value;
                    const le = document.getElementById('m-'+cat+'-le').value;
                    const pe = document.getElementById('m-'+cat+'-pe').value;
                    let html = "";
                    if(l) html += \`<span class="status-aprovado">✅ Aprovado: L.\${l} P.\${p}</span>\`;
                    if(le) html += \`<span class="status-estudar">📖 Estudar: L.\${le} P.\${pe}</span>\`;
    return html || "-";
                };

                window.editarLicao = function(key) {
                    firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).once('value', (snap) => {
                        const l = snap.val();
                        document.getElementById('modal-key').value = key;
                        document.getElementById('modal-titulo').innerText = "Editar Registro";
                        document.getElementById('m-data').value = l.data;
                        document.getElementById('m-instrutor').value = l.instrutor;

                        const categorias = ['bona', 'msa', 'metodo', 'hino'];
                        categorias.forEach(cat => {
                            const raw = l[cat] || "";
                            // Regex para extrair L. e P. de aprovados e estudar
                            const matchAp = raw.match(/status-aprovado">.*?L\\.(.*?) P\\.(.*?)<\\/span>/);
                            const matchEs = raw.match(/status-estudar">.*?L\\.(.*?) P\\.(.*?)<\\/span>/);
                            
                            document.getElementById('m-'+cat+'-l').value = matchAp ? matchAp[1] : "";
                            document.getElementById('m-'+cat+'-p').value = matchAp ? matchAp[2] : "";
                            document.getElementById('m-'+cat+'-le').value = matchEs ? matchEs[1] : "";
                            document.getElementById('m-'+cat+'-pe').value = matchEs ? matchEs[2] : "";
                        });
                        document.getElementById('modal-licao').style.display = 'block';
                    });
                };

                window.salvarModal = function() {
                    const key = document.getElementById('modal-key').value;
                    const licao = {
                        data: document.getElementById('m-data').value,
                        bona: window.formatarSaidaLicao('bona'),
                        msa: window.formatarSaidaLicao('msa'),
                        metodo: window.formatarSaidaLicao('metodo'),
                        hino: window.formatarSaidaLicao('hino'),
                        instrutor: document.getElementById('m-instrutor').value
                    };
                    const ref = firebase.database().ref('licoes_alunos/' + window.currentID);
                    if(key) ref.child(key).update(licao); else ref.push(licao);
                    document.getElementById('modal-licao').style.display = 'none';
                };

                window.loadLicoes = function(id) {
                    firebase.database().ref('licoes_alunos/' + id).on('value', (snap) => {
                        const tbody = document.getElementById('body-licoes');
                        tbody.innerHTML = "";
                        snap.forEach(child => {
                            const l = child.val();
                            tbody.innerHTML += \`<tr>
                                <td>\${l.data}</td><td>\${l.bona}</td><td>\${l.msa}</td><td>\${l.metodo}</td><td>\${l.hino}</td><td>\${l.instrutor}</td>
                                <td class="no-print">
                                    <button class="btn-edit" onclick="window.editarLicao('\${child.key}')">✏️</button>
                                    <button class="btn-edit" onclick="window.excluirLicao('\${child.key}')">🗑️</button>
                                </td>
                            </tr>\`;
                        });
                    });
                };

                window.abrirPromptGravar = function() {
                    document.getElementById('modal-key').value = "";
                    document.getElementById('modal-titulo').innerText = "Gravar Nova Lição";
                    ['bona', 'msa', 'metodo', 'hino'].forEach(cat => {
                        document.getElementById('m-'+cat+'-l').value = ""; document.getElementById('m-'+cat+'-p').value = "";
                        document.getElementById('m-'+cat+'-le').value = ""; document.getElementById('m-'+cat+'-pe').value = "";
                    });
                    document.getElementById('m-instrutor').value = "";
                    document.getElementById('m-data').value = new Date().toLocaleDateString('pt-BR').substring(0,5);
                    document.getElementById('modal-licao').style.display = 'block';
                };

                window.sincronizarListaAlunos = function() {
                    firebase.database().ref('lista_alunos').on('value', (snap) => {
                        const sel = document.getElementById('aluno-select');
                        if(!sel) return;
                        const current = sel.value;
                        sel.innerHTML = '<option value="">-- Escolha um Aluno --</option>';
                        snap.forEach(child => {
                            const s = child.key === current ? 'selected' : '';
                            sel.innerHTML += \`<option value="\${child.key}" data-instr="\${child.val().instrumento}" \${s}>\${child.val().nome}</option>\`;
                        });
                    });
                };

                window.initTabelaAluno = function(id) {
                    window.currentID = id;
                    document.getElementById('ficha-aluno').style.display = id ? 'block' : 'none';
                    if(!id) return;
                    const sel = document.getElementById('aluno-select');
                    document.getElementById('nome-aluno-header').innerText = "ALUNO: " + sel.options[sel.selectedIndex].text;
                    document.getElementById('instr-aluno-header').innerText = "INSTRUMENTO: " + sel.options[sel.selectedIndex].getAttribute('data-instr');
                    window.loadLicoes(id);
                };

                window.promptNovoAluno = function() {
                    const nome = prompt("Nome do Aluno:");
                    const inst = prompt("Instrumento:");
                    if(nome && inst) firebase.database().ref('lista_alunos').push({ nome, instrumento: inst });
                };

                window.excluirLicao = function(key) {
                    if(confirm("Excluir registro?")) firebase.database().ref('licoes_alunos/' + window.currentID + '/' + key).remove();
                };

                window.filtrarTabela = function() {
                    const filter = document.getElementById('input-busca').value.toUpperCase();
                    const trs = document.getElementById('body-licoes').getElementsByTagName('tr');
                    for (let tr of trs) {
                        tr.style.display = tr.innerText.toUpperCase().includes(filter) ? "" : "none";
                    }
                };

                window.sincronizarListaAlunos();
            </script>
        `,
        pagina: "Extra"
    }
});
