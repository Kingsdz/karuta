<template>
  <nav class="navbar fixed-top">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" height="30" class="d-inline-block align-top" alt="amazon web services Viet Nam">
      {{title}}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      title: 'AWS Vietnam - UG'
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
