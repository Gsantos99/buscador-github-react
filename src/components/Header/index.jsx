import '../Header/styles.css'
import Input from '../Input/Input'
import Button from '../Button'

export default function Header() {
  return(<>
    <header>
     <Input placeholder='digite o nome do usuário'/>
    <Button textoInterno='Buscar'></Button>
    </header>
    </>)
}