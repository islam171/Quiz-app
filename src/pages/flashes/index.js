import { flashes } from '../../data/flashes.js'
import { linkToFlashCard } from '../../router/links.js'
import './style.scss'
import html from './index.html'

export default class FlashesPage {

  constructor () {
    this.html = html
  }

  render () {
    const grid = document.getElementById('topicsGrid')
    grid.innerHTML = flashes.map(t => `
    <article class="topic-card">
      <div class="topic-inner">
        <div class="badges">
          <span class="badge purple">Тема</span>
          <span class="badge green">${t.level}</span>
          <span class="badge">${t.count} карточек</span>
        </div>

        <h3 class="topic-title">${t.title}</h3>
        <p class="topic-desc">${t.desc}</p>
      </div>

      <div class="topic-footer">
        <div class="topic-stats">
          <span class="badge">Режим: Learn</span>
          <span class="badge">Повторение</span>
        </div>

        <!-- Переход на страницу темы -->
        <div class="start-link pointer flash-card" id="flash-card" data-id="${t.id}">
          Открыть →
        </div>
      </div>
    </article>
  `).join('')

    const linkFlashCard = document.querySelectorAll('.flash-card')

    linkFlashCard.forEach(item => item.addEventListener('click', (e) => {
      linkToFlashCard(e.target.dataset.id)
    }))

  }

}




