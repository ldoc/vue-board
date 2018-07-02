<template>
  <svg :viewBox="zoom" :height="h" :width="w">
    <Tile
      v-for="item in tiles"
      :i="item.i"
      :j="item.j"
      :size="tileSize"
      :color="item.color"
      :key="`${item.i}-${item.j}`"
      :offSetX="(tileSize * rows)/2"
      :offSetY="(tileSize * cols)/2"/>
    <circle cx="0" cy="0" r="100" stroke="black" stroke-width="3" stroke-dasharray="10" fill="none" />
  </svg>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Tile from './Tile.vue'
import TouchEvents from '../mixins/TouchEvents.js'

export default {
  name: 'Board',
  data: function () {
    return{
      vBox: [],
      zoomLevel: 0,
      rot: 0
    }
  },
  props:['w','h'],
  computed: {
    ...{
      zoom: function() {
        const zL = this.zoomLevel;
        this.vBox = [-(this.w/2) - (zL / 2),-(this.h/2) - (zL / 2),this.w + zL,this.h + zL];
        return `${this.vBox[0]} ${this.vBox[1]} ${this.vBox[2]} ${this.vBox[3]}`;
      }
    },
    ...mapState({
      tileSize: state => state.board.tileSize,
      tiles: state => state.board.tiles,
      rows: state => state.board.rows,
      cols: state => state.board.cols
    })
  },
  methods: {
    wheel(e){
      this.zoomLevel += e.wheelDelta > 0 ? 10 : -10;
    }
  },
  components: {Tile},
  mixins: [TouchEvents]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
