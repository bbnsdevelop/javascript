// variaveis

var nome = "Mestre";
var sobreNome = "Jedi";


function exibirNome(){
    console.log(`Nome é: ${nome} ${sobreNome}`);
}


function exibirFuncao(){
    console.log(`v2 - Nome é: ${nome} ${sobreNome}`);
}


function eventClick(){
    alert(`Nome é: ${nome} ${sobreNome}`);
}

function sejaBemVindo(){
    console.log("Seja bem vindo a Formação JavaScript");
}

// POO
var disciplina = {
    curso: "Formação JavaScript",
    horario: "19:00"
};

var objProfessor = {
    nome: "Jedi",
    sobreNome: "Mestre",
    
    // metodo
    ministraAula: function(){
        disc = disciplina.curso;
        console.log(`${disc}`);
    }
};


objProfessor.ministraAula();
console.log(objProfessor.nome)
console.log(objProfessor.sobreNome)

console.log("Chamando funções");
// chamada de funções
exibirNome();
sejaBemVindo();
