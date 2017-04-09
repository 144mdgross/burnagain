var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {

  knex('collection')
  .then(cd => {
    res.render('index', { cd: cd });
  })
  .catch(err => {
    console.error(err);
  })

});

router.get('/:id', (req, res, next) => {
  let id = +req.params.id

  knex('collection')
  .where('id', id)
  .then(cd => {
    res.render('single', {single: cd})
  })
})

router.post('/', (req, res, next) => {
  knex('collection')
  .insert([{
    artist: req.body.artist,
    album: req.body.album
  }], '*')
  .then(newCD => {
    console.log(newCD);
    res.redirect('/')
  })
  .catch(err => {
    console.error(err);
  })
})

router.patch('/:id', (req, res, next) => {
  let id = +req.params.id

  knex('collection')
  .where('id', id)
  .update({
    artist: req.body.artist,
    album: req.body.album
  })
  .then(update => {
    console.log(update, "success");
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
