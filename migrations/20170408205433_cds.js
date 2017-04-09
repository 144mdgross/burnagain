'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('collection', table => {
    table.increments()
    table.string('album')
    table.string('artist')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('collection')
};
