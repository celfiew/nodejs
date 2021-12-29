import request from 'request';
import { argv } from 'yargs';

let accion = argv.accion;
let url = `https://swapi.dev/api/${accion}`;

request({
    url: url,
    json: true
},(error, response, body)=>{
    if(error){
        console.log('servicio no disponible');
    }else if(body.detail === 'Not found'){
        console.log('No hay datos a mostrar');
    } else {
        console.log(JSON.stringify(body, undefined, 2));
        console.log(JSON.stringify(body.climate));
        console.log(JSON.stringify(body.detail));
        console.log(JSON.stringify(`nombre:  ${body.name}`));
        console.log(JSON.stringify(`habitantes: ${body.population}`));
        console.log(JSON.stringify(body.residents[0]));
        console.log(JSON.stringify(body.films[2]));
    }
    });