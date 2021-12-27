console.log(module);

let subscriptores = 22000;

// module.exports.saludar = function(){
//     console.log('suscribete al canal Coder');
//     };

//     module.exports.subs = subscriptores;

module.exports = {
    subs: subscriptores,
    saludar: () => {
        console.log('hola coder');
    },
    sumar: (a, b)=> a + b,
    mostrar: a => a +10
}


