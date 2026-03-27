import { getLogged } from '../state.js'
import { tests } from '../data/tests.js'
import { routing } from './routing.js'

export const render = () => {
  routing()
}


export const linkToTests = () => {
  localStorage.setItem('page', 'test')
  render()
}

export const linkToMain = () => {
  localStorage.setItem('page', 'main')
  render()
}

export const linkToMaterial = () => {
  localStorage.setItem('page', 'material')
  render()
}

export const linkToLogin = () => {
  if (getLogged()) return
  localStorage.setItem('page', 'login')
  render()
}

export const linkToRunTest = (name) => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }

  let test = tests.find(x => x.name === name)
  localStorage.setItem('test', JSON.stringify(test))
  localStorage.setItem('page', 'runTest')
  render()
}

export const linkToFinishedTest = () => {

  localStorage.setItem('page', 'finishedTest')
  render()
}

export const linkToMaterialSingle = (id) => {
  localStorage.setItem('page', 'materialSingle')
  localStorage.setItem('material', JSON.stringify({ id }))
  render()
}

export const linkToFlash = () => {
  localStorage.setItem('page', 'flashes')
  render()
}

export const linkToFlashCard = (id) => {
  localStorage.setItem('page', 'flashCard')
  localStorage.setItem('flash', JSON.stringify({ id }))
  render()
}