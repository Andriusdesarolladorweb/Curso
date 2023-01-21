// Instalar axios para hacer llamada a servicios externo
import axios from "axios"

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/gorka')
  .then(function (response) {
    // handle success
    console.log("Sucess!!!")
    console.log(response.data);
    
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
  })