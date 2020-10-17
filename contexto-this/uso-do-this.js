console.log('------------------------------------------------------')
console.log('-------------------------this-------------------------')
console.log('------------------------------------------------------')

console.log('is true? ', this == window);
console.log(this);


function thisEmEscopoDeFuncao(){
    console.log('this em escopo de função', this);
    console.log('is true? ', this == window);

    function fnEncadeadaInterna(){
        console.log('this em escopo de função interna', this);
        console.log('is true? ', this == window);
    }
    fnEncadeadaInterna();
    
}
thisEmEscopoDeFuncao(); // window que está invocando

console.log('-----------------------------------------------------')

let nome = 'Pedro';

function exibirNome() {
    let nome1 = 'Maria';
    console.log(this.nome1)
    console.log(nome)
}
exibirNome();


let pessoa = {
    nome: 'João',
    exibirThis: function(){
        console.log('this em escopo de objeto', this);
        console.log('is true window? ', this == window);
        console.log('is true pessoa? ', this == pessoa);
    }
}
pessoa.exibirThis();


console.log('------------------Pessoa-Construtor------------------------')

function PessoaContrutor (n){
    this.nome = n;
    this.exibir = function(){
        console.log('this em escopo de objeto contrutor', this);
        console.log('is true window? ', this == window);
        console.log('this.nome ', this.nome);
    }
}

let p = new PessoaContrutor('José');
p.exibir();

let exibirP = p.exibir;
console.log('exibir pessoa: ', exibirP);
exibirP();

console.log('------------------Pessoa-Construtor-bind-----------------------')
exibirP.bind(p)();