<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100vh;
  margin: 0px;
}

#app {
  height: 100%;
  width: 100%;
}
</style>