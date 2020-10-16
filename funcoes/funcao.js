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



console.log('------------------------------------------------------')
console.log('----------------------Construtor----------------------')
console.log('------------------------------------------------------')

/*Construtor é uma função que trabalha junto com o operador new com objetivo de servir como 
um tipo de classe para criar/instanciar objetos personalizados no JavaScript com propriedades e
métodos específicos. Desta forma podemos ter um molde para criar objetos personalizados de
forma simples sem precisar repetir código*/
//Exemplos de construtores já existentes no JavaScript: Object, Function, Array, Number...

//Exemplo 1
function Carro(){
    //....
}

var carro = {};
var objCarro1 = new Carro();
var objCarro2 = new Carro;
var objCarro3 = objCarro2;

console.log('objCarro1:', objCarro1);
console.log('objCarro2:', objCarro2);
console.log('objCarro1 == objCarro2:', objCarro1 == objCarro2);
console.log('objCarro2 == objCarro3:', objCarro2 == objCarro3);
console.log('typeof objCarro1:', typeof objCarro1);
console.log('objCarro1 instanceof Carro:', objCarro1 instanceof Carro);
console.log('objCarro1.constructor:', objCarro1.constructor);
console.log('objCarro1.constructor == Carro:', objCarro1.constructor == Carro);

//Exemplo 2
function Pessoa(){
    this.nome;
    this.cpf;
    this.getNomeCpf = function(){
        return "Nome: " + this.nome + " - CPF: " + this.cpf;
    }
}

var objPessoa = new Pessoa();
objPessoa.nome = "Maria";
objPessoa.cpf = '123456676543';

console.log('objPessoa:', objPessoa);
console.log(objPessoa.getNomeCpf());

//Exemplo 3
function Pessoa2(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    this.getNomeCpf = function(){
        return "Nome: " + this.nome + " - CPF: " + this.cpf;
    }
}

var objPessoa2 = new Pessoa2('Pedro', '34567898765');
//objPessoa.nome = "Maria";
//objPessoa.cpf = '123456676543';

console.log('objPessoa2:', objPessoa2);
console.log(objPessoa2.getNomeCpf());