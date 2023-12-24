<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      obj:{
        name: "",
        tele: "",
        sex: "",
        ad: "",
        age: "",
        }
    };
  },
  props: [
    //此為父層的暗號，不為Props.vue檔案
  ],
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation", "getData"]),
    emitGo() {
      console.log(this.text);
      this.$emit("orange", this.text);
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
  <div class=".child1">
    <h1>Child1 這邊輸入資料</h1>
    <h3>{{ this.obj }}</h3>
    <label for="">姓名：</label>
    <input type="text" v-model="this.obj.name">
    <label for="">手機：</label>
    <input type="text" v-model="this.obj.tele">
    <label for="">性別：</label>
    <input type="radio" v-model="this.obj.sex" value="男" name="sex"> 
    <span>男</span>
    <input type="radio" v-model="this.obj.sex" value="女" name="sex">
    <span>女</span>
    <label for="">地址：</label>
    <input type="text" v-model="this.obj.ad">
    <label for="">年齡：</label>
    <input type="number" v-model="this.obj.age">
    <button type="button" @click="$emit('get',this.obj)">送出</button>
    
    <!-- 以下程式碼較複雜，要好好研究 -->
    <!-- <input type="text" @input="'$emit(update,text)' ,$event.target.value"> -->
    
    <button type="text" @click="console.log($event)">event</button>
    
    <input type="text" @input="console.log($event)">
  </div>



</template>

<style scoped lang="scss">
.child1 {
  width: 500px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid black;
}
</style>
