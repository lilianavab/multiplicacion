/*1. Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al rango, mostrar un mensaje al usuario: "número fuera del rango"
2. Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.*/

const evaluarNumero = () => {
    let numero = 0;
    do{
        numero = parseInt(prompt('Ingresar un número entre 1 y 20'));

        if(isNaN(numero)){
            alert('Debe ingresar un número');
            numero = 0;
    } else if (numero < 1 || numero > 20) {
            alert ('El numero esta fuera del rango');
        }
    } while (numero < 1 || numero > 20 );

    tablaDeMultiplicar (numero);
    calculoFactorial (numero);  
}


const tablaDeMultiplicar = (n) => {
    for(let i = 1; i<= n; i++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
};

//4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado
const calculoFactorial = (x) => {
    for(let i = 1; i <= x; i++) {
        let res = 1;

        for(let y=1; y <= i; y++){
            res = res*y
        }
        console.log(`El factorial de ${i} es: ${res}`);
    }
};
evaluarNumero();
