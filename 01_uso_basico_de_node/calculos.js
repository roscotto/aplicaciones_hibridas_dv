let numero1 = 10;
let numero2 = 20;

let arrayNumeros = [10, 50, 35, 2, 20, 33, 88, 72];

//4 Crear una función que reciba dos números y retorne la suma de ellos

function suma(numero1, numero2) {
    return numero1 + numero2;
}

console.log('Suma:', suma(numero1, numero2));

//5 Crear una función que reciba dos números y devuelva el resultado entre la división del primero sobre el segundo


function division(numero1, numero2) {
    return numero1 / numero2;
}

console.log('División:',division(numero1, numero2));


// 6 Crear una función que reciba un Array de N elementos y devuelva el mayor valor de ese array

function encontrarMayor() {
    let numeroMayor = Math.max(...arrayNumeros);
    return numeroMayor;
}

console.log('El número mayor es:', encontrarMayor(arrayNumeros));

// 7. Hacer uso del console.log para mostrar la suma de 5 y 10
console.log('Suma de 5 y 10:', 5 + 10);


//8. Hacer uso del console.log para mostrar la división de 20 y 2 (que sucede si envió 20 y 0)

console.log('Division de 20 y 2:', 20 / 2);
console.log('Division de 20 y 0:', 20 / 0);

// 9. Hacer uso del console.log para mostrar el mayor de la lista [2,8,9,7,5,6]

console.log('Mayor de la lista:', Math.max(...[2,8,9,7,5,6]));