
exports.up = function(knex) {
  return knex.schema.createTable('expenses', function(tbl){
    tbl.increments();
    tbl.string('description', 256).notNullable();
    tbl.string('location', 128).notNullable();
    tbl.integer('tripId').notNullable();
    tbl.integer('amount').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dishes');
};
