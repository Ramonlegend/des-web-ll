const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número para ver sua tabuada: '));

if (!isNaN(numero)) {
    console.log(`\nTabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} X ${numero} = ${i * numero}`);
    }
} else {
    console.log('Por favor, insira um número válido.');
}
//aqui na minha máquina, o node só executa o script se eu usar o comando node script.cjs, se eu usar node script.js ele dá erro
//então tive que renomear o aquivo para script.cjs para poder rodar o script.	


//MENSAGEM DO ERRO:
//ReferenceError: require is not defined in ES module scope, you can use import instead
//This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\Ramon\Desktop\aula-desWeb\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.