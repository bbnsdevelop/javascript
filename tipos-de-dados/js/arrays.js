// for ma literal

let array1 = [1, 2, 3, 4, 'Testando', true, 14.05];
array1.push("Ana"); // add no final do array
showArray(array1);

console.log('------------------------')

let arrayConstrutor = new Array(23, 25, 26, 29);
showArray(arrayConstrutor);

// verificar se existe o index dentro do array

let existe = new Boolean(10 in arrayConstrutor);

console.log(`Existe? ${existe == true ? "Existe" : "Não existe"}`);

function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let t = [10, 11, 12, 13, 14];
console.log(t);
t.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9); // adiciona na primeira posição do array
console.log(t);

// remove um elemento do array

let b = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(b);
console.log(delete b[3]); // remove porém deixa o array com o mesmo tamanho e com a posição deletada como undefined
console.log(b);
console.log(b.pop()); // deleta ultima posição do array
console.log(b.shift()); // deleta primeira posição do array
console.log(b);
console.log(b.splice(2, 1)); // deleta um elemento de uma  posição especifica onde o primeiro parametro é a posição e o segundo quantidade de elementos
console.log(b);

console.log('removendo elementos: ', b.splice(2, 3)); // deleta um elemento de uma  posição especifica onde o primeiro parametro é a posição e o segundo quantidade de elementos
console.log(b);

console.log('--------------------------------------');
// tornando a propriedade lenght congelada para não ocorrer a sobrescrita do tamanho do array
// b.lenght =2 -- pratica que pode perder informações
Object.defineProperty(b, 'length', {
    writable: false // congela a propriedade para ser apenas de leitura
});
b.length = 1
console.log(b.length);


// tipos de for
console.log('-----------TRABALHANDO COM FOR--------------------');
let nomes = new Array('Bruno', 'Tacy', 'Rafa', 'Lana', 'Tião', 'Maria', 'Jose', '', undefined, true);

console.log('1 -------------------------------');
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('2 -------------------------------');
for (const key in nomes) {
    console.log(nomes[key]);
}

console.log('3 -------------------------------');
for (const nome of nomes) {
    console.log(nome);
}

console.log('4 -------------------------------');
nomes.forEach(n => {
    console.log(n);
});

let clientes = [[1, 2, 3], ['a', 'b', 'c,']];


console.log('---------for multidimensional----------------------');

console.log(clientes[0][0]);


let produtos = [
    [{ id: 1, nome: 'Camisa 10' }, ['Amarelo', 'Preta', 'Vermelho']],
    [{ id: 2, nome: 'Camisa 1' }, ['Amarelo', 'Preta', 'Vermelho']],
];

console.log(`Produto: ${produtos[0][0].nome} - Cores: ${produtos[0][1].toString()}`);

console.log(Object.getOwnPropertyDescriptors(produtos[0][0]));
console.log(produtos[0][1]);

console.log('---------array-join--------------------');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);
console.log(numeros.join()); // separa por vigular se não passar parâmetro
console.log(numeros.join('-'));
console.log(numeros.join('/'));
console.log(numeros.join(' '));

// converter en string

let arrayMisto = [1, 'a', true, new Date()];

console.log(arrayMisto.toString());
console.log(arrayMisto.toLocaleString('pt-BR'));

console.log('---------array-metodos--------------------');
console.log('---------array-metodos-reverse-------------------');
// Array.reverse(), alterar a ordem dos elementos de um array - retorna o próprio array invertido
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros3.reverse());

// Array.sort(), ordena os elementos de um array convertendo para string e ordenando conforme tabela unicode

console.log('---------array-metodos-sort-------------------');
let arrayQualquer = ['A', 'b', 'C', 'a', 1, 2, 3, 8, 6, 5, 4, 'e', 80, 9];
let arrayQualquer2 = ['A', 'b', 'C', 'a','e','B'];
let numeros5 = [1, 2, 3, 8, 6, 5, 4, 80, 9];

console.log(arrayQualquer);
console.log(arrayQualquer.sort());
console.log(numeros5.sort((x, y) => { return x - y })); // função de callback com Arrow function
console.log(arrayQualquer2.sort((x, y) => { // usando o array arrayQualquer2, pois no array arrayQualquer não é possível fazer a função toLocaleLowerCase em numeros
    let tempX = x.toLocaleLowerCase('pt-BR');
    let tempY = y.toLocaleLowerCase('pt-BR');
    if (tempX < tempY) {
        return -1;
    } else if (tempX > tempY) {
        return 1;
    } else {
        return 0;
    }
}));
