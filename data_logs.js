Object.assign(BIBLIOTECA_LIVRO, {
    "historico_teoria": {
        keywords: ["historico de teoria", "teoria", "controle de teoria", "controle de turmas", "grupos"],
        fase: "Extras",
        titulo: "CONTROLE DE TEORIA",
        icone: "📅",
        resumo: "Registro detalhado com todos os grupos.",
        html_content: `
            <div class="theory-control-container">
                <p>Histórico completo das aulas de teoria.</p>
                <div style="display: flex; flex-direction: column; gap: 30px; margin-top: 20px;">
                    <section><h3 style="color:#4a90e2; border-bottom:1px solid #ddd;">GRUPO A</h3>${BIBLIOTECA_LIVRO["grupo_a"] ? BIBLIOTECA_LIVRO["grupo_a"].html_content : ''}</section>
                    <section><h3 style="color:#4a90e2; border-bottom:1px solid #ddd;">GRUPO B</h3>${BIBLIOTECA_LIVRO["grupo_b"] ? BIBLIOTECA_LIVRO["grupo_b"].html_content : ''}</section>
                    <section><h3 style="color:#4a90e2; border-bottom:1px solid #ddd;">GRUPO C</h3>${BIBLIOTECA_LIVRO["grupo_c"] ? BIBLIOTECA_LIVRO["grupo_c"].html_content : ''}</section>
                </div>
            </div>
            <script>if (typeof carregarLogs === "function") carregarLogs();</script>
        `
    },

    "grupo_a": {
        keywords: ["a", "grupo a", "onde estamos a"],
        fase: "Onde Estamos", 
        titulo: "HISTÓRICO GRUPO A", 
        icone: "📍",
        resumo: "Última parada das aulas para o Grupo A.",
        html_content: `
            <div id="log-grupo-a" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando...</div>
            <input type="text" id="input-log-a" placeholder="Onde pararam o Grupo A?" style="width: 70%; padding: 8px;">
            <button onclick="salvarLog('grupo_a')" style="padding: 8px 15px; background: #27ae60; color: white; border: none; border-radius: 3px; cursor: pointer;">Salvar</button>
            <script>if (typeof carregarLogs === "function") carregarLogs();</script>
        `,
        pagina: "LOG-A"
    },

    "grupo_b": {
        keywords: ["b", "grupo b", "onde estamos b"],
        fase: "Onde Estamos", 
        titulo: "HISTÓRICO GRUPO B", 
        icone: "📍",
        resumo: "Última parada das aulas para o Grupo B.",
        html_content: `
            <div id="log-grupo-b" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando...</div>
            <input type="text" id="input-log-b" placeholder="Onde pararam o Grupo B?" style="width: 70%; padding: 8px;">
            <button onclick="salvarLog('grupo_b')" style="padding: 8px 15px; background: #27ae60; color: white; border: none; border-radius: 3px; cursor: pointer;">Salvar</button>
            <script>if (typeof carregarLogs === "function") carregarLogs();</script>
        `,
        pagina: "LOG-B"
    },

    "grupo_c": {
        keywords: ["c", "grupo c", "onde estamos c"],
        fase: "Onde Estamos", 
        titulo: "HISTÓRICO GRUPO C", 
        icone: "📍",
        resumo: "Última parada das aulas para o Grupo C.",
        html_content: `
            <div id="log-grupo-c" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando...</div>
            <input type="text" id="input-log-c" placeholder="Onde pararam o Grupo C?" style="width: 70%; padding: 8px;">
            <button onclick="salvarLog('grupo_c')" style="padding: 8px 15px; background: #27ae60; color: white; border: none; border-radius: 3px; cursor: pointer;">Salvar</button>
            <script>if (typeof carregarLogs === "function") carregarLogs();</script>
        `,
        pagina: "LOG-C"
    }
});
