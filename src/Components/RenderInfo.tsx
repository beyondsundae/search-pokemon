import React from 'react'

const RenderInfo:any = ({data, isLoading, setValue}: any) => {
    if(!isLoading){
       return(
         <>
         <div className="container">
           <div className="d-flex justify-content-center">
            <img src={data?.image} alt="immage" style={{maxHeight: "300px"}}/>
           </div>

            <table className="table w-100 ">
              <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Number:ID</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`${data.number} : ${data.id}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {data.name}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`${data.classification}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Types</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`${data.types}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`Maximum: ${data.weight.maximum || "Nan"}, Minimum: ${data.weight.minimum}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`Maximum: ${data.height.maximum}, Minimum: ${data.height.minimum}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Resistant</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`${data.resistant}`}</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Weaknesses</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td> {`${data.weaknesses}`}</td>
                </tr>
              </tbody>
            </table>

            
            <table className="table">
              <thead className="thead-dark">
                  <tr className='text-center'>
                    <th scope="col">Attacks (fast)</th>
                  </tr>
                </thead>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Damage</th>
                  </tr>
                </thead>
                <tbody>
                    {data?.attacks?.fast?.map((item: any)=>{
                      return(   
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.damage}</td>
                      </tr>)
                    })}
                </tbody>
            </table>

            <table className="table">
              <thead className="thead-dark">
                  <tr className='text-center'>
                    <th scope="col">Attacks (special)</th>
                  </tr>
                </thead>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Damage</th>
                  </tr>
                </thead>
                <tbody>
                    {data?.attacks?.special?.map((item: any)=>{
                      return(   
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.damage}</td>
                      </tr>)
                    })}
                </tbody>
            </table>

            {/* <td> {`${data.evolutions}`}</td> */}
            {data?.evolutions ? (
                                <>
            <table className="table w-100 ">
            <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Evolutions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                 
                      {
                          data?.evolutions?.map((item: any)=>{
                        return(
                          <>
                           <div className="container">
                             <div className='row'>
                               <div className='col'>
                                <img src={item?.image} alt="immage" style={{maxHeight: "300px"}}/>
    
                               </div>
                                <div className='col'>
                                <tbody className='d-block'>
                                <table className="table w-100 ">
                                <thead className="thead-dark">
                                    <tr className='text-center'>
                                      <th scope="col">Number, ID:</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className='text-center'>
                                      <td> {`${item.number}, ${item.id}`}</td>
                                    </tr>
                                  </tbody>
                                  <thead className="thead-dark">
                                    <tr className='text-center'>
                                      <th scope="col">Name:</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className='text-center'>
                                      <td onClick={() => {
                                          setValue(item.name)
                                          window.scrollTo({ top: 0, behavior: 'smooth' })}} style={{cursor: "pointer"}}> {`${item.name}`}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                  </tbody>
                                </div>
                             </div>
                             <hr/>
                            </div>
                          </>
                        )
                      })}
                   
                </tr>
              </tbody>
            </table>
            </>
            ): null}
            </div>
         </>
       )
    };
    
  }

export default RenderInfo