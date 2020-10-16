console.log('------------------------------------------------------')
console.log('-----Função: É um bloco de código JavaScript definido uma fez;-----')
console.log('------------------------------------------------------')
/*
Função:
É um bloco de código JavaScript definido uma fez;
Pode ser chamado para execução várias vezes;
Uma função pode receber parâmetros; 
Uma função pode retornar algo;
Uma função denominada construtora, serve como molde(classe) para instanciar objetos; 
*/

//declaração de forma literal, sintaxe:
function mensagem(){
    //escopo
    console.log('Olá Padawan!');
}

//executando a função(chamar/invocar);
mensagem();

//pode receber parâmetros
function boasVindas(nome){
    console.log("Olá", nome);
}

//chamar
boasVindas("Paulo");

//uma função pode retornar algo
function soma(valor1, valor2){
    return valor1 + valor2;
}

var retorno1 = soma(10, 30);
console.log('retorno1', retorno1);

//pode retornar undefined
function retornoUndefined(){
    console.log("esta função não retorna nada");
}

var retorno2 = retornoUndefined();
console.log("retorno2", retorno2);


console.log('------------------------------------------------------')
console.log('-Função anônima é uma forma definir uma função sem nome, neste formato não pode ser invocada diretamente-')
console.log('------------------------------------------------------')

/*Função anônima é uma forma definir uma função sem nome, neste formato não pode ser invocada 
diretamente*/
/*Como usar:
- Ideal para armazenar em variáveis, objetos e array;
- Usar como callback;
- Manipulador de eventos;
- IIFE;
- Retorno de função*/
/*Vantagens---------------------------------------------------
- Função anônima não irá poluir o escopo global;
- Não pode ser chamada diretamente, evitando que qualquer pessoa possa chamar via console do 
browser;
- Simplicidade na escrita e proposito de uso;
*/
/*Desvantagens-------------------------------------------------
- Dificulta a reutilização de código;
- São difíceis de debugar;
*/

//declarar 
function ola(){
    console.log('olá')    
}
ola();

var minhaFn = function(){
    console.log('minha fn')    
};
minhaFn();

//window.onload = function(){ console.log('página carregada.') }

var carro = {marca: 'abc', ligar: function(){console.log('carro ligado')}}
carro.ligar();

(function(){
    console.log('executando uma IIFE');
})();

/*setTimeout(function er(){
    throw new Error('deu um erro :(');
})*/
setTimeout(function(){
    //throw new Error('deu um erro :(');
})