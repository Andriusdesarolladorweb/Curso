
var sabado = "savado"
let array = ["Lunes",
             "marte",
             "miercoles"]

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
array.splice(0, 1)

//metodo para  agregar
array.splice(0, 0, "lunes", 05)

// metodo para  modificar 
array.slice(0, 2, 02)