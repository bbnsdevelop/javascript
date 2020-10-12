// for ma literal

let array1 = [1, 2, 3, 4, 'Testando', true, 14.05];
array1.push("Ana"); // add no final do array
showArray(array1);

console.log('------------------------')

let arrayConstrutor = new Array(23, 25, 26, 29);
showArray(arrayConstrutor);

// verificar se existe o index dentro do array

let existe = new Boolean( 10 in arrayConstrutor);

console.log(`Existe? ${ existe == true ? "Existe":"Não existe" }`);

function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let t = [10, 11,12,13,14];
console.log(t);
t.unshift(1,2,3,4,5,6,7,8,9); // adiciona na primeira posição do array
console.log(t);

// remove um elemento do array

let b = ['a','b', 'c','d','e', 'f', 'g', 'h'];
console.log(b);
console.log(delete b[3]); // remove porém deixa o array com o mesmo tamanho e com a posição deletada como undefined
console.log(b);
console.log(b.pop()); // deleta ultima posição do array
console.log(b.shift()); // deleta primeira posição do array
console.log(b);
console.log(b.splice(2, 1)); // deleta um elemento de uma  posição especifica onde o primeiro parametro é a posição e o segundo quantidade de elementos
console.log(b);

console.log('removendo elementos: ',b.splice(2, 3)); // deleta um elemento de uma  posição especifica onde o primeiro parametro é a posição e o segundo quantidade de elementos
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
let nomes = new Array ('Bruno', 'Tacy', 'Rafa', 'Lana', 'Tião', 'Maria', 'Jose');

console.log('1 -------------------------------');
for(let i = 0; i < nomes.length; i++){
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
nomes.forEach( n =>{
    console.log(n);
});