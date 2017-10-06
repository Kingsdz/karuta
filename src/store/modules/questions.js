import question from '../../api/question'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allQuestions: state => state.all
}

// actions
const actions = {
  getAllQuestions ({ commit }, params) {
    question.getQuestions(questions => {
      commit(types.RECEIVE_QUESTIONS, { questions })
    }, params)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_QUESTIONS] (state, { questions }) {
    state.all = questions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
