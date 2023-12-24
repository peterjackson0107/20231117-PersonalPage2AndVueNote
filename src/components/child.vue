<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {};
  },
  props: [
    //此為父層的暗號，不為Props.vue檔案
    "parentMsg",
    "inputName",
    "inputPwd",
    "inputTele",
    "personName",
    "dog",
    "name",
    "type",
    "age",
  ],
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation", "getData"]),
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
    <h3>childArea</h3>
    <!-- <h3>{{ this.parentMsg }}</h3>
    <h3>{{ this.inputName }}</h3>
    <h3>{{ this.inputPwd }}</h3>
    <h3>{{ this.inputTele }}</h3> -->
    <input type="text" v-model="this.dogName">
    <h3>{{ this.name }}</h3>
    <h3>{{ this.type }}</h3>
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
