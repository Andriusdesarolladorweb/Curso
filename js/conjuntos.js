//Los nombre de mi familia
const Mi_Familia = [ "Andrius Rosa Ramirez", 
                     "Keyla Bethania Castro solano",
                      "Bethania Rosa Castro",
                      "Abigail Rosa Castro",
                   ];

const nombre_mi_familia = new Set(Mi_Familia);
console.log(nombre_mi_familia);

//Añadiendo mi nombre duplicado 
nombre_mi_familia.add("Andrius Rosa Castro", "Andrius Rosa Castro");

//Añadiendo el nombre de Javascript
 nombre_mi_familia.add("Javascript");
