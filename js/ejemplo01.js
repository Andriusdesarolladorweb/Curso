Saludar("Andrius")
function Saludar( Nombre){
    console.log(`Hola ${Nombre}`)
}

/////////

Suma(2,5,8,4)
function Suma(...numero){
   console.log(numero.reduce((a,b) => a +b))
}

//////

function multiplicar (a = 0, b = 0){
    return a * b; 
}

console.log(multiplicar(10,20))

