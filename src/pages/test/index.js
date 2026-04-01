import { tests } from '../../data/tests.js'
import {linkToRunTest} from '../../router/links.js'
import html from './index.html'

export default class Test{

  constructor(){
    this.html = html;
  }

  runTest = (id) => {
    linkToRunTest(id)
  }

  render(){
    tests.map((item) => {
      this.containerTest = document.querySelector('.tests-content')
      this.containerTest.innerHTML += `
                <div class="item">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="row">
                        <div class="badges">
                            <span class="badge green">${item.level}</span>
                            <span class="badge">${item.questions.length} вопросов</span>
<!--                            <span class="badge">~7 мин</span>-->
                        </div>
                        <div class="btn primary" data-id="${item.id}">Начать</div>
                    </div>
                </div>
    `
    })

    let button = document.querySelectorAll('.btn')
    button.forEach(button => {
      button.addEventListener('click', (e) => {
        this.runTest(e.target.dataset.id)
      })
    })

  }
}
