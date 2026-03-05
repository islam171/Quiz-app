import { linkToFlash, linkToLogin, linkToMain, linkToMaterial, linkToTests, render } from './router/links.js'
import { logOut } from './auth/auth.js'

document.addEventListener('DOMContentLoaded', function () {
  render()
  localStorage.setItem('page', 'main')
})


const linkMainDiv = document.querySelector('.main-link')
const linkTestDiv = document.querySelector('.test-link')
const linkMaterialDiv = document.querySelector('.material-link')
const linkLoginDiv = document.querySelector('.login-link')
const logOutDiv = document.querySelector('.logout')
const logo = document.querySelector('.brand')
const flashDiv = document.querySelector('.flash-link')

linkMainDiv?.addEventListener('click', () => {
  linkToMain()
})
linkTestDiv?.addEventListener('click', () => {
  linkToTests()
})
linkMaterialDiv?.addEventListener('click', () => {
  linkToMaterial()
})
linkLoginDiv?.addEventListener('click', () => {
  linkToLogin()
})
logOutDiv.addEventListener('click', () => {
  logOut()
  linkToLogin()
})
logo.addEventListener('click', () => {
  linkToMain()
})
flashDiv.addEventListener('click', () => {
  linkToFlash()
})



// buttons

