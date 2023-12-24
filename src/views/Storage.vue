<script>
import { isBuiltInDirective } from "@vue/shared";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
        dog:"11",
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    storage(){
        localStorage.setItem("dog",JSON.stringify(this.dog))
        console.log(JSON.stringify(this.dog))
        console.log(typeof(JSON.stringify(this.dog)))
        let obj = localStorage.getItem("dog")
        console.log(JSON.stringify(obj))
    },
  },
  mounted() {
    this.setLocation(9);
  },
};
</script>

<template>
    <button type="button"  @click="this.storage()">你有種按我啊</button>
    {{ this.dog }}
    {{ JSON.stringify(obj) }}
</template>

<style scoped lang="scss"></style>
