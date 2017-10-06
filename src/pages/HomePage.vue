<template>
  <div class="container">
    <div class="row all-questions">
      <div class="col-md text-center">
        <button type="button" class="btn btn-success btn-lg" v-on:click="$_getAllQuestions">All Questions</button>
      </div>
    </div>
    <div class="row">
      <question-package slPackage="simple"></question-package>
      <question-package slPackage="standard"></question-package>
      <question-package slPackage="ultimate"></question-package>
    </div>
  </div>
</template>

<script>

import QuestionPackage from '../components/QuestionPackage.vue'

export default {
  name: 'home',
  components: { QuestionPackage },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    $_getAllQuestions: function () {
      this.$router.push({ path: '/karuta' })
    }
  }
}
</script>

<style scoped>
  .all-questions {
    margin-bottom: 20px;
  }
</style>
