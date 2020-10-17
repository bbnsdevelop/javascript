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