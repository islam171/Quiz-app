export const getLogged = () => {
  let login = JSON.parse(localStorage.getItem('login'))
  if(login)
    return login.isLoggedIn
  else return null
}

export const getPage = () => {
  return localStorage.getItem('page')
}