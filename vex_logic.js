// --- vex_logic.js ---

/**
 * Global function to render the sheet music into a specific div
 */
function renderizarPartituraBiblioteca() {
    const viewerDiv = document.getElementById("viewer-exercicio");
    if (!viewerDiv) {
        console.error("Container 'viewer-exercicio' não encontrado.");
        return;
    }

    // Limpa o conteúdo anterior para evitar duplicatas
    viewerDiv.innerHTML = "";

    try {
        const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
        const renderer = new Renderer(viewerDiv, Renderer.Backends.SVG);
        renderer.resize(800, 450);
        const context = renderer.getContext();

        function acc(note, type) {
            return note.addModifier(new Accidental(type));
        }

        // --- LINHA 1 ---
        const stave1 = new Stave(10, 40, 300);
        stave1.addClef("treble").addTimeSignature("4/4").addKeySignature("Bb");
        stave1.setContext(context).draw();

        const notes1 = [
            new StaveNote({ keys: ["f/4"], duration: "8" }),
            new StaveNote({ keys: ["g/4"], duration: "8" }),
            new StaveNote({ keys: ["bb/4"], duration: "4" }),
            new StaveNote({ keys: ["c/5"], duration: "4" })
        ];

        const stave2 = new Stave(310, 40, 400);
        stave2.setContext(context).draw();
        const notes2 = [
            new StaveNote({ keys: ["d/5"], duration: "8" }),
            new StaveNote({ keys: ["c/5"], duration: "8" }),
            acc(new StaveNote({ keys: ["b/4"], duration: "8" }), "n"),
            new StaveNote({ keys: ["c/5"], duration: "8" }),
            new StaveNote({ keys: ["d/5"], duration: "8" }),
            new StaveNote({ keys: ["f/5"], duration: "8" }),
            new StaveNote({ keys: ["e/5"], duration: "4" })
        ];

        Formatter.FormatAndDraw(context, stave1, notes1);
        Formatter.FormatAndDraw(context, stave2, notes2);

        // --- LINHA 2 ---
        const stave3 = new Stave(10, 200, 350);
        stave3.addClef("treble").addKeySignature("Bb");
        stave3.setContext(context).draw();

        const notes3 = [
            new StaveNote({ keys: ["f/5"], duration: "4" }),
            new StaveNote({ keys: ["d/5"], duration: "8" }),
            new StaveNote({ keys: ["c/5"], duration: "4" }),
            new StaveNote({ keys: ["bb/4"], duration: "4" })
        ];
        Formatter.FormatAndDraw(context, stave3, notes3);

    } catch (e) {
        console.error("Erro no VexFlow:", e);
    }
}
