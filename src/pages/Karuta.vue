<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-success mr-auto" type="button" v-on:click="previous">Previous</button>
      <button class="btn btn-success" type="button" v-on:click="next">Next</button>
    </div>
    <div class="row">
      <div class="highlight rounded">
        {{index+1}} / {{questions.length}}
      </div>
    </div>
    <question v-if="questions.length > 0" :slQuestion="questions[index]"></question>
  </div>
</template>

<script>

import Question from '../components/Question.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'karuta',
  components: { Question },
  data () {
    return {
      index: 0
    }
  },
  computed: mapGetters({
    questions: 'allQuestions'
  }),
  methods: {
    previous: function (event) {
      if (this.index > 0) this.index--
    },
    next: function (event) {
      if (this.questions.length > this.index + 1) this.index++
    }
  },
  created () {
    this.$store.dispatch('getAllQuestions')
  }
}
</script>

<style scoped>
  .highlight {
    padding: 0.5em;
    margin-top: 0.5em;
    background-color: #f8f9fa;
  }

  h1, h2 {
    font-weight: normal;
  }
</style>
