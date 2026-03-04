Object.assign(BIBLIOTECA_LIVRO, {
    // PÁGINA 1: Capa e Finalidade
    "moo_p1": {
        keywords: ["moo", "finalidade", "manual", "consultas"],
        fase: "MOO",
        titulo: "Página 1 - O QUE É O MOO?",
        icone: "📘",
        resumo: "Definição e objetivo do Manual de Orientação Orquestral.",
        html_content: `
            <h3>Manual de Orientação Orquestral</h3>
            <p><strong>Não é um Método:</strong> O MOO é apenas um "manual" para consultas.</p>
            <p><strong>Finalidade:</strong> Compreender, praticar e cumprir os ensinamentos técnicos à orquestra.</p>
            <div class="image-container"><img src="assets/moo/page1.jpg" alt="Capa MOO"></div>
            <p><em>* Os ensinamentos técnicos necessitam ser ensaiados.</em></p>
            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('vamos_aprender')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar ao Índice</button>
                <button onclick="mostrarConteudo('moo_p2')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
            </div>
        `,
        pagina: "1"
    },

    // PÁGINA 2: Alicerce e Histórico
    "moo_p2": {
        keywords: ["moo", "alicerce", "orientações", "musical"],
        fase: "MOO",
        titulo: "Página 2 - ALICERCE",
        icone: "🏛️",
        resumo: "As orientações musicais sob a guia de Deus.",
        html_content: `
            <h3>O Alicerce Musical</h3>
            <p>As orientações para a parte musical na Obra de Deus, sob a guia de Deus, se dão através dos ensinamentos dados ao Seu Ministério.</p>
            <div class="image-container"><img src="assets/moo/page2.jpg" alt="Página 2"></div>
            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('moo_p1')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                <button onclick="mostrarConteudo('moo_p3')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
            </div>
        `,
        pagina: "2"
    },

    // PÁGINA 3: Histórico Musical vs MOO
    "moo_p3": {
        keywords: ["histórico musical", "comportamento", "convenções"],
        fase: "MOO",
        titulo: "Página 3 - ONDE ENCONTRAR",
        icone: "🔍",
        resumo: "Diferença entre Histórico Musical e o MOO.",
        html_content: `
            <h3>Divisão dos Ensinamentos</h3>
            <p><strong>Histórico Musical:</strong> Orientações de comportamento, conselhos, normas e diretrizes.</p>
            <p><strong>MOO:</strong> Orientações técnicas, execução dos hinos e formação da orquestra.</p>
            <div class="image-container"><img src="assets/moo/page3.jpg" alt="Página 3"></div>
            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('moo_p2')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                <button onclick="mostrarConteudo('moo_p4')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
            </div>
        `,
        pagina: "3"
    },

    // PÁGINA 4: Resumo dos Ensinamentos
    "moo_p4": {
        keywords: ["resumo", "ensinamentos", "técnico"],
        fase: "MOO",
        titulo: "Página 4 - RESUMO",
        icone: "📝",
        resumo: "Resumo das diretrizes técnicas.",
        html_content: `
            <h3>Diretrizes Técnicas</h3>
            <p>O MOO compila as convenções técnicas aplicadas ao Hinário 5 (H5).</p>
            <div class="image-container"><img src="assets/moo/page4.jpg" alt="Página 4"></div>
            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('moo_p3')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                <button onclick="mostrarConteudo('moo_p5')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
            </div>
        `,
        pagina: "4"
    },

    // PÁGINA 5: Finalidade da Orquestra
    "moo_p5": {
        keywords: ["volume", "auxiliar", "irmandade", "intensidade"],
        fase: "MOO",
        titulo: "Página 5 - FINALIDADE",
        icone: "🔉",
        resumo: "A função primordial da orquestra nos cultos.",
        html_content: `
            <h3>Auxiliar a Irmandade</h3>
            <p>A finalidade da orquestra é auxiliar a irmandade a louvar a Deus. O volume não deve abafar a voz de quem canta.</p>
            <div class="image-container"><img src="assets/moo/page5.jpg" alt="Página 5"></div>
            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('moo_p4')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                <button onclick="mostrarConteudo('moo_p6')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
            </div>
        `,
        pagina: "5"
    },

    // PÁGINA 6: Distribuição das Vozes (Interativo)
  "moo_p6": {
    keywords: ["vozes", "soprano", "contralto", "tenor", "baixo", "oitavas"],
    fase: "MOO",
    titulo: "Página 6 - DISTRIBUIÇÃO DAS VOZES",
    icone: "🎼",
    resumo: "Interativo: Diagrama visual das tessituras conforme o manual.",
    html_content: `
        <h3 style="text-align:center;">Distribuição das Vozes e Oitavas</h3>
        
        <div class="svg-container" style="width: 100%; max-width: 500px; margin: 0 auto; filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.1));">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                <rect x="10" y="10" width="380" height="45" rx="10" fill="#2196F3" onclick="playVoice('soprano8va')" />
                <text x="200" y="40" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('soprano8va')">SOPRANO 8ª</text>

                <rect x="10" y="60" width="380" height="45" rx="10" fill="#64B5F6" onclick="playVoice('soprano')" />
                <text x="200" y="90" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('soprano')">SOPRANO</text>

                <rect x="10" y="110" width="380" height="45" rx="10" fill="#F06292" onclick="playVoice('contralto')" />
                <text x="200" y="140" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('contralto')">CONTRALTO</text>

                <rect x="10" y="160" width="380" height="45" rx="10" fill="#FFB74D" onclick="playVoice('tenor')" />
                <text x="200" y="190" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('tenor')">TENOR</text>

                <rect x="10" y="210" width="380" height="45" rx="10" fill="#8BC34A" onclick="playVoice('baixo')" />
                <text x="200" y="240" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('baixo')">BAIXO</text>

                <rect x="10" y="260" width="380" height="45" rx="10" fill="#689F38" onclick="playVoice('baixo8vb')" />
                <text x="200" y="290" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial" onclick="playVoice('baixo8vb')">BAIXO 8ª</text>
            </svg>
        </div>

        <audio id="voice-player"><source id="voice-source" src="" type="audio/mpeg"></audio>

        <p style="text-align:center; margin-top:15px; font-style:italic; font-size:0.85em;">Clique nas cores acima para ouvir a tessitura.</p>

        <script>
            function playVoice(voiceKey) {
                const audio = document.getElementById('voice-player');
                const source = document.getElementById('voice-source');
                source.src = 'assets/tessituras/' + voiceKey + '_tessitura.mp3';
                audio.load();
                audio.play();
            }
        </script>

        <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
            <button onclick="mostrarConteudo('moo_p5')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
            <button onclick="mostrarConteudo('moo_p7')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
        </div>
    `,
    pagina: "6"
}
});
