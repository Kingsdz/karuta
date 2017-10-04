<template>
  <nav class="navbar fixed-top">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="amazon web services Viet Nam">
      {{title}}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      title: 'Amazon web services Vietnam'
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #232f3e;
  }

  .navbar-brand {
    color: #fff;
  }
</style>
