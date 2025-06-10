import { Tarefa } from '../components/task.js';

const tarefas = [
    {
        'id': 'a1',
        'titulo': 'Minha Tarefa',
        'descricao': 'Tarefa criada',
        'criacao': '10/06/2025 - 14:42',
        'status': 1
    },
    {
        'id': 'b2',
        'titulo': 'Estudar',
        'descricao': 'Estudar Javascript',
        'criacao': '10/06/2025 - 14:42',
        'status': 0
    },
    {
        'id': 'c3',
        'titulo': 'Estudar História',
        'descricao': 'Estudar História do Brasil',
        'criacao': '10/06/2025 - 14:43',
        'status': 1
    },
    {
        'id': 'd4',
        'titulo': 'Estudar Geografia',
        'descricao': 'Assunto: Hidrografia',
        'criacao': '10/06/2025 - 14:45',
        'status': 0
    },
    {
        'id': 'e5',
        'titulo': 'Estudar Filosofia',
        'descricao': 'Assunto: Pré Socráticos',
        'criacao': '10/06/2025 - 14:45',
        'status': 0
    },
    {
        'id': 'g6',
        'titulo': 'Estudar Matemática',
        'descricao': 'Assunto: Funções',
        'criacao': '10/06/2025 - 14:45',
        'status': 1
    }


]

const tarefasOrdenadas = tarefas.sort((a, b) => a.status - b.status);

function renderizarTarefas() {
    let container = document.getElementById('task_container');

    container.innerHTML = tarefasOrdenadas.map(tarefa => Tarefa(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.criacao, tarefa.status)).join('')

    let botoesDeletar = document.querySelectorAll('.delete-btn');
    
    botoesDeletar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            removerTarefaPorId(id)
        })
    })
}

function removerTarefaPorId(idAlvo) {
    const index = tarefasOrdenadas.findIndex(tarefa => tarefa.id === idAlvo);
    if (index !== -1) {
        tarefas.splice(index, 1);
        renderizarTarefas();
        console.log(`Tarefa com ID ${idAlvo} removida.`);
    } else {
        console.log(`Tarefa com ID ${idAlvo} não encontrada.`);
    }
}



renderizarTarefas();
