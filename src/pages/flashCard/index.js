import { flashes } from '../../data/flashes.js'
import html from './index.html'
import { Flash } from './Flash'
import { linkToFlash } from '../../router/links'
import "./styles.scss"

export default class FlashesCardPage {
  KEY = 'flash'

  constructor () {
    this.html = html
    this.flashId = JSON.parse(localStorage.getItem(this.KEY)).id
    this.topic = flashes.find(item => item.id === Number(this.flashId))
  }

  render () {
    this.els = {
      topicKicker: document.getElementById("topicKicker"),
      topicTitle: document.getElementById("topicTitle"),
      topicDesc: document.getElementById("topicDesc"),
      level: document.getElementById("level"),
      pos: document.getElementById("pos"),
      total: document.getElementById("total"),
      opened: document.getElementById("opened"),
      pct: document.getElementById("pct"),
      bar: document.getElementById("bar"),

      card: document.getElementById("card"),
      frontText: document.getElementById("frontText"),
      backText: document.getElementById("backText"),

      prevBtn: document.getElementById("prevBtn"),
      nextBtn: document.getElementById("nextBtn"),
      flipBtn: document.getElementById("flipBtn"),
      shuffleBtn: document.getElementById("shuffleBtn"),
      resetBtn: document.getElementById("resetBtn"),

      qList: document.getElementById("qList"),
      quitFlash: document.getElementById("quitFlash"),
    };

    const flash1 = new Flash();

    this.questions = this.topic.question

    this.els.topicKicker.textContent = `🃏 Флеш-карточки • ${this.topic.id}`
    this.els.topicTitle.textContent = this.topic.title;
    this.els.topicDesc.textContent = this.topic.desc;
    this.els.level.textContent = this.topic.level;

    this.els.nextBtn.addEventListener("click", () => {
      flash1.right()
      this.view(flash1.getStatus())
    })

    this.els.prevBtn.addEventListener("click", () => {
      flash1.wrong()
      this.view(flash1.getStatus())
    })

    this.els.quitFlash.addEventListener("click", () => {
      flash1.quit()
      linkToFlash()
    })

    this.els.card.addEventListener("click", () => {
      this.els.card.classList.toggle("flipped")
    })

    this.view(flash1.getStatus())
  }

  setFlipped(isFlipped) {
    this.els.card.classList.toggle("flipped", isFlipped);
  }

  view(status){

    let { currentId, questions, id, isProcess, right } = status

    if(!isProcess){
      return
    }

    let flash = flashes.find(item => item.id === id)
    if(!flash){
      return
    }


    let length = flash.questions.length
    let que = flash.questions;
    let question = que.find(item => item.id === questions[currentId]);


    this.els.frontText.textContent = question.title;
    this.els.backText.textContent = question.answers;
    this.els.level.textContent = flash.level;
    this.els.bar.style.width = `${right / length * 100}%`
    this.els.pct.textContent = `${right / length * 100}`
  }

}




