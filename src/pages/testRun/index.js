import Test from './Test.js'
import html from './index.html'
import './styles.scss'
import { tests } from '../../data/tests'

export default class TestRun {

  constructor () {
    this.html = html

  }

  render () {
    this.els = {
      title: document.getElementById("test__title"),
      test__points: document.getElementById("test__points"),
      test__number: document.getElementById("test__number"),
      test__len: document.getElementById("test__len"),
      test__done: document.getElementById("test__done"),
      test__left: document.getElementById("test__left"),
      question__title: document.getElementById("question__title"),
      progress__fill: document.getElementById("test__progress__fill"),
      progress__percentage: document.getElementById("progress__percentage"),
      question__img: document.getElementById("question__img"),
    }
    const test1 = new Test()

    document.getElementById('next').addEventListener('click', (e) => {
      const choices = document.getElementsByName('q1')
      let selectedValue

      for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          selectedValue = choices[i].value
          test1.next(Number(selectedValue))
          break // Exit the loop once a selection is found
        }
      }

      if (!test1.isFinish) {
        this.runTestRender(test1.getStatus())
      }
    })

    document.getElementById('finish').addEventListener('click', (e) => {
      test1.finish()
    })


    document.querySelector('.quit-test').addEventListener('click', (e) => {
      test1.quit()
    })

    if (!test1.isFinish) {
      this.runTestRender(test1.getStatus())
    }
  }

  runTestRender = (status) => {

    const choices = document.querySelector('.choices')
    choices.innerHTML = ''

    require.context('../../assets/tests', false, /\.(png|jpe?g|svg)$/)


    this.els.title.textContent = status.title
    this.els.test__number.textContent = status.number
    this.els.test__points.textContent = status.points
    this.els.question__title.textContent = status.question?.title
    this.els.test__done.innerHTML = ` ${ status.number - 1 }`
    this.els.test__left.innerHTML = ` ${status.length - status.number + 1}`
    this.els.question__img.src = "http://localhost:3000/" + status.question.img

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

    const question__nav = document.querySelector('.question-nav')
    question__nav.innerHTML = ``
    for (let i = 1; i < status.number; i++) {
      question__nav.innerHTML += `<a class="qbtn done" href="#">${i}</a>`
    }
    for (let i = status.number; i <= status.length; i++) {
      question__nav.innerHTML += `<a class="qbtn" href="#">${i}</a>`
    }

    this.els.progress__fill.style.width = `${( status.number - 1 ) / status.length * 100}%`
    this.els.progress__percentage.textContent =`${( status.number - 1 ) / status.length * 100} %`
  }

}




