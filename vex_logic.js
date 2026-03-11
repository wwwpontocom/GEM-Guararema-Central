// --- vex_logic.js ---

/**
 * Global function to render the sheet music responsively
 */
function renderizarPartituraBiblioteca() {
    const viewerDiv = document.getElementById("viewer-exercicio");
    if (!viewerDiv) return;

    // 1. Limpa o conteúdo anterior para evitar sobreposição
    viewerDiv.innerHTML = "";

    // 2. Calcula a largura dinâmica (Container - padding)
    const containerWidth = viewerDiv.clientWidth - 20;
    const finalWidth = containerWidth > 300 ? containerWidth : 350;

    try {
        const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
        const renderer = new Renderer(viewerDiv, Renderer.Backends.SVG);
        
        // Redimensiona baseado no container atual
        renderer.resize(finalWidth, 450);
        const context = renderer.getContext();

        function acc(note, type) {
            return note.addModifier(new Accidental(type));
        }

        // 3. Distribuição proporcional dos compassos (40% e 55%)
        const w1 = finalWidth * 0.40;
        const w2 = finalWidth * 0.55;

        // --- LINHA 1 ---
        const stave1 = new Stave(10, 40, w1);
        stave1.addClef("treble").addTimeSignature("4/4").addKeySignature("Bb");
        stave1.setContext(context).draw();

        const notes1 = [
            new StaveNote({ keys: ["f/4"], duration: "8" }),
            new StaveNote({ keys: ["g/4"], duration: "8" }),
            new StaveNote({ keys: ["bb/4"], duration: "4" }),
            new StaveNote({ keys: ["c/5"], duration: "4" })
        ];

        const stave2 = new Stave(stave1.width + stave1.x, 40, w2);
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

        // --- LINHA 2 (Largura total disponível) ---
        const stave3 = new Stave(10, 200, finalWidth - 20);
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

/**
 * Evento de redimensionamento automático
 * O 'debounce' evita que a função rode milhares de vezes por segundo
 */
let resizeTimer;
window.onresize = function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Só renderiza se o elemento existir na tela atual
        if (document.getElementById("viewer-exercicio")) {
            renderizarPartituraBiblioteca();
        }
    }, 200); // Aguarda 200ms após o usuário parar de arrastar a janela
};

// --- Adicione ao final do vex_logic.js ---

/**
 * Converte o SVG do VexFlow em uma imagem PNG para download
 */
function exportarPartituraPNG() {
    const svgElement = document.querySelector("#viewer-exercicio svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // Define dimensões baseadas no SVG
    const svgSize = svgElement.getBoundingClientRect();
    canvas.width = svgSize.width * 2; // Dobro da resolução
    canvas.height = svgSize.height * 2;

    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = function() {
        ctx.fillStyle = "white"; // Fundo branco
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(2, 2); // Escala para manter nitidez
        ctx.drawImage(img, 0, 0);
        
        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "partitura_exercicio.png";
        downloadLink.click();
        URL.revokeObjectURL(url);
    };

    img.src = url;
}
