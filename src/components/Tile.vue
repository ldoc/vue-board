<template>
  <rect :x="x" :y="y" width="50" height="50" :fill="color" stroke="white" stroke-width="2"/>
</template>

<script>
export default {
  name: 'Tile',
  props: ['i','j','color'],
  computed:{
    x: function(){return this.i*50},
    y: function(){return this.j*50}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
