// lista de la compra
const Compra = ["Arroz", "Agua", "Pan", "Tomate", "Leche" ];

//Modifica la lista de la compra Añadiendo 
const Añadir = Compra.push("Aceite de Girasol");

//modificar la lista de la compra  elimindo
const eliminar = Compra.pop();

console.log(Compra);

//Lista de mi peliculas favoritas 
const  peliculas_favoritas = [
    { 
      titulo: "Partenida", 
      Director: "Paul Weitz",
      Fecha :  "18 de junio 2001"
    },

    { 
      titulo: "El jeremia", 
      Director: "Anwar Safa",
      Fecha :  "Marzo de 2015"
    },

    { 
      titulo: "Nada que perder", 
      Director: "Alexandre Avancini",
      Fecha :  "29 de marzo de 2018"
    }
]
console.log(peliculas_favoritas);

// lista de peliculas
const  peliculas = [
  { 
    titulo: "Thor amor y trueno ", 
    Director: "Taika Waititi",
    Fecha :  new Date(18, 6, 2001,)
  },

  { 
    titulo: "El jeremia", 
    Director: "Anwar Safa",
    Fecha : new Date( 03 , 3, 2015)
  },

  { 
    titulo: "Nada que perder", 
    Director: "Alexandre Avancini",
    Fecha :  new Date(29, 3 ,2018)
  },

 
  { 
    titulo: "karate kid", 
    Director: "John G. Avildsen",
    Fecha :   new Date(22, 6, 2004)
  },


]

//lista de  las películas posteriores al 1 de enero de 2010
const ListaDePeliculasPoterioes = peliculas.filter(obj => {
  return obj.Fecha > new Date( 01, 01, 2010)
  });
console.log(ListaDePeliculasPoterioes);

// lista de los Titulos 
const lista_Titulos = peliculas.map( obj => {
  return obj.titulo
});
console.log(lista_Titulos);

// lista de los directores 
const lista_Diretores = peliculas.map( obj => {
  return obj.Director 
});
console.log(lista_Diretores);

// lista que contienen los directores y titulos con concat
const DirectoresYTitulos = lista_Titulos.concat(lista_Diretores);
console.log(DirectoresYTitulos);

// lista que contienen los directores y titulos con ...
const directoresYtitulos = [...lista_Titulos, ...lista_Diretores];
console.log(DirectoresYTitulos);