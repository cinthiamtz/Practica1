console.log(" Se nota que todavia me extrañas ");

setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  //Estoy asignando 
  let frase = document.getElementsByTagName("h2")[1];
    console.log(frase)
  if (frase.innerHTML == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    frase.innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
   frase.innerHTML = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}
