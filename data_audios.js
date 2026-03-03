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
                <p>Ajuste a velocidade do metrônomo (BPM):</p>
                
                <div class="audio-card" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
                    <audio id="player-estudo" controls style="width: 100%;">
                        <source src="assets/hinos/Hino1.mp3" type="audio/mpeg">
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                    
                    <div class="controls" style="margin-top: 15px; display: flex; gap: 10px; align-items: center; justify-content: center;">
                        <button onclick="changeBPM(-1)" style="padding: 5px 15px;">- 1 BPM</button>
                        <div style="text-align: center; min-width: 120px;">
                            <span id="speed-display" style="font-size: 1.2em; font-weight: bold; color: #2196F3;">61 BPM</span>
                            <br>
                            <small id="multiplier-display" style="color: #666;">(1.00x)</small>
                        </div>
                        <button onclick="changeBPM(1)" style="padding: 5px 15px;">+ 1 BPM</button>
                    </div>
                    
                    <div class="speed-labels" style="margin-top: 15px; font-size: 0.9em; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
                        <span onclick="setExactBPM(40)" style="cursor:pointer; color: #666;">Lento (40)</span> | 
                        <span onclick="setExactBPM(61)" style="cursor:pointer; color: #2196F3;">Original (61)</span> | 
                        <span onclick="setExactBPM(90)" style="cursor:pointer; color: #f44336;">Rápido (90)</span>
                    </div>
                </div>
            </div>

            <script>
                // O áudio original gravado está em 61 BPM
                const BASE_BPM = 61;
                let currentBPM = 61;

                function updateAudioEngine() {
                    const audio = document.getElementById('player-estudo');
                    const displayBPM = document.getElementById('speed-display');
                    const displayMult = document.getElementById('multiplier-display');
                    
                    // Cálculo: Nova Velocidade = BPM Desejado / BPM Original
                    let playbackRate = currentBPM / BASE_BPM;
                    
                    // Limites de segurança do navegador (0.06x a 16x, mas usamos 0.5x a 2.0x por qualidade)
                    if (playbackRate < 0.5) {
                        playbackRate = 0.5;
                        currentBPM = Math.round(BASE_BPM * 0.5);
                    }
                    if (playbackRate > 2.0) {
                        playbackRate = 2.0;
                        currentBPM = Math.round(BASE_BPM * 2.0);
                    }

                    audio.playbackRate = playbackRate;
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
