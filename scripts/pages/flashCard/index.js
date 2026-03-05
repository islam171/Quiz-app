import { content } from './content.js'
import { flashes } from '../../data/flashes.js'

export default class FlashesCardPage {

  constructor () {
    this.html = content
    this.flashId = JSON.parse(localStorage.getItem('flash')).id
    this.topic = flashes.find(item => item.id === Number(this.flashId))
  }

  KEY = 'flash'



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
    };

    this.questions = this.topic.question

    this.els.topicKicker.textContent = `🃏 Флеш-карточки • ${this.topic.id}`
    this.els.topicTitle.textContent = this.topic.title;
    this.els.topicDesc.textContent = this.topic.desc;
    this.els.level.textContent = this.topic.level;

    this.state = {
      order: this.questions.map(item => item.id),
      index: 0,
    }



  }

  setFlipped(isFlipped) {
    this.els.card.classList.toggle("flipped", isFlipped);
  }

  view(){

  }

}




