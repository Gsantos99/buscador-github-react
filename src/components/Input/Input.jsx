import '../Input/styles.css'
import { useEffect, useState } from 'react'


export default function Input({placeholder}){
 return(<>
<input 

type="search" 
name="nomeUser" 
id="nomeUser" 
placeholder={placeholder} />

  </>)
}