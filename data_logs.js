 Object.assign(BIBLIOTECA_LIVRO, { 
        "grupo_a": {
            keywords: ["a", "grupo a", "onde estamos a"],
            fase: "Onde Estamos", 
            titulo: "HISTÓRICO GRUPO A", 
            icone: "📍",
            resumo: "Última parada das aulas para o Grupo A.",
            html_content: `<div id="log-grupo-a" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando histórico...</div>
                           <input type="text" id="input-log-a" placeholder="Onde pararam o Grupo A?" style="width: 80%; padding: 5px;">
                           <button onclick="salvarLog('grupo_a')" style="padding: 5px; background: #27ae60; color: white; border: none; border-radius: 3px;">Salvar</button>`,
            pagina: "LOG-A"
        },
       "grupo_b": {
            keywords: ["b", "grupo b", "onde estamos b"],
            fase: "Onde Estamos", 
            titulo: "HISTÓRICO GRUPO B", 
            icone: "📍",
            resumo: "Última parada das aulas para o Grupo B.",
            html_content: `<div id="log-grupo-b" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando histórico...</div>
                           <input type="text" id="input-log-b" placeholder="Onde pararam o Grupo B?" style="width: 80%; padding: 5px;">
                           <button onclick="salvarLog('grupo_b')" style="padding: 5px; background: #27ae60; color: white; border: none; border-radius: 3px;">Salvar</button>`,
            pagina: "LOG-B"
        },
        "grupo_c": {
            keywords: ["c", "grupo c", "onde estamos c"],
            fase: "Onde Estamos", 
            titulo: "HISTÓRICO GRUPO C", 
            icone: "📍",
            resumo: "Última parada das aulas para o Grupo C.",
            html_content: `<div id="log-grupo-c" style="max-height: 200px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">Carregando histórico...</div>
                           <input type="text" id="input-log-c" placeholder="Onde pararam o Grupo C?" style="width: 80%; padding: 5px;">
                           <button onclick="salvarLog('grupo_c')" style="padding: 5px; background: #27ae60; color: white; border: none; border-radius: 3px;">Salvar</button>`,
            pagina: "LOG-C"
        }
    });
