<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      point: 0,
      ntd: 0,
    };
  },
  watch: {
    //對變數做監聽
    point() {
      this.ntd = this.point * 1000;
      console.log(this.ntd);
    },
  },
  computed: {
    //類似偽元素概念，
    jpy() {
      return this.ntd * 4.5;
    },
    usd() {
      return this.ntd * 0.032;
    },
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    clickpoint() {
      this.point = this.point + 1;
    },
  },
  beforeCreate() {
    //vue黨建立且事件、變數、屬性等等未建立
    console.log("beforeCreate");
  },
  created() {
    //vue黨建立且事件、變數、屬性等等已建立
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    //dom tree 已建立
    console.log("mounted");
    this.setLocation(8);
  },
  beforeUpdate() {
    //變數已更動，但畫面未更新
    console.log("beforeUpdate");
  },
  update() {
    //變數已更動，畫面也同步完成
    console.log("update");
  },
  beforeUnmount() {
    //變數已更動，但畫面未更新
    console.log("beforeUnmount");
  },
  unmount() {
    //變數已更動，但畫面未更新
    console.log("unmount");
  },
};
</script>

<template>
  <p><b>point</b>：{{ this.point }}</p>
  <p><b>NTD</b>：{{ this.ntd }}</p>
  <p><b>JPY</b>：{{ this.jpy }}</p>
  <p><b>USD</b>：{{ this.usd }}</p>

  <div class="circle" @click="this.clickpoint()"></div>
</template>

<style scoped lang="scss">
.circle {
  width: 200px;
  height: 200px;
  background-color: rgb(119, 3, 123);
  border-radius: 50%;
  margin: 0 auto;
  transition: 1;
  &:hover {
    width: 299px;
    height: 299px;
  }
}
</style>
