<script>
import { RouterLink, RouterView } from "vue-router";
import RouteFamBar from "../components/RouteFamBar.vue";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
    methods: {
    ...mapActions(counter, ["setLocation"]),
  },
  components: {
    RouterView,
    RouteFamBar,
  },
};
</script>

<template>
<div class="famArea">
  <div class="leftBar">
    <RouteFamBar />
  </div>
  <div class="rightContent">
    <RouterView />
  </div>
  </div>
</template>

<style lang="scss" scoped >
.famArea{
    width: 100vw;
    height: 100vh;
    display: flex;

    .leftBar{
        width: 50%;
        height: 100%;
        margin-right: 10px;
    }
    .rightContent{
        width: 50%;
        height: 100%;
    }
}

</style>
