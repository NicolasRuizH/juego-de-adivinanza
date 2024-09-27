//Saludo
let saludos = prompt('dime tu nombrenicola')
let nombre = document.querySelector('.nombre')

nombre.innerHTML = `hello<b>${saludos}</b>!!!`;


//juego
let numeroAzar = Math.floor(Math.random()*10) + 1

let numeroEntrada = document.querySelector('.numeroEntrada')
let mensaje = document.querySelector('.mensaje')


function chequearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value)

  if (numeroIngresado < 1 || numeroIngresado > 10 || isNaN(numeroIngresado)) {
    mensaje.innerHTML = 'por favor, ingresar un numero valido entr 1 - 10'
    return
  }

  if (numeroIngresado == numeroAzar) {
    mensaje.innerHTML = '¡Felicitaciones, Ganaste!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.innerHTML = 'debes ingresar un numero mas alto';
    mensaje.style.color = 'red';
  } else {
    mensaje.innerHTML = 'debes ingresar un numero mas bajo';
    mensaje.style.color = 'red';
  }
}