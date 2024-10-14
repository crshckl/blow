const apiKey = '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';  // Sua chave API

// Função para fazer uma requisição à OpenAI
async function getGPTSuggestions(prompt) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",  // Modelo de IA
            prompt: prompt,
            max_tokens: 100  // Define o tamanho da resposta
        })
    });

    const data = await response.json();
    return data.choices[0].text;
}

// Exemplo de como utilizar essa função
document.getElementById('generate-suggestion').addEventListener('click', async function() {
    const taskInput = document.getElementById('task-input').value;
    const prompt = `Give me a suggestion for the following task: ${taskInput}`;
    const suggestion = await getGPTSuggestions(prompt);
    
    // Exibir sugestão na interface
    document.getElementById('suggestion').textContent = suggestion;
});

}
