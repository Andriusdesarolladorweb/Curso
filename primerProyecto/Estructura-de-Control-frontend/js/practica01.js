
var sabado = "savado"
let array = ["Lunes",
             "marte",
             "miercoles"]

let numeros = [1, 2, 3]
            

// acendiendo al array
console.log(array);


// agregar al array en el final 
array.push("Jueves", "viernes", sabado , false);

// agregar al array en el principio 
array.unshift("domingo");

// metodos para eliminar al final
array.pop();

// metodos para eliminar al principio
array.shift();

//metodo para eliminar 
array.splice(0, 1);

//metodo para  agregar
array.splice(0, 0, "lunes");

// metodo para  modificar 
array.slice(0, 2, 02);

// como unir dos lista 
let juntar_lista = numeros.concat(array);

// como unir dos lista  el mas usado 
let juntar_lista01 = [...array, ...numeros];
console.log(juntar_lista01);

// como tener  una lista aparti de otra lista 
const oterne = array.slice(2, 4);
console.log(oterne);



