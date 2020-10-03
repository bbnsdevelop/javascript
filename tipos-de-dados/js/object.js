//literal
var itens = {
    nome: 'Refrigerante',
    preco: 6.50,
    ativo: true,
    detalhes: {
        detalhe:'carrefa retornavel'
    }
};


//construtor

var pessoa = new Object();
pessoa.nome = "Jose";
pessoa.idade = 20;
pessoa.filhos = [{nome: 'Ze'}, {nome:'Maria'}, {nome: 'tiao'}]

console.log(pessoa.filhos[0].nome);
console.log(pessoa.filhos[1].nome);

for (var i =0; i < pessoa.filhos.lenght; i++){
    console.log(pessoa.filhos[i]);
    console.log("\n")
}

console.log(pessoa.filhos);