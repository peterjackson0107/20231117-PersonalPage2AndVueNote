<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    //data=function(){}
    return {
      arr: [1, 2, 3],
      isDarkMode: false, // 初始化為 false，表示暗色模式未啟用
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 切換 isDarkMode 的值
    },
  },
  mounted(){
    this.setLocation(4)
  },
};
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="area" style="z-index: 0;">
  <header>
    <div class="headerArea">
      <!-- <div class="darkmodeButton">
    <button @click="toggleDarkMode" style="width: 50px"><i class="fa-solid fa-eye"></i></button>
  </div> -->
</div>
  </header>
  <div :class="{ 'dark-mode': isDarkMode }" class="mainArea">
    <div :class="{ 'dark-mode': isDarkMode }" class="nocoolArea"></div>
    <div :class="{ 'dark-mode': isDarkMode }" class="wordArea">
      <div :class="{ 'dark-mode': isDarkMode }" class="wordArea1">
        <h1>イモウト</h1>
        <span>めんトリ妹の襲来 共演していためんトリの妹。見た目は可愛くセリフはハードボイルドに、男女問わず使いやすいスタンプに仕上げっています。</span>
      </div>
      <div :class="{ 'dark-mode': isDarkMode }" class="coolArea" v-for="Item in arr">
        <div v-for="Item in arr">
          <img src="data:image/jpeg;base64,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" alt="">
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div :class="{ 'dark-mode': isDarkMode }" class="footerArea"></div>
  </footer>
</div>
</template>

<style scoped lang="scss">
.dark-mode {
  background-color: #333;
  color: #fff;
    span{
      color: #fff;
    }
    h1{
      color: #fff;
    }
}
h1{
  font-family: 'M PLUS 1', sans-serif;
  }
span{
  font-family: 'M PLUS 1', sans-serif;
}
.area{
  height: 100vh;
  .headerArea {
  width: 100%;
  height: 50%;
  background-color: rgb(214, 123, 255);
}
.mainArea {
  width: 100%;
  height: 80%;
  display: flex;
  .nocoolArea {
    width: 20%;
    height: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: rgb(148, 11, 146);

  }
  .wordArea {
    width: 80%;
    .wordArea1 {
      flex-direction: column;
      
    }
    .coolArea {
      display: flex;
      justify-content: center;
      text-align: center;
      img {
        width: 200px;
        height: 200px;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
      }
    }
  }
}
.footerArea {
  width: 100%;
  height: 150px;
  background-color: rgb(148, 11, 146);
}
}

</style>
