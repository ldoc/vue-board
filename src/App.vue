<template>
  <div id="app">
    <Board :w="w" :h="h"/>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  data: function(){
    return {
      w: document.body.offsetWidth,
      h: document.body.offsetHeight
    }
  },
  components: {
    Board
  },
  mounted: function(){
    document.body.onresize = (e) => {
      this.w = document.body.offsetWidth;
      this.h = document.body.offsetHeight;
    };
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
  overflow: hidden;
}
</style>