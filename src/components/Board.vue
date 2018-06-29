<template>
  <svg :viewBox="zoom">
    <Tile v-for="item in tiles" :i="item.i" :j="item.j" :color="item.color" :key="`${item.i}-${item.j}`"/>
  </svg>
</template>

<script>
import { mapState } from 'vuex'
import Tile from './Tile.vue'
export default {
  name: 'Board',
  data: function () {
    return{
      vBox: []
    }
  },
  computed: {
    ...{
      zoom: function() {
        if (this.vBox.length == 0) {
          this.vBox = [0,0,200,200];
        }
        return `${this.vBox[0]} ${this.vBox[1]} ${this.vBox[2]} ${this.vBox[3]}`;
      }
    },
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
