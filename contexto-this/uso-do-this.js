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


console.log('------------------this-com-callback-----------------------')

function passos() {
    console.log('this em escopo de função com callback', this);
    console.log('is true window? ', this == window); 
    console.log('this.nome', this.nome); 
}

let pessoaCallback = {
    nome: 'Tiãoooooooooo',
    andar: function(callback){
        console.log('this em escopo de objeto método callback', this);
        console.log('is true window? ', this == window);
        callback.call(this); // se executar callback(); apenas a função o this será de escopo window, então usa o método .call passando o this que neste momento é a função pai
    }
}

pessoaCallback.andar(passos);


console.log('------------------this-com-eventos-----------------------')

let thisButton = document.getElementById('botao');
thisButton.addEventListener('click', function(){
    console.log('meu click thisButton', this);
}, false)


let Windowbutton = document.getElementById('botao');
Windowbutton.addEventListener('click', function(){
    console.log('meu click Windowbutton', this);
}.apply(this), false)

function Livro (){
    this.pagina = 1;

    setTimeout(function(){
        console.log('pagina atual', this.pagina);
    }.bind(this));
    setInterval(() => {
        console.log('pagina ++', this.pagina);
        this.pagina ++;
    }, 2000);
}

let livro = new Livro();