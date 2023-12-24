<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import InjectFather from "../components/InjectFather.vue";
import {computed} from 'vue'
import {ref, provide} from 'vue'
export default {
  data() {
    return {
        message: "hello!",
        dataArr: ["a", "b"],
        cat: {
            name:"奶茶",
            age:"24",
        }
    };
  },
  provide(){
    return{
        proMessage: computed(()=> this.message),
        cool:"cool",
        arr: this.dataArr,
        pet: this.cat,
    }
  },
  setup(){
    let setupMsg = ref('setupMsg') //setupMsg = "setupMsg"
    provide('setMSG',setupMsg)
    return{
        setupMsg
    }
  },
  methods: {
    ...mapActions(counter, ["setLocation"]),
    addArr(){
        this.dataArr.push(this.setupMsg)
    },
    addAtt(){
        this.cat.type = "特上奶茶"
    },
  },
  components: {
    //元件
    InjectFather,
  },
  mounted() {
    this.setLocation(14);
  },
};
</script>

<template>
<div class=grandArea>
    <h3>爺爺的變數們</h3>
    <h4>{{ this.message }}</h4>
    <input type="text" v-model="message">
    <h4>{{ this.setupMSG }}</h4>
    <input type="text" v-model="setupMsg">
    <h4>{{ this.dataArr }}</h4>
    <button type="button" @click="this.addArr()">btn</button>
    <h4>{{ this.cat }}</h4>
    <button type="button" @click="this.addAtt()">btn2</button>
    <InjectFather />
</div>
</template>

<style scoped lang="scss">
.grandArea{
    height: 100%;
    width: 800px;
    border: 1px solid black;
    margin: 0 auto;
}
</style>
