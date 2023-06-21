exports.seed = function(knex) {
    return knex('projeto')
      .del()
      .then(function() {
        return knex('projeto').insert([
          { nome: 'Projeto 1', descrição: 'descrição projeto 1', prazo: '21/06/2023' },
          { nome: 'Projeto 2', descrição: 'descrição projeto 2', prazo: '22/06/2023' },
        ]);
      });
  };
  