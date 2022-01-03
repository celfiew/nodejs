var express = require('express');
var router = express.Router();

let personas = [
  {
    id: 1,
    nombre: 'César',
  },
  {
    id: 2,
    nombre: 'Mauricio',
  },
  {
    id: 3,
    nombre: 'Code',
  },
];

router.get('/', (req, res) => {
  res.render('index', {
    titulo: 'pug',
    mensaje: 'César | code',
    personas: personas,
  });
});

module.exports = router;
