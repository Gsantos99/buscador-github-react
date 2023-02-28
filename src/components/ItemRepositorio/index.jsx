
export default function Itemrepositorio({titulo,descricao,link}){  
  return(<>
  
  <li>
  <h2><strong>{titulo}</strong></h2>
  <p>{descricao}</p>
   
   <a href={link} target='_blank'> Acessar repositório </a>
  </li>
  
  </>)
}