const Projeto = require('./models/Projeto');
const Tarefas = require('./models/Tarefas');

// Exemplo de uso
const exemplodaMinhaTarefa = {
  descrição: 'MinhaTarefa Atualizada',
  status: 'Em andamento Atualizada',
  responsável: 'Larissa Atualizada'
};

Tarefas.criarTarefa(exemplodaMinhaTarefa);
Tarefas.obterTarefa(exemplodaMinhaTarefa);
Tarefas.atualizarTarefa(exemplodaMinhaTarefa);
Tarefas.excluirTarefa(exemplodaMinhaTarefa);


