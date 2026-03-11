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
                    /* Hide the controls so only the sheet music shows */
                    #music-app-wrapper .controls { display: none; }
                    #music-app-wrapper .sheet-container { background: white; padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; }
                    .render-title { font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center; font-family: sans-serif; }
                </style>
                
                <div class="controls">
                    <input type="text" id="musicTitleInput" value="Exercício de Fixação">
                    <select id="clef"><option value="treble">treble</option></select>
                    <select id="keySig"><option value="C">C</option></select>
                    <input type="text" id="timeSig" value="4/4">
                    <textarea id="notation">1 C4 h, 1 E4 q, 1 G4 q, 4 C4 16, 4 E4 16, 4 G4 16, 4 C5 16, 3 G4 8</textarea>
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
                            
                            const titleVal = document.getElementById('musicTitleInput').value;
                            if(titleVal) {
                                const t = document.createElement('div');
                                t.className = 'render-title';
                                t.innerText = titleVal;
                                container.appendChild(t);
                            }

                            const renderer = new VF.Renderer(container, VF.Renderer.Backends.SVG);
                            renderer.resize(A4_WIDTH, 250);
                            const context = renderer.getContext();
                            const notationText = document.getElementById('notation').value;
                            const clef = document.getElementById('clef').value;

                            const stave = new VF.Stave(10, 40, A4_WIDTH - 20);
                            stave.addClef(clef).addTimeSignature(document.getElementById('timeSig').value);
                            stave.setContext(context).draw();

                            const notes = [];
                            const sections = notationText.split(',').filter(s => s.trim() !== "");
                            sections.forEach(item => {
                                const match = item.trim().match(/(\\d+)\\s+([A-Ga-g#b]+\\d+)\\s+([whq816]+)/);
                                if (match) {
                                    const count = parseInt(match[1]);
                                    const keys = [match[2].replace(/([A-G][#b]?)/i, '$1/')];
                                    for (let i = 0; i < count; i++) {
                                        notes.push(new VF.StaveNote({ keys: keys, duration: match[3] }));
                                    }
                                }
                            });

                            if (notes.length > 0) {
                                const voice = new VF.Voice({ num_beats: 4, beat_value: 4 }).setStrict(false);
                                voice.addTickables(notes);
                                new VF.Formatter().joinVoices([voice]).formatToStave([voice], stave);
                                voice.draw(context, stave);
                            }
                        }

                        // Run after VexFlow loads
                        if (typeof Vex !== 'undefined') { render(); } 
                        else { setTimeout(render, 800); }
                    })();
                </script>
            </div>
        `,
        pagina: "Extra"
    }
});
