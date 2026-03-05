import { tests } from '../../data/tests.js'
import {linkToRunTest} from '../../router/links.js'
import { content } from './content.js'

export default class Test{

  constructor(){
    this.html =content;
  }

  runTest = (value) => {
    linkToRunTest(value)
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
                        <div class="btn primary" data-name="${item.name}">Начать</div>
                    </div>
                </div>
    `
    })

    let button = document.querySelectorAll('.btn')
    button.forEach(button => {
      button.addEventListener('click', (e) => {
        this.runTest(e.target.dataset.name)
      })
    })

  }
}
