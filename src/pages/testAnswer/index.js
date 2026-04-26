import html from './index.html'
import './styles.scss'
import { linkToTests } from '../../router/links'
import Answer from './Answer'

export default class TestAnswer {

  constructor () {
    this.html = html
  }

  clear = () => {
    localStorage.setItem('finished', JSON.stringify({
      name: '', level: '', answers: '', point: '', length: '',
    }))
  }

  render () {
    this.els = {
      title: document.getElementById('test__title'),
      test__points: document.getElementById('test__points'),
      test__number: document.getElementById('test__number'),
      test__len: document.getElementById('test__len'),
      test__done: document.getElementById('test__done'),
      test__left: document.getElementById('test__left'),
      question__title: document.getElementById('question__title'),
      progress__fill: document.getElementById('test__progress__fill'),
      progress__percentage: document.getElementById('progress__percentage'),
      question__img: document.getElementById('question__img'),
      nextBtn: document.getElementById('next'),
      prevBtn: document.getElementById('prev'),
    }

    let answer = new Answer()

    this.els.nextBtn.addEventListener('click', (e) => {
      answer.next()
      if (!answer.isFinish) {
        this.runTestRender(answer.getStatus())
      }
    })

    this.els.prevBtn.addEventListener('click', (e) => {
      answer.prev()
      if (!answer.isFinish) {
        this.runTestRender(answer.getStatus())
      }
    })

    document.querySelector('.quit-test').addEventListener('click', (e) => {
      this.clear()
      linkToTests()
    })

    if (!answer.isFinish) {
      this.runTestRender(answer.getStatus())
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
    this.els.question__img.src = 'http://localhost:3000/' + status.question.img

    status.question.options.map((option, index) => {

      choices.innerHTML += `
                        <label ${option.id === status.question.answers ? 'class="choice right"' : ( option.id === status.selected ? 'class="choice wrong"' : 'class="choice"' )}>
                            <div>
                                <strong>${option.title}</strong>
                            </div>
                        </label>
  `
    })

    const question__nav = document.querySelector('.question-nav')
    question__nav.innerHTML = ``
    status.answers.map((answer, index) => {
      if (index === status.number-1) {
        question__nav.innerHTML += `<a class="qbtn done" href="#">${index + 1}</a>`
      } else {
        question__nav.innerHTML += `<a ${answer.isRight ? 'class="qbtn right"' : 'class="qbtn wrong"'} href="#">${index + 1}</a>`

      }
    })

    this.els.progress__fill.style.width = `${( status.number - 1 ) / status.length * 100}%`
    this.els.progress__percentage.textContent = `${( status.number - 1 ) / status.length * 100} %`
  }

}




