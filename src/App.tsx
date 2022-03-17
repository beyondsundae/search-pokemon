// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React test ts
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';

import useSWR from "swr";
import { request } from "graphql-request";

const fetcher = (query: any) =>
  request("https://graphql-pokemon2.vercel.app", query);


function App() {

  const { data, error } = useSWR(
    `{
      pokemon( name: "Bulbasaur"){
        id
        name
        evolutions{
          id
          number
          name
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
         
          maxHP
          image
        }
      }
    }`,
    fetcher
  );

  console.log(`data: ${JSON.stringify(data)}`);

  return ( <>search-pokemon</>);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React hello
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;
