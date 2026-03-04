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
        resumo: "Interativo: Clique nas vozes para ouvir as oitavas correspondentes.",
        html_content: `
            <h3>Distribuição das Vozes e Oitavas</h3>
            <p>Toque no nome da voz para ouvir a sonoridade correspondente na orquestra:</p>
            
            <div class="interactive-voices" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
                <button onclick="playVoice('soprano_8a')" style="padding:15px; background:#e3f2fd; border:1px solid #2196F3; border-radius:8px; cursor:pointer;">Soprano 8ª (Agudo)</button>
                <button onclick="playVoice('soprano')" style="padding:15px; background:#e3f2fd; border:1px solid #2196F3; border-radius:8px; cursor:pointer;">Soprano</button>
                <button onclick="playVoice('contralto')" style="padding:15px; background:#fce4ec; border:1px solid #f06292; border-radius:8px; cursor:pointer;">Contralto</button>
                <button onclick="playVoice('tenor')" style="padding:15px; background:#fff3e0; border:1px solid #ffb74d; border-radius:8px; cursor:pointer;">Tenor</button>
                <button onclick="playVoice('baixo')" style="padding:15px; background:#f1f8e9; border:1px solid #8bc34a; border-radius:8px; cursor:pointer;">Baixo</button>
                <button onclick="playVoice('baixo_8a')" style="padding:15px; background:#f1f8e9; border:1px solid #8bc34a; border-radius:8px; cursor:pointer;">Baixo 8ª (Grave)</button>
            </div>

            <audio id="voice-player">
                <source id="voice-source" src="" type="audio/mpeg">
            </audio>

            <div class="image-container">
                <img src="assets/moo/page6.jpg" alt="Gráfico da Página 6">
            </div>

            <script>
                function playVoice(voice) {
                    const audio = document.getElementById('voice-player');
                    const source = document.getElementById('voice-source');
                    source.src = 'assets/audio/moo/' + voice + '.mp3';
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
