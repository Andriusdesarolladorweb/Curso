
// Mis datos personales
const  datos_ersonales  =  {
    Nombre : "Andrius" ,
    Apellido : "Rosa Castro" ,
    Edad : 17 ,
    Altura : 5.7,
    Eres_Desarollador : verdadero
}

// variable con mi edad
const  MiEdad  =  datos_ersonales.Edad ;

// lista con mi objeto datospersonales y tambien con los de mi mejoresAmigas
const  Lista =  [ 
  {
      datos_personales 
  },

    {
        Nombre : "Camila" ,
        Apellido : "carroña" ,
        Edad : 18 ,
        Altura : 5.1 ,
        Eres_Desarollador : false
        
    } ,

    {
        Nombre : "Diorkys" ,
        Apellido : "Cabrera" ,
        Edad : 17 ,
        Altura : 5.8 ,
        Eres_Desarollador : true
        
    }
]

//Lista ordenada 
const OdenarLista = mejores_amigas.Edad.sort((a, b) => a.Edad - b.Edad);
console.log(OdenarLista);