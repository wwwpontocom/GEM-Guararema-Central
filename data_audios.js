Object.assign(BIBLIOTECA_LIVRO, {
    "biblioteca_audios": {
        keywords: ["áudio", "mp3", "velocidade", "treino", "metrônomo", "bpm"],
        fase: "Extras",
        titulo: "BIBLIOTECA DE ÁUDIOS",
        icone: "🎧",
        resumo: "Acesse os áudios de estudo e controle o BPM de reprodução conforme sua necessidade.",
        html_content: `
            <div class="audio-library">
                <h3>Hino de Estudo - Exemplo</h3>
                
                <p style="background: #e3f2fd; padding: 15px; border-left: 5px solid #2196F3; border-radius: 4px; font-size: 14px; line-height: 1.5; color: #333;">
                    Com intuito de treinar nossas habilidades, seja Métrica, seja de Solfejo, tente o exercício a seguir: 
                    o áudio do Hino está na média sugerida, modifique o BPM (velocidade, andamento), e tente solfejar, 
                    ou mesmo cantar o hino e veja a diferença.
                </p>
                

                <div class="audio-card" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <audio id="player-estudo" controls style="width: 100%;">
                        <source src="assets/hinos/Hino1.mp3" type="audio/mpeg">
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                    
                    <div class="controls" style="margin-top: 15px; display: flex; gap: 10px; align-items: center; justify-content: center;">
                        <button onclick="changeBPM(-1)" style="padding: 8px 15px; cursor: pointer;">- 1 BPM</button>
                        
                        <div style="text-align: center; min-width: 140px;">
                            <div style="font-size: 0.8em; color: #888; text-transform: uppercase;">Andamento Atual</div>
                            <span id="speed-display" style="font-size: 1.5em; font-weight: bold; color: #2196F3;">61 BPM</span>
                            <br>
                            <small id="multiplier-display" style="color: #999;">(1.00x)</small>
                        </div>
                        
                        <button onclick="changeBPM(1)" style="padding: 8px 15px; cursor: pointer;">+ 1 BPM</button>
                    </div>
                    
                    <div class="speed-labels" style="margin-top: 15px; font-size: 0.9em; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
                        <span onclick="setExactBPM(56)" style="cursor:pointer; color: #666;"> (56)</span> | 
                        <span onclick="setExactBPM(61)" style="cursor:pointer; color: #2196F3; font-weight: bold;">Média Sugerida (61)</span> | 
                        <span onclick="setExactBPM(66)" style="cursor:pointer; color: #f44336;"> (66)</span>
                    </div>
                </div>
          <div id="metronomo-container" style="margin-top: 20px; text-align: center; display: none;">
                    <div id="relogio-analogico" style="width: 100px; height: 100px; border: 4px solid #333; border-radius: 50%; margin: 0 auto; position: relative; background: white;">
                        <div id="ponteiro" style="width: 2px; height: 45px; background: red; position: absolute; bottom: 50%; left: 50%; transform-origin: bottom; transform: rotate(0deg); transition: transform 0.1s linear;"></div>
                        <div style="width: 6px; height: 6px; background: #333; border-radius: 50%; position: absolute; top: 50%; left: 50%; margin: -3px 0 0 -3px;"></div>
                    </div>
                    <p style="font-weight: bold; margin-top: 10px; color: #333;">Referência: 60 BPM (1s)</p>
                </div>

                <div style="text-align: center; margin-top: 15px;">
                    <button id="btn-metronomo" onclick="toggleMetronomo()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        🔔 Abrir Relógio Metrônomo (60 BPM)
                    </button>
                </div>
            </div>
            
            <script>
                // O áudio original gravado está em 61 BPM
                const BASE_BPM = 61;
                let currentBPM = 61;

                let metronomoInterval = null;
                let audioCtx = null;
                let angulo = 0;

                function playTick() {
                    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
                    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.1);
                }

                function toggleMetronomo() {
                    const container = document.getElementById('metronomo-container');
                    const btn = document.getElementById('btn-metronomo');
                    const ponteiro = document.getElementById('ponteiro');

                    if (metronomoInterval) {
                        clearInterval(metronomoInterval);
                        metronomoInterval = null;
                        container.style.display = 'none';
                        btn.innerText = '🔔 Abrir Relógio Metrônomo (60 BPM)';
                        btn.style.background = '#4CAF50';
                    } else {
                        container.style.display = 'block';
                        btn.innerText = 'Stop Metrônomo';
                        btn.style.background = '#f44336';
                        
                        metronomoInterval = setInterval(() => {
                            angulo = (angulo + 6) % 360; 
                            ponteiro.style.transform = "rotate(" + angulo + "deg)";
                            playTick();
                        }, 1000); 
                    }
                }

                function updateAudioEngine() {
                    const audio = document.getElementById('player-estudo');
                    const displayBPM = document.getElementById('speed-display');
                    const displayMult = document.getElementById('multiplier-display');
                    
                    // Cálculo da Velocidade: Razão entre o BPM alvo e o original
                    let playbackRate = currentBPM / BASE_BPM;
                    
                    // Limites de qualidade (O áudio costuma degradar abaixo de 0.5x ou acima de 2.0x)
                    if (playbackRate < 0.5) {
                        playbackRate = 0.5;
                        currentBPM = Math.round(BASE_BPM * 0.5);
                    }
                    if (playbackRate > 2.0) {
                        playbackRate = 2.0;
                        currentBPM = Math.round(BASE_BPM * 2.0);
                    }

                    if (audio) {
                        audio.playbackRate = playbackRate;
                        // Garante que o áudio não mude de tom (preserva o timbre)
                        audio.preservesPitch = true; 
                    }
                    
                    displayBPM.innerText = currentBPM + " BPM";
                    displayMult.innerText = "(" + playbackRate.toFixed(2) + "x)";
                }

                function changeBPM(delta) {
                    currentBPM += delta;
                    updateAudioEngine();
                }

                function setExactBPM(val) {
                    currentBPM = val;
                    updateAudioEngine();
                }
            </script>
        `,
        pagina: "Extra"
    }
});
