const query_for_test = (name: any) => (  `{
    pokemon( name: "${name}"){
      name
      types

  }
`)
  export default query_for_test