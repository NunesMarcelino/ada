//como importar uma dependencia?
require('dotenv').config({ path: "../.env" })

const express = require('express') // assim que importa
const app = express()
const porta = 4000
const usuario = process.env.USUARIO
//const porta = process.env.PORTA
//const cors = require('cors')
console.log(4000);


app.get("/",(req, res)=>res.send(`A area é ${areaCirculo(51)}`)) //rota get na raiz

app.listen(porta,(req, res)=> console.log(`Servidor iniciado na porta: ${porta}`))
/*
function area(raio){                        //MANEIRA DE ESCREVER A FUNÇÃO
    let pi = 3.14;
    let area = pi * raio * raio;
    return area;
}
*/
const areaCirculo = raio =>{                     //A MESMA FUNÇÃO MAS EM AERO FUNCTION
    pi = 3.14;
    return pi*raio*raio;
}

console.log(areaCirculo(51)) 