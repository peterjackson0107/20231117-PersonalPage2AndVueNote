<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";

export default {
  data() {},
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
  },
  props:[
    "userId",
  ],
  mounted() {
    this.setLocation(15);
    console.log(this.$route.params.userId)
    console.log(this.userId)
  },
};
</script>

<template>
    <div>
        <h1>UserId:{{ this.$route.params.userId }}</h1>
        <h2>UserId:{{ this.userId }}</h2>
    </div>
</template>

<style lang="scss">

</style>
