console.log(" Se nota que todavia me extrañas ");

setInterval(cambiarSaludo, 2000);

/**
 * Cambia la frase en el titulo h2
 */

function cambiarSaludo() {
    //console.log("Me parece una falta de respecto");
    //Estoy asignando 
    let frase = document.getElementsByTagName("h2")[1];
    console.log(frase)
    if (frase.innerText == "Ganando como siempre") {
        frase.innerText = "Impongo moda para las niñas!";
    } else {

        frase.innerText = "Ganando como siempre";
    }
    // console.log("frase :" + frase);
}
