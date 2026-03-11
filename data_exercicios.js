// --- FIX IS HERE: MODAL-BASED SHEET MUSIC ---
Object.assign(BIBLIOTECA_LIVRO, {
    "exercicio_partitura": {
        keywords: ["partitura", "prática", "leitura", "vexflow", "modal"],
        fase: "Extras", 
        titulo: "NOTAÇÃO MUSICAL - EXERCÍCIO", 
        icone: "🎼",
        resumo: "Visualização de notação musical avançada em janela flutuante (Modal).",
        html_content: `
          
    <script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
            margin: 0;
        }
        /* Modal Styles */
        .modal {
            display: none; 
            position: fixed;
            z-index: 1;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background-color: rgba(0,0,0,0.5);
        }
        .modal-content {
            background-color: white;
            margin: 5% auto;
            padding: 20px;
            border-radius: 8px;
            width: 850px;
            box-shadow: 0 5px 30px rgba(0,0,0,0.3);
            text-align: center;
        }
        #viewer {
            overflow-x: auto;
            margin-top: 20px;
        }
        button {
            padding: 12px 24px;
            font-size: 16px;
            cursor: pointer;
            background: #333;
            color: white;
            border: none;
            border-radius: 4px;
        }
        .close-btn {
            float: right;
            font-size: 24px;
            cursor: pointer;
            color: #888;
        }
    </style>


    <button id="openBtn">Open Sheet Music</button>

    <div id="musicModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" id="closeBtn">&times;</span>
            <h2>Musical Notation Viewer</h2>
            <div id="viewer"></div>
        </div>
    </div>

    <script>
        const { Renderer, Stave, StaveNote, Formatter, Accidental } = Vex.Flow;
        const modal = document.getElementById("musicModal");
        const openBtn = document.getElementById("openBtn");
        const closeBtn = document.getElementById("closeBtn");
        const viewerDiv = document.getElementById("viewer");

        let rendered = false;

        function drawSheet() {
            if (rendered) return; // Don't redraw if already exists
            
            const renderer = new Renderer(viewerDiv, Renderer.Backends.SVG);
            renderer.resize(800, 400);
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
                new StaveNote({ keys: ["f/5"], duration: "4h", stem_direction: -1 }),
                new StaveNote({ keys: ["d/5"], duration: "8", stem_direction: -1 }),
                new StaveNote({ keys: ["c/5"], duration: "4", stem_direction: -1 }),
                new StaveNote({ keys: ["bb/4"], duration: "4", stem_direction: -1 })
            ];
            Formatter.FormatAndDraw(context, stave4, notes4);
            
            rendered = true;
        }

        openBtn.onclick = () => {
            modal.style.display = "block";
            drawSheet();
        };

        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (event) => {
            if (event.target == modal) modal.style.display = "none";
        };
    </script>

        `,
        pagina: "Extra"
    }
});
