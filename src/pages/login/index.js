import html from "./index.html";
import { getPage } from '../../state.js'
import { login } from '../../auth/auth.js'

export default class LoginPage{
  constructor() {
    this.html = html;
  }

  render() {
    if (getPage() !== 'login') return

    const loginBtn = document.getElementById('login')
    const inputPassword = document.getElementById('pass')
    const inputUsername = document.getElementById('username')

    loginBtn.addEventListener('click', () => {
      if (inputUsername.value === '' || inputPassword.value === '') return
      login({username: inputUsername.value, password: inputPassword.value})
    })
  }
}