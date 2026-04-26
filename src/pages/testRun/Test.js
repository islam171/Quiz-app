import { linkToFinishedTest, linkToTests } from '../../router/links.js'
import { tests } from '../../data/tests'

export default class Test {
  questions = []
  point = 0
  title = ''
  level = ''
  question = {}
  currentQuestion = 1
  isFinish = false
  result = []
  id = 0

  constructor () {
    let localTest = JSON.parse(localStorage.getItem('test'))
    let test = tests.find(item => item.id === Number(localTest.id))

    this.id = test.id
    this.questions = test.questions
    this.title = test.name
    this.level = test.level
    this.question = test.questions[this.currentQuestion - 1]

    this.questions.map((item, index) => {
      this.result[index] = {
        question: this.questions[index],
        selectedAnswer: null,
        isRight: null
      }
    })

  }

  skip = () => {
    console.log('skip')
  }

  next = (selectedValue) => {
    this.result[this.currentQuestion - 1] = {
      question: this.question,
      selectedAnswer: selectedValue,
      isRight: selectedValue === this.question.answers
    }
    if (selectedValue === this.question.answers) {
      this.point++
    }

    if (this.currentQuestion < this.questions.length) {
      this.question = this.questions[this.currentQuestion]
      this.currentQuestion++
    } else {
      this.finish()
    }
  }

  finish = () => {
    this.isFinish = true
    let data = {
      title: this.title,
      level: this.level,
      answers: this.result,
      points: this.point,
      length: this.questions.length,
      id: this.id
    }
    localStorage.setItem('finished', JSON.stringify(data))
    linkToFinishedTest()
    localStorage.setItem('test', JSON.stringify({ id: null, current: null }))
  }

  quit = () => {
    this.questions = []
    this.point = 0
    this.title = ''
    this.level = ''
    this.question = {}
    this.currentQuestion = 1
    this.isFinish = false
    this.result = []
    this.id = 0
    linkToTests()
  }

  prev = () => {
    if (this.currentQuestion > 0) {
      this.question = this.questions[this.currentQuestion - 1]
      this.currentQuestion--
    }
  }

  getById = (id) => {
    if(id > 0 && id <= this.questions){
      this.question = this.questions[id]
    }
  }

  getStatus = () => {
    return {
      points: this.point || '',
      number: this.currentQuestion || '',
      question: this.question || '',
      title: this.title || '',
      level: this.level || '',
      length: this.questions.length || 0,
    }
  }
}