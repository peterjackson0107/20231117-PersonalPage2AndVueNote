<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
        text:"childOrange",
        text2:"childOrangeorange",
    };
  },
  props: [
    //此為父層的暗號，不為Props.vue檔案
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
    <h3>In child2</h3>
    <p>{{ this.text }}</p>
    <p>{{ this.text2 }}</p>
    <button type="button" @click="this.emitGo()">btn</button><br>
    <button type="button" @click="$emit('orange',this.text2)">btn2</button>
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
