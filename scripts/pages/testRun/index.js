import { content } from './content.js'
import Test from './Test.js'

export default class TestRun {

  constructor () {
    this.html = content
    this.elements = []
  }

  render () {
    const test1 = new Test()


    document.getElementById('next').addEventListener('click', (e) => {
      const choices = document.getElementsByName('q1');
      let selectedValue;

      for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          selectedValue = choices[i].value;
          test1.next(Number(selectedValue))
          break; // Exit the loop once a selection is found
        }
      }
      if(!test1.isFinish){
        this.runTestRender(test1.getStatus())

      }

    })

    document.getElementById('skip').addEventListener('click', (e) => {

    })

    document.getElementById('prev').addEventListener('click', (e) => {

    })

    document.getElementById('finish').addEventListener('click', (e) => {

    })

    if(!test1.isFinish) {
      this.runTestRender(test1.getStatus())
    }


    // console.log(selected)
  }

  runTestRender = (status) => {
    const title = document.querySelector('.question-title')

    title.innerHTML = status.question?.title

    const choices = document.querySelector('.choices')
    choices.innerHTML = ''

    const test__top = document.querySelector('.test-top')
    test__top.innerHTML = `
                <div>
                        <div class="kicker">🧠 Тест: ${status.title} • Уровень ${status.level}</div>
                        <h2 style="margin:10px 0 0;">Прохождение теста</h2>

                        <div class="meta">
                            <span class="pill">Вопрос: <b>${status.number}</b>/<b>10</b></span>
                            <span class="pill">Баллы: <b>${status.points}</b></span>
                        </div>
                    </div>

                    <div class="btn danger" >Выйти</div>
  `

    status.question.options.map((option, index) => {
      choices.innerHTML += `
                        <label class="choice">
                            <input type="radio" name="q1" id="ratio" value="${option.id}" />
                            <div>
                                <strong>${option.title}</strong>
                            </div>
                        </label>
  `
    })

    const badges = document.querySelector('.badges')
    badges.innerHTML = `
    <span class="badge green">Сохранено: ${status.number-1}</span>
    <span class="badge">Осталось: ${status.length - status.number + 1}</span>
  `

    const question__nav = document.querySelector('.question-nav')
    question__nav.innerHTML = ``
    for (let i = 1; i < status.number; i++) {
      question__nav.innerHTML += `<a class="qbtn done" href="#">${i}</a>`
    }
    for (let i = status.number; i <= status.length; i++) {
      question__nav.innerHTML += `<a class="qbtn" href="#">${i}</a>`
    }

    const progress = document.querySelector('.progress-bar')
    const visualBar = progress.querySelector('.progress-fill'); // Assuming an inner div for visual width
    const percentage = document.querySelector('.progress-percentage'); // Assuming an inner div for visual width
    if(visualBar){
      visualBar.style.width = `${(status.number-1) / status.length * 100}%`
      percentage.innerHTML = (status.number-1) / status.length * 100;
    }
  }

}




