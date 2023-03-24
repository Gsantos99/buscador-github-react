import { useEffect, useState } from 'react'
import Itemrepositorio from '../ItemRepositorio'
import '../Repositorio/styles.css'
import Avatar from '../Avatar'



export default function Repositorio({nome}){

  const [repositorios, setRepositorios] = useState([])
  


useEffect(()=>{
  fetch(`https://api.github.com/users/${nome}/repos`)
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

