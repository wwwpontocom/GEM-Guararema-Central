// --- INSERT INTO data_exercicios.js ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical avançada com VexFlow.",
        html_content: `
            <div id="music-container-root" style="font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; background-color: #f4f4f9; padding: 20px;">
                <style>
                    #music-container-root #viewer {
                        background: white;
                        padding: 40px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        border-radius: 8px;
                        overflow-x: auto;
                        min-width: 820px;
                        min-height: 620px;
                    }
                    #music-container-root h2 { color: #333; margin-bottom: 20px; }
                </style>

                <h2>Musical Notation ViewerB</h2>
                <div id="viewer"></div>

                <script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>
                
                <script>
                    (function() {
                        function startVexFlow() {
                            const div = document.getElementById("viewer");
                            
                            // Check if Vex is loaded AND the div exists in the DOM
                            if (typeof Vex === 'undefined' || !div) {
                                setTimeout(startVexFlow, 200);
                                return;
                            }

                            try {
                                const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
                                div.innerHTML = ""; // Clear for re-renders

                                const renderer = new Renderer(div, Renderer.Backends.SVG);
                                renderer.resize(800, 600);
                                const context = renderer.getContext();

                                function acc(note, type) {
                                    return note.addModifier(new Accidental(type));
                                }

                                // --- LINE 1: Measures 1-2 ---
                                const stave1 = new Stave(10, 40, 300);
                                stave1.addClef("treble").addTimeSignature("4/4").addKeySignature("Bb");
                                stave1.setContext(context).draw();

                                const notes1 = [
                                    new StaveNote({ keys: ["f/4"], duration: "8", stem_direction: 1 }),
                                    new StaveNote({ keys: ["g/4"], duration: "8", stem_direction: 1 }),
                                    new StaveNote({ keys: ["bb/4"], duration: "4", stem_direction: -1 }),
                                    new StaveNote({ keys: ["c/5"], duration: "4", stem_direction: -1 })
                                ];

                                const stave2 = new Stave(stave1.width + stave1.x, 40, 400);
                                stave2.setContext(context).draw();
                                const notes2 = [
                                    new StaveNote({ keys: ["d/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["c/5"], duration: "8", stem_direction: -1 }),
                                    acc(new StaveNote({ keys: ["b/4"], duration: "8", stem_direction: -1 }), "n"),
                                    new StaveNote({ keys: ["c/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["d/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["f/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["e/5"], duration: "4", stem_direction: -1 })
                                ];

                                Formatter.FormatAndDraw(context, stave1, notes1);
                                Formatter.FormatAndDraw(context, stave2, notes2);

                                // --- LINE 2: Measure 4 ---
                                const stave4 = new Stave(10, 200, 300);
                                stave4.addClef("treble").addKeySignature("Bb");
                                stave4.setContext(context).draw();

                                const notes4 = [
                                    new StaveNote({ keys: ["f/5"], duration: "4", stem_direction: -1 }),
                                    new StaveNote({ keys: ["d/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["c/5"], duration: "4", stem_direction: -1 }),
                                    new StaveNote({ keys: ["bb/4"], duration: "4", stem_direction: -1 })
                                ];
                                Formatter.FormatAndDraw(context, stave4, notes4);
                                
                                console.log("VexFlow Rendered Successfully");
                            } catch (err) {
                                console.error("VexFlow Error:", err);
                            }
                        }

                        // Start polling for readiness
                        startVexFlow();
                    })();
                </script>
            </div>
        `,
        pagina: "Extra"
    }
});
