// --- INSERT INTO data_exercicios.js ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "canvas"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical utilizando o backend Canvas do VexFlow.",
        html_content: `
            <div id="music-container-root" style="font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; background-color: #f4f4f9; padding: 20px;">
                <style>
                    #music-container-root canvas {
                        background: white;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        border-radius: 8px;
                        margin-top: 10px;
                    }
                    #music-container-root h2 { color: #333; margin-bottom: 10px; }
                </style>

                <h2>Musical Notation ViewerA</h2>
                <canvas id="viewer-canvas"></canvas>

                <script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>
                
                <script>
                    (function() {
                        function startVexFlow() {
                            const canvas = document.getElementById("viewer-canvas");
                            
                            if (typeof Vex === 'undefined' || !canvas) {
                                setTimeout(startVexFlow, 200);
                                return;
                            }

                            try {
                                const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
                                
                                // Initialize Renderer with CANVAS backend
                                const renderer = new Renderer(canvas, Renderer.Backends.CANVAS);
                                renderer.resize(800, 500);
                                const context = renderer.getContext();
                                context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

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
                                const stave4 = new Stave(10, 220, 300);
                                stave4.addClef("treble").addKeySignature("Bb");
                                stave4.setContext(context).draw();

                                const notes4 = [
                                    new StaveNote({ keys: ["f/5"], duration: "4", stem_direction: -1 }),
                                    new StaveNote({ keys: ["d/5"], duration: "8", stem_direction: -1 }),
                                    new StaveNote({ keys: ["c/5"], duration: "4", stem_direction: -1 }),
                                    new StaveNote({ keys: ["bb/4"], duration: "4", stem_direction: -1 })
                                ];
                                Formatter.FormatAndDraw(context, stave4, notes4);
                                
                                console.log("Canvas VexFlow Rendered Successfully");
                            } catch (err) {
                                console.error("VexFlow Canvas Error:", err);
                            }
                        }

                        startVexFlow();
                    })();
                </script>
            </div>
        `,
        pagina: "Extra"
    }
});
