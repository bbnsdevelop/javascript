console.log('------------------------------------------------------');
console.log('-------------------------map-------------------------');
console.log('------------------------------------------------------');



let nome = 'Pedro';
let numero = 1234;
let booleano = true;
let alfabeto = ['a','b','c','d'];
let hello = function (){ console.log('hello, fui chamado')};
let regExp = /teste/gi;

const map = new Map();

map.set('umNome',nome);
map.set('umNumero',numero);
map.set('verdadeiro',booleano);
map.set('letras',alfabeto);
map.set('funcao',hello);
map.set('expressao',regExp);

let retorno = map.set('false',false);
console.log('O que retorna? ',retorno);

retorno.set('novaChave', 'Testando o que vai aparecer no map');
console.log('Como fica o map anterior? ',map); // no map tem a novaChave, pois é guardado a referencia de memoria


console.log('--------------recuperando-valor-map---------------------');

const nomeRecuperado = map.get('umNome');
console.log('Nome: ',nomeRecuperado);

const novaChave = map.get('novaChave');
console.log('novaChave: ',novaChave);

console.log('tamanho: ',map.size);


console.log('--------------deletando-valor-map---------------------');

let deletado = map.delete('umNome');
console.log('foi deletado? ', deletado);


console.log('--------------interando-valor-map---------------------');
map.forEach(m =>{
    console.log('chamdno forEach: ',m);
    if(typeof m == 'function'){
        m();
    }
});


console.log('--------------has-map---------------------');
console.log('existe umNome no map? ',map.has('unNome'));
console.log('existe funcao no map? ',map.has('funcao'));


console.log(map.clear());
console.log(map.size);
