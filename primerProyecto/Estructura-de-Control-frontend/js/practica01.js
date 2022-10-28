
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

//busqueda de un valor dentro de una lista 

const Estudiantes = [
    { Nombre : "Andrius", Eda: 17},
    { Nombre : "Diorkys", Eda: 17},
    { Nombre : "Carla", Eda: 18},
    { Nombre : "Moises", Eda: 27},
    { Nombre : "Pedro", Eda: 37}
]

/*
const objeto = Estudiantes.find( o => {
    if(o.Nombre === "Pedro"){
        return true
    }
})
*/

const objeto = Estudiantes.find( o => o.Nombre === "Pedro");
// OTRA forma
const {Eda} = Estudiantes.find( o => o.Nombre === "Pedro");
console.log(objeto.Eda)

// metodos mas avanzado con map()
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor} `)
console.log(newArray);

// metodos mas avanzado con filter()
const personasMayores = Estudiantes.filter(obj => obj.Eda < 18 );
console.log(personasMayores);

// Elimenar a un objerto
const PersonasMayores = Estudiantes.filter(obj => obj.Nombre !== "Andrius" );
console.log(PersonasMayores);

// .SORT()
const ordernarlista =Estudiantes.sort((a, b) =>  a.Eda - b.Eda);
console.log( ordernarlista);
