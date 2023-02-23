import '../Avatar/styles.css'

export default function Avatar(props) {
return(<>

<div className='container-avatar'>
<h1>{props.nomeUser}</h1>
<img src={props.img} 
alt="Foto do usuário" 
/>
</div>
</>)

}