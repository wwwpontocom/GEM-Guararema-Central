Object.assign(BIBLIOTECA_LIVRO, {
    "dia": {
        keywords: ["dia", "agenda", "calendario", "turma", "horario"],
        fase: "Cronograma", 
        titulo: "AGENDA E TURMAS", 
        icone: "📅",
        resumo: "Cronograma mensal das turmas e acesso ao calendário de alunos.",
        html_content: `
           <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Segunda-feira</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Atividade</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">1ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 1 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">2ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 2 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">3ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Grupo 3 - Teoria</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">4ª Segunda</td><td style="border: 1px solid #ddd; padding: 8px;">Ensaio Geral (Auto-Grupo 3)</td></tr>
        </tbody>
    </table>

            <div style="text-align: center; padding: 15px; background: #eef4fb; border-radius: 8px;">
                <p><b>Controle de Frequência</b></p>
                <button onclick="abrirCalendarioEscolar()" style="padding: 10px; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    📅 Abrir Calendário de Alunos
                </button>
            </div>
        `,
        pagina: "Agenda"
    }
});
