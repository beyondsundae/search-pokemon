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
//@ts-check

import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import RenderInfo from './Components/RenderInfo';
import Header from './Components/Header';

import useSWR from "swr";
import { request } from "graphql-request";
import query from './Components/query';

const url = "https://graphql-pokemon2.vercel.app"


function App() {
  const [value, setValue] = useState<string>("")

  const fetcher = (query: any) =>
    request(url, query);
  
  let queryFile =  query(value)

  const useFetching = (name: String) => {
    const { data, error, isValidating } = useSWR(
      queryFile,
      fetcher
    );

    // console.log(`data: ${JSON.stringify(data)}`);
    console.log( data )

    return {
      data: data?.pokemon? data.pokemon: null,
      isLoading: !data && !error,
      isError: error
    }
  
    
  }

  // console.log( query(value))

  const { data, isLoading, isError } = useFetching("")


  // const displayPokemon =()=> {
  //   // for(const index in data){
  //   //   console.log(`${index} ${data[index]}`)
  //   // }

  //   if(!isLoading){
  //     console.log(Object.keys(data))

  //     var tifOptions = Object.keys(data).map(function(key) {
  //       return <li value={key}>{data[key]}</li>
  //   });

  //   // console.log(tifOptions)
  //   }
   
   

  //   // return 
  // }


  // useEffect(() => {
    
  //   displayPokemon()
  // }, [isLoading])
  
  //   if (isLoading) return <Spinner />
  //   if (isError) return <Error />
  //   return <img src={user.avatar} />
  // }

  if(value == ""){
    return(
      <>
        <div>
    
          <Header/>

          <div> 
            <div className="input-group mb-3 px-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Search-Pokemon</span>
              </div>
              <input 
                type="text" className="form-control" aria-label="Search" aria-describedby="inputGroup-sizing-default"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder=""
                />
            </div>
          </div>

          <div className='mt-5' style={{  textAlign: "center" }}>
          <img src={"https://f.top4top.io/p_1990j031.gif"} />
        </div>
        <h2 className='mt-5' style={{  textAlign: "center" }}>Let's Search !!! </h2>
        <p style={{  textAlign: "center" }}>** try search "Golbat" or "Gloom" or "Paras" **</p>
        
        </div>
      </>
    )
  }


  return ( 
    <div>
  
    <Header/>

    <div> 
      <div className="input-group mb-3 px-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Search-Pokemon</span>
        </div>
        <input 
          type="text" className="form-control" aria-label="Search" aria-describedby="inputGroup-sizing-default"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=""
          />
      </div>
    </div>
    
    {/* {RenderInfo()} */}

    {data? <RenderInfo data={data} isLoading={isLoading} setValue={setValue}/> : 
    (
      <>
        <div className='mt-5' style={{  textAlign: "center" }}>
          <img src={"http://24.media.tumblr.com/tumblr_mb47mu09TI1qkpz2go1_500.gif"} />
        </div>
        <h2 className='mt-5' style={{  textAlign: "center" }}>404 Pokemon not Found... </h2>
      </>
      )
    }

    {/* {JSON.stringify(data)} */}
    
    </div>
  
  );

}

export default App;

// graphql-request 
// - Most simple & lightweight GraphQL client
// - Promise-based API (works with async / await)
// - TypeScript support
// - Isomorphic (works with Node / browsers)