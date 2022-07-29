// 1: Capturar o CPF digitado pelo usuário

var digitado = process.argv[2];
console.log("CPF digitado: "+digitado);

// 2: Verificar se o CPF capturado é válido ou não
const Cpf = require("cpf-check");
//console.log(CPF.validate(digitado));

// 3a: Se for válido, salvar e mandar msg de sucesso

if(Cpf.validate(digitado))
{
    let promises = require('promises');
    let fs = require('fs');
    let leituraArquivo = promises.wrap(fs.readFile);

    //console.log(leituraArquivo.data);

    let gravaArquivo = promises.wrap(fs.writeFile);    
    gravaArquivo('CPFs.txt', digitado, { flags: 'a' }).then(function() {
        // se precisar fazer algo
    }, function(err) {
        // pega o erro.
    });
    console.log("O CPF é valido.");
}
else
{
    //console.log("O CPF não é valido.");
    console.log(`O CPF ${digitado} não é valido.`);    
}


// 3b: Se não for válido, mandar msg de falha



