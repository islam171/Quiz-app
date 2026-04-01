import html from './index.html'
import './style.scss'
import { materials } from '../../data/materials.js'
import { linkToTests } from '../../router/links.js'

export default class MaterialSinglePage{
  constructor() {
    this.html = html
  }

  render() {
      const { id }  = JSON.parse(localStorage.getItem('material'));
      const material = materials.find((material) => material.id === Number(id))
      const videoWrap = document.querySelector(".video-wrap")
      const title = document.querySelector(".material-single-title")
      const desc = document.querySelector(".material-single-desc")
    const test = document.querySelector(".material-single-test")

    videoWrap.innerHTML = `
        <iframe
            src="${material.url}"
            title="${material.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
    `
    title.innerHTML = material.name
    desc.innerHTML = material.desc

    test.addEventListener("click", e => {
      linkToTests()
    })
  }
}