// --- FIX IS HERE: INJECTION-SAFE VEXFLOW ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "canvas"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical utilizando o backend Canvas do VexFlow.",
        html_content: `
            <div id="music-wrapper" style="text-align:center; padding:20px; background:#f4f4f9;">
                <h2 style="font-family:sans-serif;">Musical Notation Viewer</h2>
                
                <canvas id="vexflow-canvas-direct" style="background:white; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);"></canvas>

                <img src="x" onerror="
                    (function() {
                        const runVex = () => {
                            if (typeof Vex === 'undefined') {
                                setTimeout(runVex, 100);
                                return;
                            }
                            const canvas = document.getElementById('vexflow-canvas-direct');
                            if (!canvas) return;

                            const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
                            const renderer = new Renderer(canvas, Renderer.Backends.CANVAS);
                            renderer.resize(800, 500);
                            const context = renderer.getContext();
                            context.setFont('Arial', 10, '');

                            // Draw Stave 1
                            const stave1 = new Stave(10, 40, 300);
                            stave1.addClef('treble').addTimeSignature('4/4').addKeySignature('Bb');
                            stave1.setContext(context).draw();

                            const notes1 = [
                                new StaveNote({ keys: ['f/4'], duration: '8' }),
                                new StaveNote({ keys: ['g/4'], duration: '8' }),
                                new StaveNote({ keys: ['bb/4'], duration: '4' }),
                                new StaveNote({ keys: ['c/5'], duration: '4' })
                            ];
                            Formatter.FormatAndDraw(context, stave1, notes1);

                            // Draw Stave 2
                            const stave2 = new Stave(310, 40, 400);
                            stave2.setContext(context).draw();
                            const notes2 = [
                                new StaveNote({ keys: ['d/5'], duration: '8' }),
                                new StaveNote({ keys: ['c/5'], duration: '8' }),
                                new StaveNote({ keys: ['b/4'], duration: '8' }).addModifier(new Accidental('n')),
                                new StaveNote({ keys: ['c/5'], duration: '8' }),
                                new StaveNote({ keys: ['d/5'], duration: '8' }),
                                new StaveNote({ keys: ['f/5'], duration: '8' }),
                                new StaveNote({ keys: ['e/5'], duration: '4' })
                            ];
                            Formatter.FormatAndDraw(context, stave2, notes2);
                        };
                        runVex();
                    })();
                " style="display:none;">
            </div>
        `,
        pagina: "Extra"
    }
});
