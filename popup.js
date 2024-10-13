// Gerenciamento de tarefas
document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const taskInput = document.getElementById("task-input").value;

    if (taskInput === "") return;

    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput));
    taskList.appendChild(li);

    // Limpar input
    document.getElementById("task-input").value = "";

    // Simular resposta da IA
    generateSuggestions(taskInput);
});

// Função simulada para gerar sugestões
function generateSuggestions(task) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = `<p>Suggestion from AI: Break this task into smaller steps!</p>`;
}
