import {api} from './api'

export async function getUser(user){

  try{
  const data = await api.get(`/${user}`)
  return data
  } catch(e) {
    console.log(e)
  }

}

