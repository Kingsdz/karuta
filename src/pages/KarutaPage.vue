<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-success mr-auto" type="button" v-on:click="$_previous">Previous</button>
      <button class="btn btn-success" type="button" v-on:click="$_next">Next</button>
    </div>
    <div class="row">
      <div class="highlight rounded">
        {{index+1}} / {{questions.length}}
      </div>
    </div>
    <question-item v-if="questions.length > 0" :slQuestion="questions[index]"></question-item>
  </div>
</template>

<script>

import QuestionItem from '../components/QuestionItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'karuta',
  components: { QuestionItem },
  data () {
    return {
      index: 0
    }
  },
  computed: mapGetters({
    questions: 'allQuestions'
  }),
  methods: {
    $_previous: function (event) {
      if (this.index > 0) this.index--
    },
    $_next: function (event) {
      if (this.questions.length > this.index + 1) this.index++
    }
  },
  created () {
    let params = {
      package: this.$route.params.package || 'default',
      number: this.$route.params.number || 'all'
    }
    this.$store.dispatch('getAllQuestions', params)
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
