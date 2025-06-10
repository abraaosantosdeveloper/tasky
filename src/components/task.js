export function Tarefa(id, titulo, descricao, criacao, status) {
    return `
        <div class="tarefa">
            <div class="task-col-0">
                <input type="checkbox" name="status-task" id="task-status" class="task-checkbox" 
                ${status === 1 ? 'checked' : ''}>
            </div>
            <div class="task-col-1">
                <h2 class="titulo">${titulo}</h2>
                <p class="descricao">${descricao}</p>
                <small class="data-criacao">${criacao}</small>
            </div>
            <div class="task-col-2">
                <button class="delete-btn" data-id="${id}">Delete</button>
            </div>

        </div>`;
};