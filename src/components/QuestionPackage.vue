<template>
  <!-- item -->
  <div class="col-md-4 text-center">
      <div class="panel panel-package">
          <div class="panel-heading" v-bind:class="slPackage">
              <p>{{slPackage}}</p>
          </div>
          <div>
            <ul class="list-group text-center">
              <li class="list-group-item" v-for="value in packages[slPackage]">
                {{ value }}
              </li>
            </ul>
          </div>
          <div class="panel-footer">
              <button type="button" class="btn btn-success" v-on:click="$_gotoPackage(20)">20</button>
              <button type="button" class="btn btn-warning" v-on:click="$_gotoPackage(40)">40</button>
              <button type="button" class="btn btn-danger" v-on:click="$_gotoPackage(60)">60</button>
          </div>
      </div>
  </div>
  <!-- /item -->
</template>

<script>

const packages = {
  simple:
  [
    'simple',
    'simple'
  ],
  standard:
  [
    'standard',
    'standard',
    'standard'
  ],
  ultimate:
  [
    'ultimate',
    'ultimate',
    'ultimate',
    'ultimate'
  ]
}

export default {
  name: 'question-package',
  data () {
    return {
      packages
    }
  },
  props: ['slPackage'],
  methods: {
    $_gotoPackage: function (num) {
      this.$router.push({ path: `/karuta/${this.slPackage}/${num}` })
    }
  }
}
</script>

<style scoped>
  .panel {
    width: 300px;
    margin: 20px auto;
  }
  .panel-package {
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    -webkit-transition: all .3s ease;
  }
  .panel-package .panel-heading {
    padding: 10px 0;
    border-radius: 5px 5px 0px 0px;
  }
  .panel-package .panel-heading p {
    font-family: 'Open Sans';
    font-weight: 800;
    font-size: 29px;
    text-transform: uppercase;
    color: #2c3e50;
    padding: 0;
    margin: 0;
  }
  .panel-package .list-group-item {
    color: #2c3e50;
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 1px solid rgba(250, 250, 250, 0.5);
  }
  .panel-package .list-group-item:last-child {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .panel-package .list-group-item:first-child {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
  .panel-footer {
    padding: 10px 15px;
    background-color: #ddd;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .simple {
    background-color: #ddd;
  }
  .standard {
    background-color: #ddd;
  }
  .ultimate {
    background-color: #ddd;
  }
  .panel-footer button {
    padding: .5rem 1.75rem;
  }
</style>
