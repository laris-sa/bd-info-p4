const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Tarefas {
  static async criarTarefa(tarefas) {
    try {
      const [id] = await database('tarefas').insert(tarefas);
      console.log('Tarefa criada com ID:', id);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarTarefa(id, tarefas) {
    try {
      const result = await database('tarefas').where({ id }).update(tarefas);
      console.log('Tarefa atualizada:', result);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterTarefa(id) {
    try {
      const tarefa = await database('tarefas').where({ id }).first();
      console.log('Tarefa encontrada:', tarefa);
    } catch (error) {
      console.error('Erro ao obter tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirTarefa(id) {
    try {
      const result = await database('tarefas').where({ id }).del();
      console.log('Tarefa excluída:', result);
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Tarefas;
