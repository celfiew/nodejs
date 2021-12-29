var https = require("https");
var username = 'celfiew';

var options = {
host: 'api.github.com',
path: '/users/' + username,
method: 'GET',
headers: {'user-agent': 'node.js'}
};

let request = https.request(options, function(response){
let body = '';
response.on("data", (out) => {
    body += out;
});

response.on("end", function(){
    let json = JSON.parse(body);
    console.log(json);
    console.log(json.id)
    });
});

request.on('error', (e)=>{
    console.log(e)
});

request.end();