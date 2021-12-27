
const _ = require('lodash');
const argv = require('yargs').argv;


// let comando = process.argv[2];

if(argv.usuario === 'desktop'){

        let x = {'nombre':'César'}
        let y = {'apodo': 'mono'}
        let z = [
            { nombre: 'César', apellido: 'fierro', eded: 28},
            { nombre: 'Mono', apellido: 'Cesar', eded: 28 }
        ]
// // let resultado = _.assign(x,y);
// // console.log(resultado);

// //_.times(3, ()=> console.log('Hola'))

let resultado = _.find(z, {nombre: 'César', apellido: 'fierro'});
console.log(resultado);
       
    } else{
        console.log('usuario no valido')
    }



