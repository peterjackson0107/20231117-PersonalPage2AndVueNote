<script>
import { isBuiltInDirective } from "@vue/shared";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      isDarkMode: false, // 初始化為 false，表示暗色模式未啟用
      tttle: "title",
      isBlue: false,
      isLarge: false,
      styleArr: [],
      imgText: "",
      arrText: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      test: "",
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 切換 isDarkMode 的值
    },
  },
  mounted() {
    this.setLocation(6);
  },
};
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <button @click="toggleDarkMode" style="width: 50px"><i class="fa-solid fa-eye"></i></button>
    <!-- v-model雙向綁定變數：標籤的值與變數 -->
    <!-- v-bind單向綁定變數：標籤的屬性 -->
    <h1 class="title">Title</h1>
    <h1 v-bind:class="tttle">Head</h1>

    <h3>class()</h3>

    <label for="">isBlue</label>
    <input type="checkbox" value="true" v-model="isBlue" />
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge" />

    <!-- 一開始的h2標籤是沒有class名稱的，但當isBlue/isLarge變成true時，便會賦予blue/large的class名稱 -->
    <h2 :class="{ blue: isBlue, large: isLarge }">永欽銀行</h2>

    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="styleArr" />
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" />
    <label for="">italic</label>
    <input type="checkbox" value="italic" v-model="styleArr" />

    <h2 :class="styleArr">麵包店</h2>

    <label for="">えっ</label>
    <input
      type="radio"
      value="https://stickershop.line-scdn.net/stickershop/v1/sticker/11865924/android/sticker.png"
      v-model="imgText"
      name="imgs"
    />
    <label for="">ドシャアアア</label>
    <input
      type="radio"
      value="https://stickershop.line-scdn.net/stickershop/v1/sticker/11865938/android/sticker.png"
      v-model="imgText"
      name="imgs"
    />
    <label for="">ヴァーカ</label>
    <input
      type="radio"
      value="https://stickershop.line-scdn.net/stickershop/v1/sticker/11865915/android/sticker.png"
      v-model="imgText"
      name="imgs"
    />

    <img :src="imgText" alt="" />

    <p>{{ this.test }}</p>
    <select name="" id="" v-model="this.test">
      <option value="">請選擇</option>
      <option :value="index" v-for="(item, index) in arrText">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
/* 暗色模式的樣式 */
.dark-mode {
  // width: 100vw;
  height: 100vh;
  background-color: #333; /* 設定背景色為深色 */
  color: #fff; /* 設定文字顏色為亮色 */
}
.title {
  color: red;
}
.blue {
  color: white;
  background-color: blue;
}
.large {
  font-size: 100px;
}
.italic {
  font-style: italic;
}
</style>
