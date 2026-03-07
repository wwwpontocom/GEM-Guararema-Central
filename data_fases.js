let BIBLIOTECA_LIVRO = {
    "indice": {
        keywords: ["indice", "sumario", "conteudo", "fases", "topicos", "ajuda", "começar"],
        fase: "GERAL", 
        titulo: "ÍNDICE - MSA", 
        icone: "☰",
        resumo: "Aqui está o índice do manual. Você pode clicar nos tópicos para navegar rapidamente.",
        html_content: `
            <style>
                .indice-item {
                    padding: 10px 15px;
                    border-left: 3px solid #4a90e2;
                    margin-bottom: 8px;
                    background: #f8f9fa;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: block;
                    border-radius: 0 5px 5px 0;
                    color: #333;
                    font-family: sans-serif;
                }
                .indice-item:hover {
                    background: #eef5ff;
                    border-left-width: 6px;
                    padding-left: 12px;
                }
                .indice-disabled {
                    padding: 10px 15px;
                    border-left: 3px solid #ccc;
                    color: #999;
                    margin-bottom: 8px;
                    background: #f1f1f1;
                    border-radius: 0 5px 5px 0;
                    font-family: sans-serif;
                }
            </style>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 15px; font-family: sans-serif;"><strong>Fase 1</strong></li>
                
                <li class="indice-item" onclick="mostrarConteudo('fase_1_musica_som')">
                    1.1 - Música e Som (Pág. 9)
                </li>
                
                <li class="indice-item" onclick="mostrarConteudo('fase_1_elementos_musica')">
                    1.2 - Elementos da Música (Pág. 9)
                </li>
                
                <li class="indice-item" onclick="mostrarConteudo('fase_1_propriedades_som')">
                    1.3 - Propriedades do Som (Pág. 10)
                </li>

                <li style="margin: 20px 0 15px 0; font-family: sans-serif;"><strong>Fase 2</strong></li>
                
                <li class="indice-disabled">
                    2.1 - Figuras de Ritmo (Pág. 11) - <em>Em breve</em>
                </li>
            </ul>
        `,
        pagina: "Índice"
    },
        "fase_1_musica_som": {
            keywords: ["musica", "som", "instrumentos", "teclado", "cordas", "madeiras", "metais", "orquestra", "onda", "sentimento"],
            fase: "Fase 1", 
            titulo: "1.1 - MÚSICA E SOM", 
            icone: "1.1",
            resumo: "Música é a arte de expressar sentimentos por sons coordenados. O som é a propagação de ondas no ar.",
            html_content: `
                <p>Dentro do nosso contexto de música sacra, definimos <span class="highlight-blue">MÚSICA</span> como a arte de expressar sentimentos por meio de sons coordenados.</p>
                <p><span class="highlight-blue">Som</span> é tudo o que ouvimos, formado pela propagação de ondas no ar.</p>
                <div class="instrument-grid">
                    <div><div class="col-title">Teclados</div><div class="instrument-item">Órgão eletrônico</div></div>
                    <div><div class="col-title">Cordas</div><div class="instrument-item">Violino, Viola, Violoncelo</div></div>
                    <div><div class="col-title">Madeiras</div><div class="instrument-item">Flauta, Oboé, Clarinete</div></div>
                    <div><div class="col-title">Metais</div><div class="instrument-item">Trompete, Trompa, Tuba</div></div>
                </div>
               
<button onclick="abrirPopup([
    'Música é a arte de expressar sentimentos por sons coordenados. O som é a propagação de ondas no ar.'
], '📝')" style="display:inline-block; padding:10px; background:#f0f2f5; color:#333; border:1px solid #ddd; border-radius:5px; cursor:pointer; margin-left: 10px; font-size: 12px; font-weight: bold;">
    Ver Resumo
</button>

<button onclick="abrirPopup([
    '<b>O QUE É MÚSICA?</b><br><br>Existem diversas definições que variam entre autores, mas a conclusão é a mesma:<br><br><i>&quot;A música é a arte de pensar com os sons, um pensamento sem conceitos.&quot;</i><br>(Jules Combarieu)<br><br><i>&quot;Música é a manifestação humana que organiza os sons e ruídos no tempo.&quot;</i><br>(Mário de Andrade)',
    
    '<b>VISÃO TÉCNICA E ESTÉTICA</b><br><br><i>&quot;Música é a arte de coordenar fenômenos acústicos para produzir efeitos estéticos.&quot;</i><br>(Enciclopédia Britânica - Barsa)<br><br><i>&quot;Música é a arte de expressar os diversos afetos da nossa alma mediante aos sons.&quot;</i><br>(Rafael Coelho Machado)',
    
    '<b>CONTEXTO DE MÚSICA SACRA</b><br><br>Em nosso contexto destinado a louvores e súplicas a Deus, definimos que:<br><br><span class=&quot;highlight-blue&quot; style=&quot;color:#4a90e2; font-weight:bold;&quot;>&quot;Música é a arte de expressar sentimentos por meio de Sons coordenados, produzidos por voz ou instrumento musical.&quot;</span><br><br>Expressamos: alegria, tristeza, euforia, respeito, comunhão, adoração e louvor...',

    '<b>O QUE É SOM? (ARTE E CIÊNCIA)</b><br><br>• <b>Pela arte:</b> o Som revela nossos sentimentos.<br>• <b>Pela ciência:</b> o Som é explicado através da Física e da Matemática.<br><br>A <b>Física</b> explica como o Som é produzido, e a <b>Matemática</b>, como esse Som acontece e é dividido dentro do tempo.',

    '<b>DEFINIÇÃO FÍSICA DO SOM</b><br><br><span class=&quot;highlight-blue&quot; style=&quot;color:#4a90e2; font-weight:bold;&quot;>&quot;Som é tudo o que ouvimos. O Som é formado pela propagação de ondas no ar, ao serem captadas por nossos ouvidos.&quot;</span><br><br>Os sons produzidos em nossas orquestras são realizados pelos instrumentos musicais listados no MOO (Manual de Orientação Orquestral).'
], '📚')" style="display:inline-block; padding:10px; background:#f0f2f5; color:#333; border:1px solid #ddd; border-radius:5px; cursor:pointer; margin-left: 10px; font-size: 12px; font-weight: bold;">
    💡 Saiba Mais
</button>

<div style="margin-top: 20px; padding: 20px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif;">
    <b style="font-size: 16px;">DESCOBRINDO OS EXEMPLOS</b><br><br>
    <p style="font-size: 14px; color: #555;">Clique nos alto-falantes para identificar o instrumento:</p>
    
    <div style="display: flex; justify-content: space-around; align-items: flex-end; gap: 10px; margin-top: 20px;">
        
        <div style="text-align: center; width: 80px;">
            <img src="assets/img/cello1.png" style="width: 50px; display: block; margin: 10px auto;">
            <span id="name-cello" style="font-size: 12px; font-weight: bold; visibility: hidden;">Violoncelo</span><br>
            <button onclick="let a = new Audio('assets/audio/cello_exemplo1.mp3'); a.play(); a.onended = () => { document.getElementById('name-cello').style.visibility = 'visible'; document.getElementById('btn-cello').innerText = 'Violoncelo'; }" 
                    id="btn-cello"
                    style="margin-top:8px; background: none; border: none; cursor: pointer; font-size: 11px; color: #333;">
                <img src="assets/img/speaker_icon.png" style="width: 25px; vertical-align: middle;"> Ouvir
            </button>
        </div>

        <div style="text-align: center; width: 80px;">
            <img src="assets/img/violin1.png" style="width: 40px; display: block; margin: 10px auto;">
            <span id="name-violin" style="font-size: 12px; font-weight: bold; visibility: hidden;">Violino</span><br>
            <button onclick="let a = new Audio('assets/audio/violin_exemplo1.wav'); a.play(); a.onended = () => { document.getElementById('name-violin').style.visibility = 'visible'; document.getElementById('btn-violin').innerText = 'Violino'; }" 
                    id="btn-violin"
                    style="margin-top:8px; background: none; border: none; cursor: pointer; font-size: 11px; color: #333;">
                <img src="assets/img/speaker_icon.png" style="width: 25px; vertical-align: middle;"> Ouvir
            </button>
        </div>

        <div style="text-align: center; width: 80px;">
            <img src="assets/img/horn1.png" style="width: 55px; display: block; margin: 10px auto;">
            <span id="name-trompa" style="font-size: 12px; font-weight: bold; visibility: hidden;">Trompa</span><br>
            <button onclick="let a = new Audio('assets/audio/trompa_exemplo1.wav'); a.play(); a.onended = () => { document.getElementById('name-trompa').style.visibility = 'visible'; document.getElementById('btn-trompa').innerText = 'Trompa'; }" 
                    id="btn-trompa"
                    style="margin-top:8px; background: none; border: none; cursor: pointer; font-size: 11px; color: #333;">
                <img src="assets/img/speaker_icon.png" style="width: 25px; vertical-align: middle;"> Ouvir
            </button>
        </div>

    </div>
</div>

<a href="https://drive.google.com/file/d/1xERl6ixDiEq9wurE6CB7Q6i0GQdCx0aH/view?usp=sharing" target="_blank" style="display:inline-block; padding:10px; background:#4a90e2; color:white; text-decoration:none; border-radius:5px;">📂 Abrir Apresentação</a>
<div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; text-align: right;">
            <button onclick="mostrarConteudo('fase_1_elementos_musica')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Próximo Tópico: 1.2 ➜</button>
        </div>
            `,
            pagina: "9"
        },
        "fase_1_elementos_musica": {
            keywords: ["elementos", "melodia", "harmonia", "ritmo", "sucessivos", "simultaneo", "tempo", "silencio"],
            fase: "Fase 1", 
            titulo: "1.2 - ELEMENTOS DA MÚSICA", 
            icone: "1.2",
            resumo: "Os três elementos fundamentais são: Melodia (sons sucessivos), Harmonia (sons simultâneos) e Ritmo (sons no tempo).",
            html_content: `
                <p>Os elementos mais importantes da música são: <strong>MELODIA, HARMONIA e RITMO</strong>.</p>
                <p><strong>Melodia</strong> é a produção ordenada de sons sucessivos. Nos hinos, cada uma das vozes é uma melodia individual.</p>
                <p><strong>Harmonia</strong> é a produção ordenada de vários sons diferentes emitidos de modo simultâneo.</p>
                <p><strong>Ritmo</strong> é a disposição ordenada de sons no tempo, combinando sons curtos, longos e silêncios.</p>
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; background: #eee;">
                    <iframe 
                        src="https://docs.google.com/presentation/d/1eU6qLpl1oTiYMLIaAha-QxjvzDnUPdkGdWHo-DGYM58/embed?start=false&loop=false&delayms=3000" 
                        frameborder="0" 
                        width="100%" 
                        height="100%" 
                        style="position: absolute; top: 0; left: 0;"
                        allowfullscreen="true">
                    </iframe>
                </div> 
                <div style="margin-top: 15px; padding: 15px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px;">
    <p style="margin:0 0 10px 0; font-weight:bold; color:#212529;">🔈 Exemplos Sonoros (Fase 1.2):</p>
    <audio controls style="width:100%;">
        <source src="https://drive.google.com/uc?export=download&id=1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
    </audio>
    <p style="font-size:11px; color:#6c757d; margin-top:8px;">
        ⚠️ Se o áudio não tocar, <a href="https://drive.google.com/file/d/1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6/view" target="_blank" style="color:#4a90e2;">clique aqui para abrir o som direto no Drive</a>.
    </p>
</div> 
        <source src="https://docs.google.com/uc?export=download&id=1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6" type="audio/mpeg">
        Seu navegador não suporta o áudio.
    </audio>
</div>
<a href="https://drive.google.com/file/d/1xERl6ixDiEq9wurE6CB7Q6i0GQdCx0aH/view?usp=sharing" target="_blank" style="display:inline-block; padding:10px; background:#4a90e2; color:white; text-decoration:none; border-radius:5px;">📂 Abrir Apresentação</a>
<div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
            <button onclick="mostrarConteudo('fase_1_musica_som')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
            <button onclick="mostrarConteudo('fase_1_propriedades_som')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Próximo Tópico: 1.3 ➜</button>
        </div>
            `,
            pagina: "9" 
        },
        "fase_1_propriedades_som": {
            keywords: ["propriedades", "timbre", "duracao", "altura", "intensidade", "grave", "agudo", "medio", "frequencia"],
            fase: "Fase 1", 
            titulo: "1.3 - PROPRIEDADES DO SOM", 
            icone: "1.3",
            resumo: "As principais propriedades do som são: Timbre (origem), Duração (tempo), Altura (frequência) e Intensidade (volume).",
            html_content: `
                <p>As principais propriedades do som são: <strong>TIMBRE, DURAÇÃO, ALTURA e INTENSIDADE</strong>.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <p><span class="highlight-blue">Timbre:</span> É a 'cor' do som. É o que nos permite distinguir a origem do som (ex: um violino de um trompete).</p>
                        <p><span class="highlight-blue">Duração:</span> É o tempo de sustentação do som (sons curtos ou longos).</p>
                    </div>
                    <div>
                        <p><span class="highlight-blue">Altura:</span> É a propriedade das frequências. Permite distinguir sons <strong>graves</strong> (baixa frequência), <strong>médios</strong> ou <strong>agudos</strong> (alta frequência).</p>
                        <p><span class="highlight-blue">Intensidade:</span> Relacionada ao volume (sons fracos ou fortes).</p>
                    </div>
                </div>
                
                <p><span class="highlight-blue">Altura:</span> Diferencia sons <strong>graves</strong> de <strong>agudos</strong> pela frequência (Hz).</p>
                <div style="display: flex; justify-content: space-around; background: #f9f9f9; padding: 10px; border-radius: 5px; font-size: 11px; border: 1px dashed #ccc;">
                    <div style="text-align:center;"><strong>Grave</strong><br>110 Hz</div>
                    <div style="text-align:center;"><strong>Médio</strong><br>440 Hz</div>
                    <div style="text-align:center;"><strong>Agudo</strong><br>880 Hz</div>
                </div>
                <div style="margin-top:15px; padding:10px; background:#f0f7ff; border-radius:5px; font-size:12px;">
                    <em>Exemplos de Altura:</em> Violoncelo (Grave - 110Hz), Cornet (Médio - 440Hz), Flauta (Agudo - 880Hz).
                </div>
                 <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; background: #eee;">
                    <iframe 
                        src="https://docs.google.com/presentation/d/1E-NIAAUkCRoOSglN2kBYrU0ZUQSqd18Dst0SM4HNcnA/embed?start=false&loop=false&delayms=3000"  
                        frameborder="0" 
                        width="100%" 
                        height="100%" 
                        style="position: absolute; top: 0; left: 0;"
                        allowfullscreen="true">
                    </iframe>
                </div> 
                <div style="margin-top: 15px; padding: 15px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px;">
    <p style="margin:0 0 10px 0; font-weight:bold; color:#212529;">🔈 Exemplos Sonoros (Fase 1.2):</p>
    <audio controls style="width:100%;">
        <source src="https://drive.google.com/uc?export=download&id=1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
    </audio>
    <p style="font-size:11px; color:#6c757d; margin-top:8px;">
        ⚠️ Se o áudio não tocar, <a href="https://drive.google.com/file/d/1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6/view" target="_blank" style="color:#4a90e2;">clique aqui para abrir o som direto no Drive</a>.
    </p>
</div> 
        <source src="https://docs.google.com/uc?export=download&id=1jpNC5KWBGMPempKqDBaGvSBB8oxENTq6" type="audio/mpeg">
        Seu navegador não suporta o áudio.
    </audio>
</div>
<a href="https://drive.google.com/file/d/1xERl6ixDiEq9wurE6CB7Q6i0GQdCx0aH/view?usp=sharing" target="_blank" style="display:inline-block; padding:10px; background:#4a90e2; color:white; text-decoration:none; border-radius:5px;">📂 Abrir Apresentação</a>
<div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="mostrarConteudo('fase_1_elementos_musica')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                <button onclick="mostrarConteudo('indice')" style="padding: 12px 20px; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Menu Inicial ☰</button>
            </div>
            `,
            pagina: "10"
        }
 };
