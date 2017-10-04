<template>
  <div>
    <div class="row">
      <div class="highlight rounded">
        {{slQuestion.text}}
      </div>
    </div>
    <div class="row">
      <audio preload controls="controls" :src="slQuestion.audio">
      </audio>
    </div>
    <div class="row justify-content-center button-control">
      <button class="btn" type="button" v-on:click="answerControl">{{btnText}}</button>
    </div>
    <div class="row" v-if="isShowImage">
      <div class="img-answer">
        <img :src="slQuestion.image" class="rounded mx-auto d-block" :alt="slQuestion.answer">
        <div class="img-title">{{slQuestion.answer}}</div>
      </div>
    </div>
  </div>
</template>

<script>

const _textShow = 'Click to show Answer'
const _textHide = 'Click to hide Answer'

export default {
  name: 'question',
  props: {
    slQuestion: {
      type: Object
    }
  },
  data () {
    return {
      btnText: _textShow,
      isShowImage: false
    }
  },
  methods: {
    answerControl: function (event) {
      this.isShowImage = !this.isShowImage
      if (this.isShowImage) {
        this.btnText = _textHide
      } else {
        this.btnText = _textShow
      }
    }
  },
  watch: {
    slQuestion: function () {
      this.btnText = _textShow
      this.isShowImage = false
    }
  }
}
</script>

<style scoped>
  .highlight {
    padding: 0.5em;
    margin: 1em 0;
    background-color: #f7f7f9;
  }

  audio {
    width: 100%;
  }

  .button-control {
    margin: 1em 0;
  }

  img {
    width: 200px;
    height: 200px;
  }
  .img-answer {
    margin: 0 auto;
  }
  .img-title {
    margin-top: 5px;
    text-align: center;
  }
</style>
