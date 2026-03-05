import { linkToFinishedTest } from '../../router/links.js'

export default class Test{
  questions = [];
  point =  0;
  name = ''
  level = ''
  question = {}
  currentQuestion = 1
  isFinish = false;
  result = [];

  constructor() {
    let localTest = JSON.parse(localStorage.getItem('test'))
    this.questions = localTest.questions;
    this.name = localTest.name;
    this.level = localTest.level;
    this.question = localTest.questions[this.currentQuestion - 1];
  }

  skip = () => {
    console.log('skip')
  }

  next = (selectedValue) => {
    this.result[this.currentQuestion-1] = {
      question: this.question,
      selectedAnswer: selectedValue,
      isRight: selectedValue === this.question.answers
    };
    if(selectedValue === this.question.answers){
      this.point++;
    }


    if(this.currentQuestion < this.questions.length) {
      this.question = this.questions[this.currentQuestion]
      this.currentQuestion++;
    }else{
      this.finish()
    }
  }

  finish = () => {
    let data = {
      name: this.name,
      level: this.level,
      answers: this.result,
      point: this.point,
      length: this.questions.length,
    }
    localStorage.setItem('finished', JSON.stringify(data));
    linkToFinishedTest()
  }

  prev = () => {
    console.log('prev')
  }

  getStatus = () => {
    return {
      points: this.point,
      number: this.currentQuestion,
      question: this.question,
      title: this.name,
      level: this.level,
      length: this.questions.length,
    }
  }
}