import { linkToRunTest, linkToTests } from '../../router/links.js'
import html from './index.html'

export default class FinishTestPage{
  constructor() {
    this.html = html
  }

  render() {
    const result = JSON.parse(localStorage.getItem('finished'))

    const score = document.getElementById('finish-test-score')
    const percentage = document.getElementById('finish-test-percentage')
    const name = document.getElementById('finish-test-name')
    const repeat = document.getElementById('finish-test-repeat')
    const back = document.getElementById('finish-test-back')

    score.innerHTML = `<div>${result.point} / ${result.length}</div>`
    percentage.innerHTML = `Процент: <b>${result.point / result.length * 100}%</b>`
    name.innerHTML = `${result?.name} • ${result?.level}`

    repeat.addEventListener('click', () => {
      linkToRunTest(result.id)
      this.clear();
    })

    back.addEventListener('click', () => {
      linkToTests()
      this.clear()
    })
  }

  clear() {
    localStorage.setItem('finished', JSON.stringify({
      name: '',
      level: '',
      answers: '',
      point: '',
      length: '',
    }))
  }
}