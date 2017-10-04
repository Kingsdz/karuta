import _rdQuestions from './question-db'
import _ from 'lodash'

export default {
  getQuestions (cb) {
    setTimeout(() => cb(_.shuffle(_rdQuestions)), 0)
  }
}
