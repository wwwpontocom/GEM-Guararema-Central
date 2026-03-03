Object.assign(BIBLIOTECA_LIVRO, {
        "biblioteca_audios": {
            keywords: ["áudio", "mp3", "velocidade", "treino", "metrônomo"],
            fase: "Extras",
            titulo: "BIBLIOTECA DE ÁUDIOS",
            icone: "🎧",
            resumo: "Acesse os áudios de estudo e controle a velocidade de reprodução conforme sua necessidade.",
            html_content: `
                <div class="audio-library">
                    <h3>Hino de Estudo - Exemplo</h3>
                    <p>Utilize os controles abaixo para ajustar a velocidade (BPM):</p>
                    
                    <div class="audio-card" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
                        <audio id="player-estudo" controls style="width: 100%;">
                            <source src="link_do_seu_audio.mp3" type="audio/mpeg">
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                        
                        <div class="controls" style="margin-top: 10px; display: flex; gap: 10px; align-items: center;">
                            <button onclick="changeSpeed(-0.1)">- Diminuir</button>
                            <span id="speed-display">Velocidade: 1.0x</span>
                            <button onclick="changeSpeed(0.1)">+ Aumentar</button>
                        </div>
                        
                        <div class="speed-labels" style="margin-top: 10px; font-weight: bold;">
                            <span id="label-min" style="color: #666;">Mínima (0.5x)</span> | 
                            <span id="label-med" style="color: #2196F3;">Média (1.0x)</span> | 
                            <span id="label-max" style="color: #f44336;">Máxima (2.0x)</span>
                        </div>
                    </div>
                </div>

                <script>
                    function changeSpeed(delta) {
                        const audio = document.getElementById('player-estudo');
                        const display = document.getElementById('speed-display');
                        
                        // Calcula nova velocidade entre 0.5 (Mínima) e 2.0 (Máxima)
                        let newSpeed = audio.playbackRate + delta;
                        if (newSpeed < 0.5) newSpeed = 0.5;
                        if (newSpeed > 2.0) newSpeed = 2.0;
                        
                        audio.playbackRate = newSpeed;
                        display.innerText = "Velocidade: " + newSpeed.toFixed(1) + "x";
                    }
               </script>
        `,
        pagina: "Extra"
    }
});
