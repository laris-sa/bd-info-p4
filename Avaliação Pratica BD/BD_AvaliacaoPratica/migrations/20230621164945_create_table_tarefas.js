exports.up = function(knex) {
    return knex.schema
      .createTable('tarefas', function(table) {
        table.increments('id');
        table.string('descrição').notNullable();
        table.string('status').notNullable();
        table.string('responsável').notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tarefas');
  };






/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};



