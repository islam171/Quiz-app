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
  localStorage.setItem('page', 'home')
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

export const linkToRunTest = (id) => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }

  let test = {
    id: id,
    current: 1,
  }
  localStorage.setItem('test', JSON.stringify(test))
  localStorage.setItem('page', 'runTest')
  render()
}

export const linkToFinishedTest = () => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }
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

export const linkToFinishFlash = () => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }
  localStorage.setItem('page', 'finishFlash')
  render()
}


export const linkToFlashCard = (id) => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }

  localStorage.setItem('page', 'flashCard')
  localStorage.setItem('flash', JSON.stringify({ id }))
  render()
}

export const linkToTestAnswer = () => {
  if (!getLogged()) {
    linkToLogin()
    return;
  }

  localStorage.setItem('page', 'answerTest')
  render()
}