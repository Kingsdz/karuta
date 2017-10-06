<template>
  <div class="container">
    <div class="row all-questions">
      <div class="col-md text-center">
        <button type="button" class="btn btn-success btn-lg" v-on:click="getAllQuestions">All Questions</button>
      </div>
    </div>
    <div class="row">
      <package slPackage="simple"></package>
      <package slPackage="standard"></package>
      <package slPackage="ultimate"></package>
    </div>
  </div>
</template>

<script>

import Package from '../components/Package.vue'

export default {
  name: 'home',
  components: { Package },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    getAllQuestions: function () {
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
