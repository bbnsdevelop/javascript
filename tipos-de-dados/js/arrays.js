// for ma literal

let array1 = [1, 2, 3, 4, 'Testando', true, 14.05];
array1.push("Ana");
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