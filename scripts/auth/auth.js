import { linkToMain } from '../router/links.js'
import { users } from '../data/users.js'

export const logOut = () => {
  let login = {
    isLoggedIn: false,
    user: {
      username: '',
      password: '',
    }
  }
  localStorage.setItem('login', JSON.stringify(login))
}


// functionality of Pages
export const login = ({username, password}) => {
  let user = users.find(user => user.username === username)
  if(user) {
    if(password === user.password) {
      let data = {
        user: {
          username,
          password,
        },
        isLoggedIn: true,
      }
      localStorage.setItem('login', JSON.stringify(data))
      linkToMain()
    }else{

    }
  }
}