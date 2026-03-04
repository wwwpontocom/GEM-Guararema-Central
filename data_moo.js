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
    resumo: "Interativo: Comparativo entre 'Assim se reproduz' e 'Assim está escrito'.",
    html_content: `
    <style>
        .moo-container { width: 100%; max-width: 900px; margin: 0 auto; background: white; padding: 20px; font-family: Arial, sans-serif; }
        .moo-header { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; margin-bottom: 20px; }
        .moo-title { font-size: 28px; font-weight: bold; }
        .moo-red { color: #c00000; font-size: 22px; font-weight: bold; margin-bottom: 5px; }
        .moo-desc { font-style: italic; font-weight: bold; margin-bottom: 20px; font-size: 0.9em; }
        .moo-flex { display: flex; justify-content: space-between; gap: 20px; }
        
        /* Ajustes de Responsividade */
        @media (max-width: 768px) {
            .moo-flex { flex-direction: column; }
            .moo-divider { border-left: none !important; border-top: 1px solid #eee; padding-left: 0 !important; padding-top: 20px; }
            .inst-moo { width: 100% !important; max-width: none; }
        }

        .staff-line { position: relative; display: flex; align-items: flex-start; margin-bottom: 10px; }
        .pentagrama-mini { width: 45px; height: 35px; border-top: 1px solid #000; border-bottom: 1px solid #000; 
            background: linear-gradient(to bottom, transparent 18%, #000 18%, #000 22%, transparent 22%, transparent 43%, #000 43%, #000 47%, transparent 47%, transparent 68%, #000 68%, #000 72%, transparent 72%);
            margin-right: 10px; position: relative; flex-shrink: 0; }
        .clef-mini { position: absolute; font-size: 35px; left: 2px; user-select: none; }
        .sol-m { top: -8px; } .fa-m { top: -5px; font-size: 30px; }
        .bracket-moo { border-left: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; width: 8px; margin-right: 8px; align-self: stretch; margin-top: 15px; margin-bottom: 5px; }
        .label-moo { width: 110px; padding: 4px; border: 1px solid #888; font-weight: bold; cursor: pointer; background: white; font-size: 0.85em; text-align: center; }
        .inst-moo { width: 300px; padding: 4px; border: 1px solid #888; font-style: italic; cursor: pointer; background: white; font-size: 0.85em; }
        .moo-row { display: flex; align-items: center; margin-bottom: 4px; transition: 0.2s; }
        .moo-row:hover { opacity: 0.8; }
        .border-red { border: 2px solid #c00000 !important; }
        .written-box { border: 1px solid #888; padding: 4px 15px; min-width: 80px; text-align: center; cursor: pointer; font-size: 13px; }
    </style>

    <div class="moo-container">
        <div class="moo-header">
            <div class="moo-title">Orquestração do H5</div>
           <button onclick="abrirPopup([
    '<b>EXTENSÃO DAS VOZES</b><br>Versão atualizada de acordo com o Anexo da Reunião Anual de 19 de outubro de 2013.<br><br>De acordo com seu timbre, as vozes adultas são classificadas em Femininas (Soprano, Meio-soprano, e Contralto) e Masculinas (Tenor, Barítono e Baixo). A classificação mais comum é o Quarteto Vocal, base do nosso Hinário no. 5 (H5), constituído de Soprano, Contralto, Tenor e Baixo. O Soprano é a voz mais aguda. O Contralto se situa uma quinta abaixo do Soprano. O Tenor e o Baixo situam-se uma oitava abaixo do Soprano e do Contralto, respectivamente. (Fonte: Prof. Osvaldo Lacerda). A extensão das vozes são as seguintes: SOPRANO: DÓ3 a SOL4 - CONTRALTO: FA2 a DÓ4 - TENOR: DÓ2 a SOL3 - BAIXO: FA1 a DÓ3<br><br>Os instrumentos de uma Orquestra são agrupados em famílias de acordo com seu timbre. Cada família é composta de instrumentos de formato e timbre relativamente semelhantes, capazes de reproduzir as 4 vozes. Nas orquestras da Congregação Cristã no Brasil temos 3 famílias de instrumentos: Cordas, Madeiras (que inclui os Saxofones) e Metais. Segue abaixo uma lista dos instrumentos permitidos, alinhados com as vozes que devem ser executadas. A ordem de colocação dos instrumentos na igreja é: em primeiro plano as Cordas, seguidas das Madeiras e dos Metais, e cada família por ordem das vozes.<br><br>Na próxima página estão representadas AS TESSITURAS E EXTENSÕES DAS VOZES NO HINÁRIO N.5 (Soprano, Contralto, Tenor e Baixo), por sua região de altura em relação à Escala Geral dos Sons. Cada músico deve observar a tessitura da voz que o seu instrumento está apto a executar. Esta tessitura deve ser respeitada conforme sua altura e escrita no hinário, sempre obedecendo às instruções da tabela “INSTRUMENTOS MUSICAIS PERMITIDOS PARA TOCAREM NAS ORQUESTRAS”, na página 09.'
], '📚')" style="display:inline-block; padding:10px; background:#f0f2f5; color:#333; border:1px solid #ddd; border-radius:5px; cursor:pointer; margin-left: 10px; font-size: 12px; font-weight: bold;">
// --- FIX IS HERE ---
    💡 Saiba Mais
</button>

        </div>

        <div class="moo-flex">
            <div style="flex: 2;">
                <div class="moo-red">Assim se reproduz:</div>
                <div class="moo-desc">Em 6 linhas melódicas</div>

                <div style="display: flex;">
                    <div class="bracket-moo"></div>
                    <div>
                        <div class="staff-line">
                            <div class="pentagrama-mini" style="margin-top: 35px;"><span class="clef-mini sol-m">𝄞</span></div>
                            <div>
                                <div class="moo-row" onclick="playVoice('soprano8va')">
                                    <div class="label-moo border-red">Soprano <i>8a.</i></div>
                                    <div class="inst-moo border-red">Violino, Flauta.</div>
                                </div>
                                <div class="moo-row" onclick="playVoice('soprano')">
                                    <div class="label-moo">Soprano</div>
                                    <div class="inst-moo">Oboé, Clarinete, Sax Soprano, Trompete, etc.</div>
                                </div>
                                <div class="moo-row" onclick="playVoice('contralto')">
                                    <div class="label-moo">Contralto</div>
                                    <div class="inst-moo">Corne Inglês, Sax Alto, Trompa.</div>
                                </div>
                            </div>
                        </div>

                        <div class="staff-line">
                            <div class="pentagrama-mini" style="margin-top: 15px;"><span class="clef-mini fa-m">𝄢</span></div>
                            <div>
                                <div class="moo-row" onclick="playVoice('tenor')">
                                    <div class="label-moo">Tenor</div>
                                    <div class="inst-moo">Viola, Clar Alto, Sax Tenor, Trombone.</div>
                                </div>
                                <div class="moo-row" onclick="playVoice('baixo')">
                                    <div class="label-moo">Baixo</div>
                                    <div class="inst-moo">Violoncelo, Fagote, Clar Bx, Sax Bar, Eufônio.</div>
                                </div>
                                <div class="moo-row" onclick="playVoice('baixo8vb')">
                                    <div class="label-moo border-red">Baixo <i>8a.</i></div>
                                    <div class="inst-moo border-red">Tuba, Pedaleira do Órgão.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="moo-divider" style="flex: 1; border-left: 1px solid #eee; padding-left: 20px;">
                <div class="moo-red">Assim está escrito:</div>
                <div class="moo-desc">Em 4 linhas melódicas</div>

                <div class="staff-line">
                    <div class="pentagrama-mini"><span class="clef-mini sol-m">𝄞</span></div>
                    <div style="display:flex; flex-direction:column; gap:5px;">
                        <div class="written-box" onclick="playVoice('soprano')">Soprano</div>
                        <div class="written-box" onclick="playVoice('contralto')">Contralto</div>
                    </div>
                </div>
                <div style="height:25px;"></div>
                <div class="staff-line">
                    <div class="pentagrama-mini"><span class="clef-mini fa-m">𝄢</span></div>
                    <div style="display:flex; flex-direction:column; gap:5px;">
                        <div class="written-box" onclick="playVoice('tenor')">Tenor</div>
                        <div class="written-box" onclick="playVoice('baixo')">Baixo</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <audio id="voice-player"><source id="voice-source" src="" type="audio/mpeg"></audio>

    <script>
        function playVoice(voiceKey) {
            const audio = document.getElementById('voice-player');
            const source = document.getElementById('voice-source');
            source.src = 'assets/tessituras/' + voiceKey + '_tessitura.mp3';
            audio.load();
            audio.play().catch(e => console.warn("Áudio não encontrado:", source.src));
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
