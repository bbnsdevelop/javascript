var regex1 = /js/;
var regex2 = new RegExp("Java");

var curso = new String("Curso de Java ou de js");

console.log(regex1.test(curso));
console.log(regex2.exec(curso));