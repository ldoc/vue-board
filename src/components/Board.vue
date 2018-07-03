<template>
  <svg :viewBox="zoom" :height="h" :width="w">
    <g :transform="rotation">
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
    </g>

  </svg>
</template>

<script>
import { mapState } from 'vuex'
import Tile from './Tile.vue'
import TouchEvents from '../mixins/TouchEvents.js'

export default {
  name: 'Board',
  data: function () {
    return{
      zoomLevel: 0,
      offX: 0,
      offY: 0,
      rot: 0
    }
  },
  props:['w','h'],
  computed: {
    ...{
      zoom: function() {
        const zL = this.zoomLevel;
        const dzX = zL * this.w;
        const dzY = zL * this.h;
        return [-(this.w/2) - (dzX / 2) + this.offX,-(this.h/2) - (dzY / 2) + this.offY, this.w + dzX, this.h + dzY];
      },
      vBox: function() {
        return `${this.zoom[0]} ${this.zoom[1]} ${this.zoom[2]} ${this.zoom[3]}`;
      },
      rotation: function() {
        return `rotate(${this.rot})`;
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
      const inc = this.zoomLevel + (e.wheelDelta > 0 ? 0.05 : -0.05);
      if((this.w + (inc * this.w) > 0) && (this.h + (inc * this.h)) > 0) this.zoomLevel = inc;
    },
    pan(v){
      const invdX = -1 * (this.vector.p2.x - this.vector.p1.x);
      const invdY = -1 * (this.vector.p2.y - this.vector.p1.y);
      if(invdX > 2 || invdX < -2) this.offX += invdX;
      if(invdY > 2 || invdY < -2) this.offY += invdY;
    },
    rotate(pX,pY,dX,dY){
      if(pX > this.w / 2){
        this.rot += 0.2 * dY;
      }
      else {
        this.rot -= 0.2 * dY;
      }
      if(pY < this.h / 2){
        this.rot += 0.2 * dX;
      }
      else {
        this.rot -= 0.2 * dX;
      }
    }
  },
  components: {Tile},
  mixins: [TouchEvents]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>