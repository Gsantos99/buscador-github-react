import { useEffect, useState } from 'react'
import Itemrepositorio from '../ItemRepositorio'
import '../Repositorio/styles.css'

export default function Repositorio(){

  const [repositorios, setRepositorios] = useState([])
  


useEffect(()=>{
  fetch('https://api.github.com/users/Gsantos99/repos')
    .then(response => response.json())
    .then(data => setRepositorios(data))
}, [])



  return(
<ul> 

{repositorios.map((repositorio) => {
  return <Itemrepositorio 
  key={repositorio.node_id}
  titulo={repositorio.name} 
  descricao={repositorio.description}
  link={repositorio.html_url}
  />
})}



</ul> 
)
}

