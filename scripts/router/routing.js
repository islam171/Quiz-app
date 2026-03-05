import { routes } from './routes.js'
import { getLogged } from '../state.js'

const main = document.querySelector('.main')

const links = [
  {
    name: 'main',
    item: document.querySelector('.main-link'),
  },
  {
    name: 'test',
    item: document.querySelector('.test-link'),
  },
  {
    name: 'material',
    item: document.querySelector('.material-link'),
  },
  {
    name: 'login',
    item: document.querySelector('.login-link'),
  },
  {
    name: 'flashes',
    item: document.querySelector('.flash-link'),
  },
]

export const routing = () => {
  let location = localStorage.getItem('page')

  routes.map(route => {
    if(location === route.path){
      let a = new route.component();
      main.innerHTML = a.html
      a.render()
    }
  })

  const loginDiv = document.querySelector('.login-link')
  const logOutDiv = document.querySelector('.logout')
  if (getLogged()) {
    loginDiv.classList.add('hidden')
    logOutDiv.classList.remove('hidden')
  } else {
    loginDiv.classList.remove('hidden')
    logOutDiv.classList.add('hidden')
  }

  links.forEach(link => {
    if(link.name === location){
      link.item.classList.add('active')
    }else{
      link.item.classList.remove('active')
    }
  })

}