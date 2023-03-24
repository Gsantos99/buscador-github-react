
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import Repositorio from '../../components/Repositorio'
import { useState} from 'react'
import '../home/styles.css'
import {getUser} from '../../services/getUser'





export default function Home() {
  
  const [data, setData] = useState([])
  const [nome, setNome] = useState('')
  const [login, setLogin] = useState('')
  const [foto, setFoto] = useState('')
  
  async function handleClick(){
    const {data} = await getUser(nome)
    setData(data)
    setNome(data.name)
    setFoto(data.avatar_url)
    setLogin(data.login)
    console.log(data)
   }
   
   

  
  return (<>
   
   <header>
   <input 
     placeholder='digite o nome do usuário'  onChange={e => setNome(e.target.value)}/>
   <button onClick={handleClick}>Buscar</button>
   </header>
   
  
    { 
      data.length === 0 ? <h1>Busque alguém!</h1> : 
      <Avatar imagem={foto} nome={nome} login={login} />
    }
   

   
  </>
  )
}


