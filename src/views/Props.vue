<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import child from "../components/child.vue";
export default {
  data() {
    return {
      title: "father to son",
      name: "",
      pwd: "",
      tele: "",
      openchild: false,
      warmText: "",
      num: "",
      dog: {
        name: "奶茶",
        type: "柴犬",
        age: "100",
      },
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    checkInfo() {
      const allIn = document.querySelectorAll("input");
      this.num = 0;
      allIn.forEach((item) => {
        if (item.value.length == 0) {
          this.warmText = "打完啊";
          return;
        }
        this.num = this.num + 1;
      });
      if (this.num == allIn.length) {
        this.openchild = !this.openchild;
      }
    },
  },
  components: {
    //元件
    child,
  },
  mounted() {
    this.setLocation(10);
  },
};
</script>

<template>
  <div class="area">
    <h2>{{ this.title }}</h2>
    <!-- <child v-bind:parentMsg="this.title"/> -->
    <!-- <child
      v-bind:parentMsg="this.title"
      :inputName="this.name"
      :inputPwd="this.pwd"
      :inputTele="this.tele"
      v-show="this.openchild == true"
    /> -->
    <!-- 註冊頁面 -->
    <!-- 名字密碼手機 props輸入 child確認 -->
    <!-- <h1 v-show="this.num !== 3" style="color: red">{{ this.warmText }}</h1>
    <div class="coolform" v-show="this.openchild == false">
      <label for="">名字</label><input v-model="this.name" type="text" />
      <label for="">密碼</label><input v-model="this.pwd" type="text" />
      <label for="">手機</label><input v-model="this.tele" type="number" />
      <button type="button" @click="checkInfo">確認</button>
    </div> -->

    <!-- 讓v-bind自動幫我拆解物件 -->
    <child v-bind="this.dog"/>
    <!-- 以下程式碼會傳遞整個子元件，並使子元件可修改，這是bug，絕對要禁止 -->
    <!-- <child :dog="this.dog"/> -->




  </div>
</template>

<style scoped lang="scss">
.area {
  width: 80%;
  height: 80%;
  border: 1px solid black;
  margin-top: 50px;
  margin-left: 50px;
}
</style>
