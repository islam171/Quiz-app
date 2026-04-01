import { flashes } from '../../data/flashes'
import { linkToFinishFlash, linkToMain } from '../../router/links'

export class Flash{


  constructor () {
    this.json = JSON.parse(localStorage.getItem('flash'))
    this.flash = flashes.find(x => x.id === Number(this.json.id))

    let uniqueNumbers = new Set()
    while (uniqueNumbers.size < this.flash.count) {
      const randomNumber = Math.floor(Math.random() * (this.flash.count)) + 1;
      uniqueNumbers.add(randomNumber);
    }

    localStorage.setItem('flashState', JSON.stringify({id: this.flash.id, currentId: 0, right: 0, length: this.flash.count, questions: Array.from(uniqueNumbers), wrongQuestions: [], isProcess: true, wrong: 0}))

  }

  right(){
    let question = JSON.parse(localStorage.getItem('flashState'))

    let {questions, currentId, wrongQuestions, right} = question

    let newId = currentId + 1
    if(newId >= questions.length){
      newId = 0;
      questions = wrongQuestions
      wrongQuestions = []
    }

    let a = {
        ...question,
      currentId: newId,
      questions: questions,
      wrongQuestions,
      right: Number(right) + 1,
    }
    localStorage.setItem('flashState', JSON.stringify(a))
    if(this.isEmpty()){
      this.finish()
    }
  }

  wrong(){
    let question = JSON.parse(localStorage.getItem('flashState'))

    let {questions, currentId, wrongQuestions, wrong} = question

    wrongQuestions.push(questions[currentId])

    let newId = currentId + 1
    if(newId >= questions.length){
      newId = 0;
      questions = wrongQuestions
      wrongQuestions = []
    }


    let a = {
      ...question,
      currentId: newId,
      questions: questions,
      wrongQuestions,
      wrong: Number(wrong) + 1
    }
    localStorage.setItem('flashState', JSON.stringify(a))
    if(this.isEmpty()){
      this.finish()
    }
  }

  isEmpty(){
    let { questions, wrongQuestions } = JSON.parse(localStorage.getItem('flashState'))
    if(questions.length <= 0 && wrongQuestions.length <= 0){
      return true
    }return false
  }

  finish(){
    let question = JSON.parse(localStorage.getItem('flashState'))
    let a = {
      ...question,
      isProcess: false
    }

    let flash = flashes.find(x => x.id === Number(this.flash.id))
    if(!flash){
      console.error("Error")
    }

    let finish = {
      id: this.flash.id,
      mistakes: question.wrong,
      length: flash.count
    }

    localStorage.setItem('flashState', JSON.stringify(a))
    localStorage.setItem('finishFlash', JSON.stringify(finish))
    linkToFinishFlash()

  }

  getStatus(){
    let obj = JSON.parse(localStorage.getItem('flashState'))
    return obj
  }

  quit(){
    localStorage.setItem('flashState', null)
  }

}