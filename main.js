const stringsecret = "Javascript";
const subcadena = stringsecret.slice(0, 5);
const botonPista = document.getElementById("pista");
var mainElement = document.getElementById("miMain");
var botonVal = document.getElementById("Validar");
let intentos = 0

// Vinculacion del evento click para que realize tal accion para que despliegue
// la pista
botonPista.addEventListener("click", function() {
    // Mostrar un alert con el valor de la constante
    alert("Las primeras 5 letras de la palabra secreta son: " + subcadena);
});


botonVal.addEventListener("click", function() {
    var InputtextJugador = document.getElementById("string").value;
    
if (InputtextJugador === stringsecret) {
    alert("Correcto haz ganado");
}else {

    alert("Incorrecto. ");
    intentos++
    if (intentos === 3) {
        alert("Has agotado tus oportunidades el juego a terminado");
        mainElement.style.display = "none";
    }
    
}
})


