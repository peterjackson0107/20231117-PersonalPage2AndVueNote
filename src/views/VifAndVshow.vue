<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      car: false,
      cars: 2,
      car2: false,
      house: 0,
      house2: 0,
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
  },
  mounted() {
    this.setLocation(7);
  },
  components: {
    
  },
};
</script>

<template>
  <h1>V-if</h1>
  <label for="">小名有車</label>
  <input type="checkbox" value="true" v-model="car" />
  <p v-if="car">確實有車子</p>
  <p v-if="cars == 3">確實有車子呢</p>
  <p>--------------------</p>

  <h1>V-show</h1>
  <label for="">小盒有車</label>
  <input type="checkbox" value="true" v-model="car2" />
  <p v-show="car2">小盒真的有車</p>
  <p>--------------------</p>

  <h1>V-if and V-else</h1>
  <label for="">小名有房</label>
  <select name="" id="" v-model="house">
    <option value="">請選擇</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>

  <p v-if="house == 1">普通的房子</p>
  <!-- 雖然是if else但是下面會變成一組 v-else只會往上找第一個v-if -->
  <p v-if="house == 2">豪大的房子</p>
  <p v-else>真的有房子?</p>
  <p>--------------------</p>

  <h1>V-if & V-else-if & V-else</h1>
  <label for="">大名有房</label>
  <select name="" id="" v-model="house2">
    <option value="">請選擇</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>

  <p v-if="house2 == 1">普通的房子</p>
  <p v-else-if="house2 == 2">豪大的房子</p>
  <p v-else>真的有房子?</p>
</template>

<style scoped lang="scss"></style>
