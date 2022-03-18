import { request } from "graphql-request";
import useSWR from "swr";
import query_for_test from './Components/query_for_test';


const url = "https://graphql-pokemon2.vercel.app"

function checkType (name) {

    // console.log('started 0', name)
    // // const fetcher = () => request(url, query);

    // let queryFile =  query_for_test(name)

    // console.log('queryFile 0', queryFile)

    // const query = `
    // { pokemon( name: "Bulbasaur"){
    //   name
    //   types
    
    // }}
    // `;
    
    // console.log("querying the count");
    // fetch("https://graphql-pokemon2.vercel.app", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ query })
    // })
    //   .then(res => res.json())
    //   .then(({ data }) => data.pokemon.types[0])
    //   .catch(console.error);

    switch(name) {
        case "Squirtle":
          // code block
          const Squirtle = {
            "data": {
              "pokemon": {
                "name": "Squirtle",
                "types": [
                  "Water"
                ]
              }
            }
          }
          return Squirtle.data.pokemon.types[0]
          break;
        case "Charmander":
          // code block
          const Charmander = {
            "data": {
              "pokemon": {
                "name": "Charmander",
                "types": [
                  "Fire"
                ]
              }
            }
          }
          return Charmander.data.pokemon.types[0]
          break;
        case "Bulbasaur":
        // code block
        const Bulbasaur = {
            "data": {
            "pokemon": {
                "name": "Bulbasaur",
                "types": [
                "Grass"
                ]
            }
            }
        }
        return Bulbasaur.data.pokemon.types[0]
        break;
        default:
          // code block
      }


      

      
    
    }

module.exports = checkType