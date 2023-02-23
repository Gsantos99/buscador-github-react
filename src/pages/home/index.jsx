import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import '../home/styles.css'


export default function Home() {

  return (
    <div className="Home">
     <Header/>
     <Avatar nomeUser='Giulyano Santos' img='https://pbs.twimg.com/profile_images/1486492494409969667/h9O4GQdm_400x400.jpg'/>
    </div>
  )
}


