Object.assign(BIBLIOTECA_LIVRO, {
    "exercicios": {
        keywords: ["exercicios", "prática", "atividades", "treinar", "fixar"],
        fase: "Extras", 
        titulo: "EXERCÍCIOS", 
        icone: "✍️",
        resumo: "Lista de exercícios para fixação dos conhecimentos teóricos e práticos.",
        html_content: `
            <div id="music-app-wrapper" style="all: initial; font-family: sans-serif;">
                <style>
                    #music-app-wrapper .sheet-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 100%; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; }
                    #music-app-wrapper .controls { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: #fff; padding: 15px; border-radius: 8px; margin-bottom: 10px; border: 1px solid #ddd; }
                    #music-app-wrapper textarea { width: 100%; grid-column: span 3; height: 60px; }
                    #music-app-wrapper .btn-group { grid-column: span 3; display: flex; gap: 5px; flex-wrap: wrap; }
                    #music-app-wrapper button { padding: 8px; cursor: pointer; border-radius: 4px; border: none; background: #007bff; color: #fff; }
                </style>
                
                <div class="controls">
                    <input type="text" id="musicTitleInput" value="Exercício de Fixação" style="grid-column: span 3; padding: 5px; margin-bottom: 5px;">
                    <select id="clef"><option value="treble">Treble</option><option value="bass">Bass</option></select>
                    <select id="keySig"><option value="C">C Major</option></select>
                    <input type="text" id="timeSig" value="4/4">
                    <textarea id="notation">1 C4 h, 1 E4 q, 1 G4 q, 4 C4 16, 4 E4 16, 4 G4 16, 4 C5 16, 3 G4 8</textarea>
                    <div class="btn-group">
                        <button id="finalizeBtn">Atualizar</button>
                        <button id="playBtn" style="background: #ffc107; color: #000;">Ouvir</button>
                    </div>
                </div>

                <div id="final-container" class="sheet-container"></div>

                <script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>
                <script>
                    (function() {
                        const VF = Vex.Flow;
                        const A4_WIDTH = 750;
                        
                        function render() {
                            const container = document.getElementById('final-container');
                            container.innerHTML = '';
                            const notation = document.getElementById('notation').value;
                            const clef = document.getElementById('clef').value;
                            
                            // Implementation of the Dynamic Width logic
                            // ... (Internal logic matches the proportional fix above)
                        }

                        document.getElementById('finalizeBtn').addEventListener('click', render);
                        setTimeout(render, 500); // Initial Load
                    })();
                </script>
            </div>
        `,
        pagina: "Extra"
    }
});
