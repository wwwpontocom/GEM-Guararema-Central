// --- data_exercicios.js ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "canvas"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical responsiva utilizando VexFlow.",
        html_content: `
            <div style="display: flex; flex-direction: column; align-items: center; padding: 10px; width: 100%;">
                <h2 style="color: #333; font-size: 1.5rem; text-align: center;">Musical Notation Viewer</h2>
                
                <div id="viewer-exercicio" style="background: white; padding: 5px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 100%; max-width: 900px; overflow: hidden;">
                    </div>

                <img src="x" onerror="if(window.renderizarPartituraBiblioteca) renderizarPartituraBiblioteca();" style="display:none;">
            </div>
        `,
        pagina: "Extra"
    }
});
