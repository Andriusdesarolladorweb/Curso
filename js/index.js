/* const Licencia = edad => {
    if( typeof edad === "number"){
        
        return edad > 18
    }
    
   
}

const Edad = 20;

try{
    console.log("Su licencia ha sido aprobada ")
    const validacion = Licencia(Edad)
    console.log(validacion)
}catch(e){
    console.log("Error")
}

*/

const miFuncion = val => {
    if(typeof val === Number){
        return 2 * 15
    }
}

const numero = "444";

try{
    console.log("Correcto ")
    const doble = miFuncion(numeroclar)
    console.log(doble)
}catch(e){
    console.log("Error")
}
