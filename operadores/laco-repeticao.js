let array = new Array('a','b', 'c')

for(let i = 0; 10 > i; i++){
    console.log(i)
}

console.log('##################')

for(let i = 0; array.length > i; i++){
    console.log(array[i])
}


let count = 0;

while (count < 10) {
    count++
    console.log(` while ${count}`);
}


count = 11;
do{
    console.log(`faça primeiro para depois executar a condição`)
    console.log(`valor de count ${count} expressão: ${count < 10}`)
}
while (count < 10) {
    count++
    console.log(`do while ${count}`);
}
console.log(`novo valor de count: ${count} mesmo não atendendo a condição ele entou no while`) 