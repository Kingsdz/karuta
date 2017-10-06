import _rdQuestions from './question-db'
import _ from 'lodash'

export default {
  getQuestions (cb, params) {
    setTimeout(() => {
      let rdQuestions = _.shuffle(_rdQuestions)
      let num = +params.number
      if (Number.isInteger(num)) {
        rdQuestions = rdQuestions.slice(0, num)
      }

      cb(rdQuestions)
    }, 0)
  }
}
