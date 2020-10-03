var date1 = new Date(2020, 10-1, 03, null, null, null);

var date2 = new Date(2020, 10-1, 02, null, null, null);

console.log(date1);
console.log(date2);

console.log(date1 - date2);


const diff = Math.abs(date1.getTime() - date2.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
console.log(`Entre ${date1} e ${date2}  já se passaram ' ${days} ' dias`);