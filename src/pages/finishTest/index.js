import { linkToRunTest, linkToTestAnswer, linkToTests } from '../../router/links.js'
import html from './index.html'
import './styles.scss'

export default class FinishTestPage {
  constructor () {
    this.html = html
  }

  render () {
    const result = JSON.parse(localStorage.getItem('finished'))

    const score = document.getElementById('finish-test-score')
    const percentage = document.getElementById('finish-test-percentage')
    const name = document.getElementById('finish-test-name')
    const repeat = document.getElementById('finish-test-repeat')
    const back = document.getElementById('finish-test-back')
    const answer = document.getElementById('answer-test')
    const section = document.querySelector('.finish-page')

    if (!result) {
      section.innerHTML = `<div class="error-page">
    <div class="error-card">
        <p class="label">⚡ Ошибка загрузки</p>
        <h1>Что-то пошло не так</h1>
        <p class="description">
            Не удалось загрузить страницу. Попробуйте обновить её или вернуться на главную.
        </p>

        <div class="actions">
            <button onclick="location.reload()">Обновить страницу</button>
            <a href="/" class="secondary">На главную</a>
        </div>
    </div>
</div>`
    }

    score.innerHTML = `<div>${result?.points} / ${result?.length}</div>`
    percentage.innerHTML = `Процент: <b>${result?.points / result?.length * 100}%</b>`
    name.innerHTML = `${result?.title} • ${result?.level}`

    repeat.addEventListener('click', () => {
      linkToRunTest(result.id)
      this.clear()
    })

    back.addEventListener('click', () => {
      linkToTests()
      this.clear()
    })

    answer.addEventListener('click', () => {
      linkToTestAnswer()
    })
  }

  clear () {
    localStorage.setItem('finished', JSON.stringify({
      name: '', level: '', answers: '', point: '', length: '',
    }))
  }
}