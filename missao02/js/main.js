let missao = "teste";
console.log(`missao ${missao} type ${typeof missao}`)


let txt = new String("Era uma vez");
console.log(`missao ${txt} type ${typeof txt}`)

// cliente
let nome = "Pedro";
let salario = 3000.00
let dataNascimento = new Date("1992-03-31");
let ativo = true;

let showDadosCliente = function(){
    console.log(`Nome: ${nome}, salário: ${salario}, data nascimento: ${dataNascimento}, status: ${ativo == true? "Ativo":"Inativo"}`);
}
showDadosCliente();


let regx = new RegExp("Estrelar");

let txt2 = "Na missão Estrelar";

console.log(regx.test(txt2))
console.log(regx.exec(txt2))


try {
    for(let i = 30, c = 0; i >= 0; i--, c++){
        if(c == 29){
            throw new Error("Lançando um erro");
        }
        console.log(`decrementando valor de i: ${i}`);
    }
} catch (error) {
    console.log(`Erro: ${error.name}`);
    console.log(`Erro: ${error.message}`);
    console.log(`Erro: ${error.stack}`);
}finally{
    console.log("finalizou o try catch")
}

function enviarDadosForm(formBoot){
    console.log(`Tipo original: ${ Object.prototype.toString.call(formBoot)}`);
    let objForm = new Object();
    objForm.nome = formBoot.nomeBoot.value;
    objForm.emailBoot =  formBoot.emailBoot.value;
    objForm.emailPromocaoBoot = formBoot.emailPromocaoBoot.checked;
    objForm.contatoRarioTelBoot = formBoot.contatoRarioTelBoot.checked;
    objForm.contatoRarioEmailBoot = formBoot.contatoRarioEmailBoot.checked;
    objForm.selectEstadoBoot = formBoot.selectEstadoBoot.value;
    console.log(objForm);
    preencherFormHtml(objForm);
}
function preencherFormHtml(objForm){
    let formHtml = document.querySelector("#formHtml");
    formHtml.nomeHtml.value = objForm.nome;
    formHtml.emailHtml.value = objForm.emailBoot;
    formHtml.emailPromocao.checked = objForm.emailPromocaoBoot;
    formHtml.contatoRarioTelHtml.checked = objForm.contatoRarioTelBoot;
    formHtml.contatoRarioEmailHtml.checked = objForm.contatoRarioEmailBoot;
    formHtml.selectEstadoHtml.value = objForm.selectEstadoBoot;
    resetFormBoot();
}
function resetFormBoot(){
    let formBoot = document.querySelector("#formBoot");
    formBoot.nomeBoot.value = null;
}
