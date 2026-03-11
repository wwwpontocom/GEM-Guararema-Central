// --- data_exercicios.js ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "canvas"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical utilizando VexFlow e lógica externa.",
        html_content: `
            <div style="display: flex; flex-direction: column; align-items: center; padding: 20px;">
                <h2 style="color: #333;">Musical Notation Viewer</h2>
                <div id="viewer-exercicio" style="background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>

                <img src="x" onerror="if(window.renderizarPartituraBiblioteca) renderizarPartituraBiblioteca();" style="display:none;">
            </div>
        `,
        pagina: "Extra"
    }
});
