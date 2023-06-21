exports.up = function(knex) {
    return knex.schema
      .createTable('projeto', function(table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('descrição').notNullable();
        table.string('prazo').notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projeto');
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
