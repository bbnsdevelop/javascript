var selectEstadoBoot = window.document.getElementById("selectEstadoBoot");

var nomeBoot = window.document.getElementById("nomeBoot");


function selecionarCampos() {
    nomeBoot.value = "Jose";
    console.log(`typeOf ${typeof nomeBoot}`);
    console.log(`object call ${Object.prototype.toString.call(nomeBoot)}`);
    console.log(`value ${nomeBoot.value}`);

    //console.log(`disable `);
    //nomeBoot.disabled = true;
    console.log(`readOnly `);
    nomeBoot.readOnly = true;
}

function selecionarEstadoBoot() {
    console.log(`object call ${Object.prototype.toString.call(selectEstadoBoot)}`);
    console.log(`value ${selectEstadoBoot.value}`);
    console.log(`value ${selectEstadoBoot.selected.Index}`);
    selectEstadoBoot.selectedOptions
    selectEstadoBoot.selectedOptions.item(0);
    selectEstadoBoot.selectedOptions[1]
}

contatoRarioEmailBoot = document.querySelector("#contatoRarioEmailBoot");

function selecionarcontatoRarioEmailBoot() {
    console.log(`object call ${Object.prototype.toString.call(contatoRarioEmailBoot)}`);
    console.log(`value ${contatoRarioEmailBoot.checked}`);
    console.log(`tagName ${contatoRarioEmailBoot.tagName}`);
    console.log(`type ${contatoRarioEmailBoot.type}`);
}

contatoRarioBoot = document.querySelector("[name=contatoRarioBoot]");

function selectorContatoRarioBoot() {
    console.log(`object call ${Object.prototype.toString.call(contatoRarioBoot)}`);
    console.log(`value ${contatoRarioBoot.checked}`);
    console.log(`tagName ${contatoRarioBoot.tagName}`);
    console.log(`type ${contatoRarioBoot.type}`);
}