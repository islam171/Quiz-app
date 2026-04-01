import { linkToLogin, linkToMaterial, linkToTests } from '../../router/links.js'
import { getLogged } from '../../state.js'
import { tests } from '../../data/tests.js'
import html from './index.html'

import './styles.scss'

export default class HomePage{
  constructor() {
    this.html = html
  }

  render() {
    const testDivs = document.querySelectorAll('.home-test')
    const materialDivs = document.querySelectorAll('.home-material')
    const loginDivs = document.querySelectorAll('.home-login')
    const numberOfTests = document.getElementById('home-test-number')
    const numberOfQuestions = document.getElementById('home-question-number')

    testDivs.forEach(item => {
      item.addEventListener('click', (e) => {
        linkToTests()
      })
    })
    materialDivs.forEach(item => item.addEventListener('click', e => {
      linkToMaterial()
    }))

    if(getLogged()){
      loginDivs.forEach(item => item.style.display = 'none')

    }else{
      loginDivs.forEach(item => {
        item.innerHTML = 'Войти'
        item.addEventListener('click', e => {
          linkToLogin()
        })
      })
    }

    numberOfTests.innerHTML = tests.length
    let count = 0;
    tests.forEach((test) => {
      count += test.questions.length
    })
    numberOfQuestions.innerHTML = count
  }
}