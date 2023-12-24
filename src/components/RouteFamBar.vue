<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div>
    <RouterLink to="/RouterFam/RouteChild1">RouteChild1</RouterLink>
    <RouterLink to="/RouterFam/RouteChild2">RouteChild2</RouterLink>
  </div>
</template>

<style lang="scss">

</style>