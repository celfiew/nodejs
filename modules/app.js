const os = require('os');
const fs = require('fs');

const mi = require('./mito.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();


// mi.saludar();
// console.log(mi.subs);
//let rspta = mi.sumar(2,3);
setTimeout(() => {
    console.log("terminé")
}, 2000);
// let rspta = mi.mostrar(10)
// console.log(rspta);
// let cpu_string = JSON.stringify(cpu)

// fs.appendFile('mitocode.txt',`Información del cpu: ${cpu_string} `, function(error){
//     if(error){
//     console.log('error al crear archivo');
//     }
// });
