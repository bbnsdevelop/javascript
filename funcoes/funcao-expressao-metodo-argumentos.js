function retornaDataAtualBr() {
    return new Date().toLocaleString('pt-BR');
}
console.log(retornaDataAtualBr());

// expressão
let elevarAoQuadrado = (n) => { return n * n }

console.log(elevarAoQuadrado(7));

let multiplicadoEElevado = function () { return elevarAoQuadrado(5) * 2; }();
console.log(multiplicadoEElevado);

let produto = {
    qtd: 10,
    valor: 30,
    total: function () {
        return this.qtd * this.valor;
    }
}

console.log(produto.total());


console.log('------------------------------------------');
//Parâmetros e argumentos de função
/*Parâmetros são variável nomeadas de função que refere-se os valores que a mesma
deve receber, são informados na declaração da função entre () separados por vígula*/
/*Argumentos são valores que são passados para uma função no ato da invocação
da mesma, são informados entre () separados por vírgula*/
/*Se no ato de chamar uma função passar menos argumentos do que a quantidades de 
parâmetros esperados, os parâmetros que faltarem valores assumirão o valor undefined*/

//mais parâmetros que argumentos
function nomeCompletoUpperCase(nome1, nome2, nome3) {
    //if(nome3 === undefined) nome3 = "";
    nome3 = nome3 || "";
    let nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    return nomeCompleto.toUpperCase();
}

//console.log(nome2);

console.log("upperCase:", nomeCompletoUpperCase('Prof. Pasquale', 'jr'));

//mais argumentos que parâmetros
function nomeCompletoUpperCaseV2(nome1, nome2, nome3) {
    let nomeCompleto = "";

    if (arguments.length > 3) {
        for (var indice in arguments) {
            nomeCompleto += " " + arguments[indice];
        }
    } else {
        nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    }

    return nomeCompleto.toUpperCase();
}

//console.log("nomeCompletoUpperCaseV2(...):",
//nomeCompletoUpperCaseV2('Maria', 'Paula', 'Ferreira', 'Silva'));
console.log("nomeCompletoUpperCaseV2(...):",
    nomeCompletoUpperCaseV2('Maria', 'Paula', 'Ferreira'));


console.log('---------------Funções de Primeira Classe---------------------------');
//Funções de Primeira Classe(First-Class Function)
//Cidadão de primeira Classe (First-Class Citizen)
//As funções em JavaScript são tratadas como objeto/valor;
/*
//Algumas coisas que podemos fazer como uma função em JS:
- Atribuir a função a uma variável ou propriedade de objeto;
— Passar uma função argumento para parâmetro de outra função;
— Retornar a função como valor para um chamador de outra função;
— Armazenar a função em uma estrutura de dados como o array ou objeto;
*/

//- Atribuir a função a uma variável ou propriedade de objeto;
var msg = function () { console.log("Olá, seja bem vindo ao curso JS!") };
msg();

//— Passar uma função argumento para parâmetro de outra função;
function somar(a, b) { return a + b };
function subtrair(a, b) { return a - b };

function calculadora(fn, v1, v2) {
    //regras....
    return fn(v1, v2)
}

console.log('calculadora(somar, 50, 70)', calculadora(somar, 50, 70));
console.log('calculadora(subtrair, 100, 70)', calculadora(subtrair, 100, 70));

console.log('Retornar a função como valor para um chamador de outra função');
function somar(a, b) { return a + b };
function subtrair(a, b) { return a - b };

function calculadora(operacao) {
    if (operacao == 'somar') {
        return somar;
    } else if (operacao == 'subtrair') {
        return subtrair
    } else {
        return 'Operação inválida.';
    }
}

var retornoOperacao = calculadora('somar');
console.log('retornoOperacao', retornoOperacao);
console.log('retornoOperacao', retornoOperacao(33, 20));

console.log('Armazenar a função em uma estrutura de dados como o array ou objeto');
var array = [function (nome) { return "Oi " + nome + "!" }];
console.log(array[0]('Fernanda'));

var objeto = { msg: function (nome) { return "Oi " + nome + "!" } };
console.log(objeto.msg("Paulo"));