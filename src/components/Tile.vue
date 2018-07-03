<template>
  <rect :x="x" :y="y" :width="size" :height="size" :fill="color" stroke="white" stroke-width="2"/>
</template>

<script>
export default {
  name: 'Tile',
  props: ['i','j','size','color','offSetX','offSetY'],
  computed:{
    x: function(){return this.j * this.size - (this.offSetY ? this.offSetY : 0)},
    y: function(){return this.i * this.size - (this.offSetX ? this.offSetX : 0)}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
