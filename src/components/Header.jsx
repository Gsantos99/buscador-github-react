import './Header.css'
import Input from './Input'
import Button from './Button'

export default function Header() {
  return(<>
    <header>
     <Input placeholder='digite o nome do usuário'/>
    <Button textoInterno='Buscar'></Button>
    </header>
    </>)
}