//Ejercicio 1

console.log("------ Ejercicio 1 ---------")

var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var n = i % 3;
    if (n === 0) {
        console.log("Gato #" + i + ": 😹");
    } else if (n === 2) {
        console.log("Gato #" + i + ": 😸");
    } else {
        console.log("Gato #" + i + ": 😺");
    }
}

// Ejercicio 2

console.log("------ Ejercicio 2 ---------")

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var string = "Gato #" + i + ": 🐈";
    for (j = 0; j < cantidadDePasos; j++) {
        string = string + "🐾";
    }
    console.log(string);
}

//Ejercicio 3

console.log("------ Ejercicio 3 ---------")


var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var string = "Gato #" + i + ": ";
    var orangeCat = "🐈";
    var blackCat = "🐈‍⬛";
    if (i % 2 === 0) {
        string = string + blackCat;
    } else {
        string = string + orangeCat;
    }
    for (j = 0; j < cantidadDePasos; j++) {
        string = string + "🐾";
    }
    console.log(string);
}
