<template>
  <svg>
    <Tile v-for="item in tiles" :i="item.i" :j="item.j" :color="item.color" :key="`${item.i}-${item.j}`"/>
  </svg>
</template>

<script>
import { mapState } from 'vuex'
import Tile from './Tile.vue'
export default {
  name: 'Board',
  computed: {
    ...mapState({
      tiles: state => state.board.tiles
    })
  },
  components: {Tile}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
text {
  fill: black;
  font-family: "arial";
  font-size: 4vw;
}
svg {
  height: 100%;
  width: 100%;
}
</style>
