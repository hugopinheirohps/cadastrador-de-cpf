// 1: Capturar o CPF digitado pelo usuário

var digitado = process.argv[2];
console.log("CPF digitado: "+digitado);

// 2: Verificar se o CPF capturado é válido ou não
const Cpf = require("cpf-check");
//console.log(CPF.validate(digitado));

// 3a: Se for válido, salvar e mandar msg de sucesso

if(Cpf.validate(digitado))
{
    console.log(`O CPF ${digitado} é valido!`);
    const fs = require('fs');
    //fs.writeFileSync('CPFs', digitado, { flag: 'a' });
    //fs.appendFileSync('CPFs', digitado);
    fs.appendFileSync('CPFs', `${digitado}\n`);
    console.log("Gravado com sucesso.");
}
else
{
    //console.log("O CPF não é valido.");
    console.log(`O CPF ${digitado} não é valido.`);    
}


// 3b: Se não for válido, mandar msg de falha



