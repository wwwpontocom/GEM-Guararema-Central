// --- FIX IS HERE: MODAL-BASED SHEET MUSIC ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "modal"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical avançada em janela flutuante (Modal).",
        html_content: `
            <div id="modal-exercise-root" style="text-align: center; padding: 40px;">
                <style>
                    .vex-modal {
                        display: none; position: fixed; z-index: 9999;
                        left: 0; top: 0; width: 100%; height: 100%;
                        background-color: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
                    }
                    .vex-modal-content {
                        background-color: white; margin: 5% auto; padding: 25px;
                        border-radius: 12px; width: 850px; position: relative;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.4); text-align: center;
                    }
                    .vex-close {
                        position: absolute; right: 20px; top: 15px;
                        font-size: 28px; font-weight: bold; color: #888; cursor: pointer;
                    }
                    .vex-open-btn {
                        padding: 15px 30px; font-size: 18px; cursor: pointer;
                        background: #2c3e50; color: white; border: none;
                        border-radius: 6px; transition: background 0.3s;
                    }
                    .vex-open-btn:hover { background: #34495e; }
                    #vex-viewer { overflow-x: auto; margin-top: 15px; background: #fff; }
                </style>

                <button class="vex-open-btn" id="btnAbrirVex">Abrir Partitura Interativa</button>

                <div id="musicModal" class="vex-modal">
                    <div class="vex-modal-content">
                        <span class="vex-close" id="btnFecharVex">&times;</span>
                        <h2 style="color:#333; margin-bottom:10px;">Visualizador de Notação</h2>
                        <div id="vex-viewer"></div>
                    </div>
                </div>

                <img src="x" onerror="
                    (function() {
                        const modal = document.getElementById('musicModal');
                        const openBtn = document.getElementById('btnAbrirVex');
                        const closeBtn = document.getElementById('btnFecharVex');
                        const viewer = document.getElementById('vex-viewer');
                        let rendered = false;

                        function draw() {
                            if (rendered || typeof Vex === 'undefined') return;
                            
                            const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
                            const renderer = new Renderer(viewer, Renderer.Backends.SVG);
                            renderer.resize(800, 450);
                            const context = renderer.getContext();

                            const stave1 = new Stave(10, 40, 300);
                            stave1.addClef('treble').addTimeSignature('4/4').addKeySignature('Bb');
                            stave1.setContext(context).draw();

                            const notes1 = [
                                new StaveNote({ keys: ['f/4'], duration: '8' }),
                                new StaveNote({ keys: ['g/4'], duration: '8' }),
                                new StaveNote({ keys: ['bb/4'], duration: '4' }),
                                new StaveNote({ keys: ['c/5'], duration: '4' })
                            ];

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

                            const stave3 = new Stave(10, 200, 300);
                            stave3.addClef('treble').addKeySignature('Bb');
                            stave3.setContext(context).draw();
                            const notes3 = [
                                new StaveNote({ keys: ['f/5'], duration: '4' }),
                                new StaveNote({ keys: ['d/5'], duration: '8' }),
                                new StaveNote({ keys: ['c/5'], duration: '4' }),
                                new StaveNote({ keys: ['bb/4'], duration: '4' })
                            ];

                            Formatter.FormatAndDraw(context, stave1, notes1);
                            Formatter.FormatAndDraw(context, stave2, notes2);
                            Formatter.FormatAndDraw(context, stave3, notes3);
                            rendered = true;
                        }

                        openBtn.onclick = () => { modal.style.display = 'block'; draw(); };
                        closeBtn.onclick = () => { modal.style.display = 'none'; };
                        window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };
                    })();
                " style="display:none;">
            </div>
        `,
        pagina: "Extra"
    }
});
