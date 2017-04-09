
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collection').del()
    .then(function () {
      // Inserts seed entries
      return knex('collection').insert([
        {id: 1, album: 'rowValue1', artist: 'stavroz'},
        {id: 2, album: 'rowValue2', artist: 'SaQi'},
        {id: 3, album: 'rowValue3', artist: 'DeVotchKa'}
      ]);
    });
};
