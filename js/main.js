let nombreUsuario = prompt("Ingrese su nombre de usuario");
alert("Bienvenido " + nombreUsuario);
let edad = prompt("Ingrese su edad");
let pais = prompt("Ingrese su nacionalidad");
let respuesta1 = prompt("cuanto es 2 + 2");
if (respuesta1 == 4 ) {
    alert("Felicidades! " + nombreUsuario + " la respuesta es correcta");
} else {
    alert("La respuesta es incorrecta " + nombreUsuario);
}
let respuesta2 = prompt("coloca un numero positivo");
if (respuesta2 > 0 ) {
    alert("Felicidades! " + nombreUsuario + " la respuesta es correcta");
} else {
    alert("La respuesta es incorrecta " + nombreUsuario);
}
let respuesta3 = prompt("coloca un numero negativo");
if (respuesta3 < 0 ) {
    alert("Felicidades! " + nombreUsuario + " la respuesta es correcta");
} else {
    alert("La respuesta es incorrecta " + nombreUsuario);
}
alert("Felicidades terminaste el quiz!")
function Usuario(nombre,edad,pais){
    this.nombre = nombre
    this.edad   = edad
    this.pais   = pais
}
const usuario = new Usuario(nombreUsuario, edad, pais)