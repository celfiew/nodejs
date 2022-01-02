const express = require('express');
const app = express();

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

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('template', {
    titulo: 'pug',
    mensaje: 'César | code',
    personas: personas,
  });
});

app.listen(3000, () => {
  console.log('corriendo en el puerto 3000');
});
