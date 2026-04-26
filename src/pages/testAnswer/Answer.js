import { linkToFinishedTest, linkToTests } from '../../router/links.js'
import { tests } from '../../data/tests'

export default class Test{
  questions = [];
  points =  0;
  title = ''
  level = ''
  question = {}
  currentQuestion = 1
  isFinish = false;
  result = [];
  id = 0;

  constructor() {
    let localTest = JSON.parse(localStorage.getItem('finished'))

    this.id = localTest.id
    this.answers = localTest.answers;
    this.title = localTest.title;
    this.level = localTest.level;
    this.answer = localTest.answers[this.currentQuestion - 1];
    this.points = localTest.point;
  }


  next = () => {
    if(this.currentQuestion < this.answers.length) {
      this.answer = this.answers[this.currentQuestion]
      this.currentQuestion++;
    }else{
      this.finish()
    }
  }

  prev = () => {
    if(this.currentQuestion > 0) {
      this.answer = this.answers[this.currentQuestion]
      this.currentQuestion--;
    }
  }

  finish = () => {
    this.isFinish = true
    linkToFinishedTest()
  }

  quit = () => {
    this.questions = [];
    this.point =  0;
    this.title = ''
    this.level = ''
    this.question = {}
    this.currentQuestion = 1
    this.isFinish = false;
    this.result = [];
    this.id = 0;
    linkToTests()
  }




  getStatus = () => {
    return {
      points: this.point || '',
      number: this.currentQuestion || '',
      question: this.answer.question || '',
      right: this.answer.isRight,
      selected: this.answer.selectedAnswer,
      title: this.title || '',
      level: this.level || '',
      length: this.answers.length || 0,
      answers: this.answers,
    }
  }
}