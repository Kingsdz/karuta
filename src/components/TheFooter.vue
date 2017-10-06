<template>
  <footer class="footer">
    <div class="row">
      <div class="mr-auto">AWS Karuta game - Crafted by <a href="https://osam.io/">OSAM</a></div>
      <div>Invented by Shingo Yoshida</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'the-footer'
}
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding: .5rem 1rem;
    background-color: #f5f5f5;
  }
  .footer div{
    color: #2c3e50;
    font-size: 14px;
  }

  .footer div.row {
    margin-right: 0;
    margin-left: 0;
  }
</style>
