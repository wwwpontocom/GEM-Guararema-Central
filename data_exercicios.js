// --- FIX IS HERE: UNIFIED SHEET MUSIC FUNCTION WITH METADATA ---

/**
 * Renderiza o Exercício de Partitura (Notação Musical)
 */
function exibirExercicioPartitura() {
    const renderArea = document.getElementById('render-area');
    if (!renderArea) return;

    const musicHTML = `
        <div class="fase-header">PRÁTICA MUSICAL: NOTAÇÃO AVANÇADA</div>
        
        <div id="music-viewer-container" style="display: flex; flex-direction: column; align-items: center; padding: 20px; background: #f4f4f9; border-radius: 12px; margin-top: 15px;">
            <h2 style="color: #333; font-family: sans-serif; margin-bottom: 20px;">Musical Notation Viewer</h2>
            <canvas id="vexflow-canvas" style="background: white; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-radius: 8px; max-width: 100%;"></canvas>
        </div>

        <div class="footer" style="margin-top: 20px;">
            <span>Biblioteca Interativa - VexFlow Renderer</span>
            <span>2026</span>
        </div>
    `;

    renderArea.innerHTML = musicHTML;
    renderizarVexFlow();
}

// Atribuição de Metadados para Acesso/Busca (AI Access)
exibirExercicioPartitura.metadata = {
    keywords: ["partitura", "prática", "leitura", "vexflow", "canvas"],
    titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO",
    description: "Visualização de notação musical avançada com VexFlow e Canvas."
};

/**
 * Lógica interna para desenhar a partitura no Canvas
 */
function renderizarVexFlow() {
    const canvas = document.getElementById("vexflow-canvas");
    if (typeof Vex === 'undefined' || !canvas) return;

    try {
        const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
        const renderer = new Renderer(canvas, Renderer.Backends.CANVAS);

        renderer.resize(800, 550);
        const context = renderer.getContext();
        context.setFont("Arial", 10, "");

        function acc(note, type) {
            return note.addModifier(new Accidental(type));
        }

        // --- LINHA 1: Compassos 1-2 ---
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

        // --- LINHA 2: Compasso 4 ---
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

    } catch (err) {
        console.error("Erro ao renderizar partitura:", err);
    }
}

// --- FIM DO FIX ---
