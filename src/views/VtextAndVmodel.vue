<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      title: "title",
      info: {
        name: "奶茶",
        age: 200,
        type: "貓",
      },
      cool: "",
      selectedText: "",
      lazyText: "",
      numberText: "",
      trimText: "",
      checkboxText: [],
      radioText: "",
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
  },
  mounted(){
    this.setLocation(2)
  },
};
</script>

<template>
  <button type="button" @click="getLocation">btn</button>
  <button type="button" @click="setLocation(2)">btn2</button>
  <h1>{{ this.title }}</h1>
  <!-- V-text -->
  <h2>V-text</h2>
  <p v-text="'this is a page'"></p>
  <p v-text="info"></p>
  <p v-text="'info' + info"></p>
  <p v-text="`info ${title}`"></p>
  <p v-text="`info ${info}`"></p>
  <p>{{ this.info }}</p>

  <br />
  <!-- v-model -->
  <h2>V-model</h2>
  <input type="text" v-model="cool" />
  <p>{{ this.cool }}</p>
  <select v-model="selectedText">
    <option value="">請選擇</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <p>{{ this.selectedText }}</p>
  <!-- lazy.number.trim -->
  <h2>lazy</h2>
  <input type="text" v-model.lazy="lazyText" />
  <p>{{ this.lazyText }}</p>
  <h2>number</h2>
  <input type="text" v-model.number="numberText" />
  <p>{{ this.numberText }}</p>
  <h2>trim</h2>
  <input type="text" v-model.trim="trimText" />
  <p>{{ this.trimText }}</p>
  <!-- checkbox 複選 (要用陣列綁定) -->
  <label for="">早餐</label>
  <input type="checkbox" v-model="checkboxText" name="meal" value="breakfast" />
  <label for="">午餐</label>
  <input type="checkbox" v-model="checkboxText" name="meal" value="lunch" />
  <h3>{{ this.checkboxText }}</h3>
  <!-- radio 單選 (要用一般空字串綁定就行) -->
  <label for="">早餐</label>
  <input type="radio" v-model="radioText" name="food" value="早餐" />
  <label for="">午餐</label>
  <input type="radio" v-model="radioText" name="food" value="午餐" />
  <label for="">晚餐</label>
  <input type="radio" v-model="radioText" name="food" value="晚餐" />
  <h3>{{ this.radioText }}</h3>
</template>

<style scoped lang="scss"></style>
