import '../Avatar/styles.css'
import Repositorio from '../Repositorio'


export default function Avatar({imagem, nome,login}) {

 console.log(imagem,nome,login)

return(<>

<div className='container-avatar'>

<img src={imagem} 
alt="Foto do usuário" 
/>
<h1>{nome}</h1>

</div>

<Repositorio nome={nome} />

</>)

}