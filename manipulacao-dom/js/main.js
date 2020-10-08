var nomeBoot = window.document.getElementById("nomeBoot");


function selecionarCampos(){
    nomeBoot.value = "Jose";
    console.log(`typeOf ${typeof nomeBoot}`);
    console.log(`object call ${Object.prototype.toString.call(nomeBoot)}`);
    console.log(`value ${ nomeBoot.value }`);

    //console.log(`disable `);
    //nomeBoot.disabled = true;


    console.log(`readOnly `);
    nomeBoot.readOnly = true;
}