//cadena de texto con mi nombre. 
let nombre = "Andrius",
//cadena de texto con mi Apellido.
Apellido = "Rosa Castro",
// concatenando mi Nombre y mi Apellido con un espacio entre medias.
Estudiante = nombre + " " + Apellido,
//cadena estudiante pero todo en mayúsculas.
EstudianteMayus = "estudiantes".toUpperCase(),
//cadena estudiante pero todo en miniculas. 
EstudianteMinus = "estudiantes".toLowerCase(), 
// número de letras de la cadena "estudiante" contando los espacios.
Contandor = Estudiante.length,
// Primera ledra de mi nombre. 
primeraletra = nombre.charAt(0),
// Ultima  ledra de mi apellido.
ultimaletra = Apellido.charAt(10),
//Variable booleana que dice si el Nombre está contenido en la variable "estudiante".
booleana =  Estudiante.includes(nombre);
//Eliminar los espacios de la variable Estudiante.
elimanarEspacio = Estudiante.replace(/\s+/g, '');
X 

