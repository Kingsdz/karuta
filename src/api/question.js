import _rdQuestions from './question-db'

export default {
  getQuestions (cb) {
    setTimeout(() => cb(_rdQuestions), 0)
  }
}
