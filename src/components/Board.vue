<template>
  <svg>
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central">Hi from svg board</text>
  </svg>
</template>

<script>
export default {
  name: 'Board'
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
