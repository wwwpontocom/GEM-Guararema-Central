Object.assign(BIBLIOTECA_LIVRO, {
    "programa_minimo": {
        keywords: ["programa", "minimo", "metodos", "oficialização", "2023", "msa", "solfejo", "hinario"],
        fase: "GERAL",
        titulo: "PROGRAMA MÍNIMO PARA MÚSICOS - 2023",
        icone: "📋",
        resumo: "Tabela oficial completa 2023: Cordas, Sopros, Teoria (MSA), Solfejo e Hinário.",
        html_content: `
            <style>
                .prog-container { font-family: sans-serif; overflow-x: auto; padding-bottom: 30px; }
                .prog-index { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 15px; background: #f0f4f8; padding: 10px; border-radius: 8px; position: sticky; left: 0; }
                .index-btn { padding: 5px 10px; background: #4a90e2; color: white; border-radius: 4px; cursor: pointer; font-size: 11px; border: none; }
                .index-group-label { width: 100%; font-size: 10px; font-weight: bold; color: #666; margin: 5px 0 2px 5px; text-transform: uppercase; }
                .prog-table { width: 100%; border-collapse: collapse; font-size: 11px; background: white; min-width: 800px; }
                .prog-table th { background: #333; color: white; padding: 10px 5px; text-align: center; border: 1px solid #555; }
                .prog-table td { border: 1px solid #ccc; padding: 8px 5px; vertical-align: top; line-height: 1.3; }
                .prog-table tr:nth-child(even) { background: #fdfdfd; }
                .highlight-row { background-color: #fff3cd !important; outline: 2px solid #ffc107; }
                .instr-name { font-weight: bold; color: #b71c1c; text-transform: uppercase; width: 120px; background: #f1f1f1; }
                .section-header { background: #eee; font-weight: bold; text-align: center; font-size: 12px; }
                .obs-card { margin-top: 25px; padding: 18px; background: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
                .obs-card h4 { margin: 0 0 12px 0; color: #b71c1c; display: flex; align-items: center; gap: 8px; font-size: 15px; }
                .obs-list { margin: 0; padding: 0; list-style: none; }
                .obs-list li { padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #444; }
            </style>
            <div class="prog-container">
                <div class="prog-index">
                    <div class="index-group-label">Navegação Rápida</div>
                    <button class="index-btn" onclick="scrollToRow('row_violino')">Violino</button>
                    <button class="index-btn" onclick="scrollToRow('row_flauta')">Flauta</button>
                    <button class="index-btn" onclick="scrollToRow('row_clarinete')">Clarinete</button>
                    <button class="index-btn" onclick="scrollToRow('row_sax')">Sax</button>
                    <button class="index-btn" onclick="scrollToRow('row_trompete')">Trompete</button>
                    <button class="index-btn" onclick="scrollToRow('row_teoria')">Teoria/Hinário</button>
                </div>

                <table class="prog-table">
                    <thead>
                        <tr>
                            <th>INSTRUMENTO</th>
                            <th>REUNIÕES DE JOVENS E MENORES</th>
                            <th>CULTOS OFICIAIS</th>
                            <th>OFICIALIZAÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_violino"><td class="instr-name">Violino</td><td>N. LAOUREX Vol. 1 pág. 35 OU Schimoll pág. 46 (113) + H. SITT Vol. 1 lição 6</td><td>N. LAOUREX Vol. 1 compl. + Vol. 3 pág. 15 OU Schimoll pág. 67 (162) + H. SITT Vol. 1 lição 14</td><td>N. LAOUREX Vol. 1 compl. + Vol. 3 pág. 24 e 44-55 OU MÉTODO Schimoll completo</td></tr>
                        <tr id="row_viola"><td class="instr-name">Viola</td><td>BEGINNING STRINGS lição VI + BERTA VOLMER Vol. 1 pág. 31</td><td>BERTA VOLMER Vol. 1 pág. 52 + A TUNE A DAY Vol. 3 pág. 16</td><td>BERTA VOLMER Vol. 1 compl. + A TUNE A DAY Vol. 3 completo</td></tr>
                        <tr id="row_cello"><td class="instr-name">Violoncelo</td><td>BEGINNING STRINGS lição VI + DOTZAUER Vol. 1 lição 35</td><td>DOTZAUER Vol. 1 compl. + Vol. 2 pág. 03 (111)</td><td>DOTZAUER Vol. 1 compl. + Vol. 2 pág. 19 (154)</td></tr>
                        <tr id="row_flauta"><td class="instr-name">Flauta</td><td>Rubank Elementary compl. OU PARÈS lição 41 OU GALLI pág. 41</td><td>Rubank Intermediate pág. 29 OU PARÈS lição 52 OU GALLI completo</td><td>Rubank Intermediate compl. OU PARÈS lição 62 OU GALLI completo</td></tr>
                        <tr id="row_oboe"><td class="instr-name">Oboé</td><td>Rubank Elementary compl. OU GIAMPIERI pág. 21</td><td>Rubank Intermediate pág. 15 OU GIAMPIERI pág. 30</td><td>Rubank Intermediate pág. 35 OU GIAMPIERI pág. 50</td></tr>
                        <tr id="row_fagote"><td class="instr-name">Fagote</td><td>WEISSENBORN Módulo 12 OU GIAMPIERI pág. 14</td><td>WEISSENBORN pág. 15 OU GIAMPIERI pág. 18</td><td>WEISSENBORN pág. 20 OU GIAMPIERI pág. 22</td></tr>
                        <tr id="row_clarinete"><td class="instr-name">Clarinete (Sib)</td><td>GIAMPIERI pág. 28 OU DOMINGOS PECCI pág. 39 OU GALPER Book 1 pág. 25</td><td>GIAMPIERI pág. 41 OU DOMINGOS PECCI pág. 56</td><td>GIAMPIERI pág. 53 OU DOMINGOS PECCI completo OU GALPER Book 2 pág. 20</td></tr>
                        <tr id="row_sax"><td class="instr-name">Saxofones</td><td>GIAMPIERI pág. 21 OU AMADEU RUSSO pág. 25</td><td>GIAMPIERI pág. 38 OU AMADEU RUSSO pág. 40</td><td>GIAMPIERI pág. 50 OU AMADEU RUSSO pág. 55-60</td></tr>
                        <tr id="row_trompete"><td class="instr-name">Trompete / Cornet</td><td>RUBANK Elementary completo</td><td>R. W. GETCHEL Second Book lição 80 OU AMADEU RUSSO pág. 30</td><td>R. W. GETCHEL Second Book completo OU AMADEU RUSSO pág. 55-60</td></tr>
                        <tr id="row_trompa"><td class="instr-name">Trompa (Fá/Sib)</td><td>RUBANK Elementary completo + Método Prático lição 73</td><td>RUBANK Elementary/Intermediate compl. + Método Prático lição 105</td><td>RUBANK Elementary/Intermediate compl. + Método Prático lição 125</td></tr>
                        <tr id="row_trombone"><td class="instr-name">Trombone / Eufônio</td><td>RUBANK Elementary pág. 24 OU Método Prático pág. 13</td><td>RUBANK Elementary pág. 37 OU Método Prático pág. 25</td><td>RUBANK Elementary pág. 48 OU Método Prático completo</td></tr>
                        <tr id="row_tuba"><td class="instr-name">Tuba (Sib, Dó, Mib, Fá)</td><td>RUBANK Elementary pág. 24 OU Método Prático pág. 13</td><td>RUBANK Elementary pág. 37 OU Método Prático pág. 25</td><td>RUBANK Elementary pág. 48 OU Método Prático completo</td></tr>
                        <tr class="section-header"><td colspan="4">REQUISITOS TEÓRICOS E SOLFEJO</td></tr>
                        <tr id="row_teoria"><td class="instr-name">Teoria</td><td>MSA - 2023 - Até Fase 12</td><td>MSA - 2023 - Até Fase 15</td><td>MSA - 2023 - Completo com Revisão</td></tr>
                        <tr id="row_solfejo"><td class="instr-name">Solfejo</td><td>Hinos 431 a 480</td><td>Todos os Hinos</td><td>Todos os Hinos</td></tr>
                        <tr id="row_hinario"><td class="instr-name">Hinário</td><td>431 a 480 - Voz principal</td><td>Completo - Voz principal e Alternativa</td><td>Completo - Voz principal e Alternativa</td></tr>
                    </tbody>
                </table>

                <div class="obs-card">
                    <h4><span class="obs-icon">⚠️</span> REGRAS E OBSERVAÇÕES</h4>
                    <ul class="obs-list">
                        <li><strong>Substituições:</strong> Os métodos poderão ser substituídos por outros de grau mais elevado, aprovados pelo GEM.</li>
                        <li><strong>Execução de Vozes:</strong> Obrigatório executar a Voz Principal, Alternativa e o Soprano.</li>
                        <li><strong>Hino de Teste:</strong> Todos os candidatos devem estar aptos a executar o Hino 431.</li>
                        <li><strong>Padrão de Afinação:</strong> Padrão Lá 440Hz exigido.</li>
                    </ul>
                </div>
            </div>

            <script>
                function scrollToRow(rowId) {
                    const element = document.getElementById(rowId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        document.querySelectorAll('.prog-table tr').forEach(r => r.classList.remove('highlight-row'));
                        element.classList.add('highlight-row');
                        setTimeout(() => { element.classList.remove('highlight-row'); }, 3000);
                    }
                }
            </script>
        `,
        pagina: "Extra"
    }
});

// --- END OF FIX ---

