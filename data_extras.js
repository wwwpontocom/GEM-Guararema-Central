Object.assign(BIBLIOTECA_LIVRO, {
     "vamos_aprender": {
        keywords: ["vamos aprender", "basico", "importante", "informações", "introdução", "instrumentos", "violino", "flauta", "afinação"],
        fase: "Extras", 
        titulo: "VAMOS APRENDER", 
        icone: "💡",
        resumo: "Informações básicas e fundamentais para o início dos seus estudos musicais no GEM.",
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
            <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                <p style="background: #fff3cd; padding: 10px; border-left: 5px solid #ffc107; border-radius: 4px;">
                    <strong>Orientações Iniciais:</strong> Estude com dedicação cada conceito básico abaixo para fundamentar seu aprendizado técnico.
                </p>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><strong>CORDAS</strong></li>
                    <li class="indice-item" onclick="mostrarConteudo('instr_violino')">Violino</li>
                    <li class="indice-item" onclick="mostrarConteudo('instr_viola')">Viola</li>
                    <li class="indice-item" onclick="mostrarConteudo('instr_cello')">Violoncelo</li>
                    
                    <li style="margin-top: 10px;"><strong>MADEIRAS</strong></li>
                    <li class="indice-disabled">2.1 - Flauta - <em>Em breve</em></li>
                </ul>
            </div>
        `,
        pagina: "Índice"
    },

        "instr_violino": {
        keywords: ["violino", "arco", "mao direita", "afinação", "legato", "cordas"],
        fase: "CORDAS", 
        titulo: "VIOLINO - TÉCNICAS INICIAIS", 
        icone: "🎻",
        resumo: "Fundamentos de arco, flexibilidade da mão direita e afinação padrão para violino.",
        html_content: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                <h3 style="color: var(--primary); border-bottom: 1px solid #ddd; padding-bottom: 5px;">1. Violino </h3>
                
                <div style="display: flex; gap: 10px; margin: 15px 0; justify-content: center;">
                    <div style="text-align: center;">
                        <img src="assets/img/vio1.jpg" alt="Técnica Mão Direita 1" style="width: 100%; max-width: 250px; border-radius: 8px; border: 1px solid #ccc;">
                        <p style="font-size: 11px; color: #666;">Figura 1: Capa</p>
                    </div>
                </div>

                 <h4>A. Técnicas da Mão Direita</h4>
            <p>Na mão direita é onde está disposto o uso do arco do violino. É ele o responsável pela produção do som e onde reside a musicalidade e expressão.</p>
            

            <p><strong>Flexibilidade:</strong> Os dedos jamais estarão rígidos. O pulso e os dedos devem estar flexíveis e relaxados para que o som seja de alta qualidade. Sinta o arco como uma extensão do seu braço.</p>

            <blockquote style="background: #f9f9f9; border-left: 5px solid var(--primary); padding: 10px; margin: 15px 0;">
                <strong>O Legato no Hinário:</strong> Nosso hinário exige total destreza no <strong>Legato</strong> (ligar notas sucessivas sem silêncio). É proibido o uso de golpes como <em>staccato, spiccato ou pizzicato</em> na melodia dos hinos, para preservar a sacralidade.
            </blockquote>

            <p><strong>Cuidado com o Ombro:</strong> É terminantemente proibido o uso do ombro direito para executar golpes de arco. O movimento errado prejudica a saúde e a estética sonora.</p>

            <h4>B. Afinando o Violino</h4>
            <p>A afinação consiste em produzir um som equivalente a outro (uníssono) ou atingir a altura exata medida por um afinador eletrônico.</p>
            <ul>
                <li><strong>Padrão:</strong> O Lá3 (A3) foi definido em 440Hz em 1939, mas orquestras modernas utilizam entre 442Hz e 446Hz.</li>
                <li><strong>Batimento:</strong> Quando desafinado, ouve-se uma oscilação ondulante ("uauauaua"). Quando afinado, o som é puro.</li>
            </ul>

            <h4>C. Funções dos Dedos no Arco</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 10px;">
                <tr style="background: #eee;">
                    <th style="border: 1px solid #ddd; padding: 8px;">Dedo</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Função Principal</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Indicador</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Pronação e peso no meio/ponta do arco.</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Médio</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Suspensão (alivia o peso) junto ao polegar.</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Anular</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Manter a direção do arco reto e paralelo.</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Mínimo</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Equilíbrio e mudanças de corda (deve estar dobrado).</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Polegar</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Base de apoio (formato de círculo) entre talão e madeira.</td>
                </tr>
            </table>

            
                <div style="display: flex; gap: 10px; margin: 15px 0; justify-content: center;">
                    <div style="text-align: center;">
                        <img src="assets/img/vio2.jpg" alt="Técnica Mão Direita 2" style="width: 100%; max-width: 250px; border-radius: 8px; border: 1px solid #ccc;">
                        <p style="font-size: 11px; color: #666;">Figura 2: Flexibilidade</p>
                    </div>
                </div>
                <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between;">
                    <button onclick="mostrarConteudo('vamos_aprender')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar ao Índice</button>
                    <button onclick="mostrarConteudo('instr_violino_pg_2')" style="padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Próxima Página ➜</button>
                </div>
            </div>
        `,
        pagina: "1"
    },

    "instr_violino_pg_2": {
        keywords: ["pulso", "posições", "escalas"],
        fase: "CORDAS", 
        titulo: "VIOLINO - PÁGINA 2", 
        icone: "🎻",
        resumo: "Continuação das técnicas de violino.",
        html_content: `
            <div style="font-family: sans-serif;">
                <p>Conteúdo da Página 2 em desenvolvimento...</p>
                <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                    <button onclick="mostrarConteudo('instr_violino')" style="padding: 10px 15px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">⇠ Voltar</button>
                </div>
            </div>
        `,
        pagina: "2"
    },

    "instr_viola": {
        keywords: ["viola", "clave de do", "cordas"],
        fase: "CORDAS", 
        titulo: "VIOLA - FUNDAMENTOS", 
        icone: "🎻",
        resumo: "Introdução à Viola e Clave de Dó.",
        html_content: `<p>Conteúdo da Viola em desenvolvimento...</p>`,
        pagina: "1"
    },

    "instr_flauta": {
        keywords: ["flauta", "madeiras", "embocadura"],
        fase: "MADEIRAS", 
        titulo: "FLAUTA - FUNDAMENTOS", 
        icone: "🎶",
        resumo: "Introdução à Flauta Transversal.",
        html_content: `<p>Conteúdo da Flauta em desenvolvimento...</p>`,
        pagina: "1"
  }
  });
