exports.seed = function(knex) {
    return knex('tarefas')
      .del()
      .then(function() {
        return knex('tarefas').insert([
          { descrição: 'descrição da tarefa 1', status: 'em andamento', responsável: 'Larissa' },
          { descrição: 'descrição da tarefa 2', status: 'para fazer', responsável: 'Larissa' },
        ]);
      });
  };