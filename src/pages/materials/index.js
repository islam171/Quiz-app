import { materials } from '../../data/materials.js'
import { linkToMaterialSingle } from '../../router/links.js'
import html from './index.html'
import './style.scss'

export default class MaterialPage{
  constructor() {
    this.html = html
  }

  render() {
    const content = document.querySelector('.material-content')
    content.innerHTML = ''
    materials.forEach(material => {
      content.innerHTML += `
                <article class="item">
                    <h3>${material.name}</h3>
                    <p>${material.desc}</p>
                    <div class="row">
<!--                    <span class="small">Чтение: 6 мин</span>-->
                        <div class="btn material-btn primary" data-id="${material.id}">Открыть</div>
                    </div>
                </article>
      `
    })


    const materialButtons = document.querySelectorAll('.material-btn')
    materialButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {

        linkToMaterialSingle(e.target.dataset.id)
      })
    })
  }



}