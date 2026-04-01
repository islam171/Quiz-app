import html from './index.html'
import './style.scss'
import { flashes } from '../../data/flashes'
import { linkToFlash, linkToFlashCard } from '../../router/links'

export default class FinishFlashPage{
  constructor() {
    this.html = html
  }

  render() {
    this.els = {
      topicKicker: document.getElementById("topicKicker"),
      topicTitle: document.getElementById("finishTopic"),
      finishCount: document.getElementById("finishCount"),
      flashMistakes: document.getElementById("flashMistakes"),
      restartBtn: document.getElementById("restartBtn"),
      toFlashes: document.getElementById("toFlashes"),
    };

    let finishData = JSON.parse(localStorage.getItem("finishFlash"));
    if(!finishData){
      console.error("Error, finish data is not loaded");
      return;
    }
    let flash = flashes.find(item => item.id === finishData.id);
    if(!flash){
      return
    }

    this.els.finishCount.textContent = finishData.length;
    this.els.flashMistakes.textContent = finishData.mistakes;
    this.els.topicTitle.textContent = flash.title;

    this.els.restartBtn.addEventListener('click', event => {
      linkToFlashCard(flash.id);
    })

    this.els.toFlashes.addEventListener('click', event => {
      linkToFlash()
    })
  }

}