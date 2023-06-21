const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Projeto {
  static async criarProjeto(projeto) {
    try {
      const [id] = await database('projeto').insert(projeto);
      console.log('Projeto criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarProjeto(id, projeto) {
    try {
      const result = await database('projeto').where({ id }).update(projeto);
      console.log('Projeto atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterProjeto(id) {
    try {
      const projeto = await database('projeto').where({ id }).first();
      console.log('Projeto encontrado:', projeto);
    } catch (error) {
      console.error('Erro ao obter projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirProjeto(id) {
    try {
      const result = await database('projeto').where({ id }).del();
      console.log('Projeto excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Projeto;
