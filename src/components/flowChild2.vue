<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
    };
  },
  props: [
    "name",
    "tele",
    "sex",
    "ad",
    "age",
  ],
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation", "getData"]),
    emitGo(){
        console.log(this.text);
        this.$emit("orange",this.text)
    },
  },
  mounted() {
    this.setLocation();
  },
  created() {
    this.getData();
  },
};
</script>

<template>
  <div class="childArea">
    <h3>{{ this.name }}</h3>
    <h3>{{ this.tele }}</h3>
    <h3>{{ this.sex }}</h3>
    <h3>{{ this.ad }}</h3>
    <h3>{{ this.age }}</h3>
  </div>
</template>

<style scoped lang="scss">
.childArea {
  width: 300px;
  height: 300px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
}
</style>
