let BIBLIOTECA_LIVRO = {
        "indice": {
            keywords: ["indice", "sumario", "conteudo", "fases", "topicos", "ajuda", "começar"],
            fase: "GERAL", 
            titulo: "ÍNDICE - MSAM", 
            icone: "☰",
            resumo: "Aqui está o índice do manual. Você pode me perguntar sobre qualquer um destes tópicos.",
            html_content: `
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><strong>Fase 1</strong></li>
                    <li style="padding-left: 15px; border-left: 2px solid #4a90e2; margin-bottom: 5px;">1.1 - Música e Som (Pág. 9)</li>
                    <li style="padding-left: 15px; border-left: 2px solid #4a90e2; margin-bottom: 5px;">1.2 - Elementos da Música (Pág. 9)</li>
                    <li style="padding-left: 15px; border-left: 2px solid #4a90e2; margin-bottom: 5px;">1.3 - Propriedades do Som (Pág. 10)</li>
                    <li style="margin-top: 10px;"><strong>Fase 2</strong></li>
                    <li style="padding-left: 15px; border-left: 2px solid #ccc; color: #999;">2.1 - Figuras de Ritmo (Pág. 11) - <em>Em breve</em></li>
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
               
<button onclick="abrirPopup('Música é a arte de expressar sentimentos por sons coordenados. O som é a propagação de ondas no ar.', '📝')" style="background:none; border:none; color:var(--primary); cursor:pointer; text-decoration:underline; font-weight:bold; padding:0;">[Ver Resumo]</button>

<button onclick="abrirPopup([
    '<b>O QUE É MÚSICA?</b><br><br>Existem diversas definições que variam entre autores, mas a conclusão é a mesma:<br><br><i>&quot;A música é a arte de pensar com os sons, um pensamento sem conceitos.&quot;</i><br>(Jules Combarieu)<br><br><i>&quot;Música é a manifestação humana que organiza os sons e ruídos no tempo.&quot;</i><br>(Mário de Andrade)',
    
    '<b>VISÃO TÉCNICA E ESTÉTICA</b><br><br><i>&quot;Música é a arte de coordenar fenômenos acústicos para produzir efeitos estéticos.&quot;</i><br>(Enciclopédia Britânica - Barsa)<br><br><i>&quot;Música é a arte de expressar os diversos afetos da nossa alma mediante aos sons.&quot;</i><br>(Rafael Coelho Machado)',
    
    '<b>CONTEXTO DE MÚSICA SACRA</b><br><br>Em nosso contexto destinado a louvores e súplicas a Deus, definimos que:<br><br><span class=&quot;highlight-blue&quot; style=&quot;color:#4a90e2; font-weight:bold;&quot;>&quot;Música é a arte de expressar sentimentos por meio de Sons coordenados, produzidos por voz ou instrumento musical.&quot;</span><br><br>Expressamos: alegria, tristeza, euforia, respeito, comunhão, adoração e louvor.'
], '📚')" style="display:inline-block; padding:10px; background:#f0f2f5; color:#333; border:1px solid #ddd; border-radius:5px; cursor:pointer; margin-left: 10px; font-size: 12px; font-weight: bold;">
    💡 Saiba Mais
</button>

<a href="https://drive.google.com/file/d/1xERl6ixDiEq9wurE6CB7Q6i0GQdCx0aH/view?usp=sharing" target="_blank" style="display:inline-block; padding:10px; background:#4a90e2; color:white; text-decoration:none; border-radius:5px;">📂 Abrir Apresentação</a>
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
            `,
            pagina: "10"
        }
    };
