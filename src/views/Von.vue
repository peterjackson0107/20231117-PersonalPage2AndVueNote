<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    print() {
      console.log("btn");
      this.title = "btn";
    },
    sky() {
      console.log("sky");
    },
    write() {
      console.log(this.text);
      alert("歡迎光臨myphone");
    },
    goOutherWay() {
      this.$router.push("/Vfor");
    },
    write() {
      console.log(this.text);
      alert("...");
    },
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
  },
  mounted(){
    this.setLocation(5)
  },
};
</script>

<template>
  
  <h3>V-on</h3>
  <button type="button" v-on:click="print()">btn</button>
  <!-- <button type="button" @click="print()">btn</button> -->
  <p>{{ this.title }}</p>
  
  <select name="" id="" @change="sky()">
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  
  <input type="text" v-model="this.text" @keydown.enter="write()" />
  
  <button type="button" @click="goOutherWay()">
    <i class="fa-solid fa-arrow-rotate-left"></i>
  </button>
  <br>
  <!-- 跳出視窗 -->
  <!-- 按鈕 -->
  <!-- <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">btn</a> -->
  <!-- 跳出視窗內容 -->
  <!-- <div class="modal fade" id="loginModal"> -->
    <!-- 改大小 -->
    <!-- <div class="modal-dialog modal-fullscreen-xxl-down"> 
      <div class="modal-content"> -->
        <!-- Header -->
        <!-- <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic, eveniet cum sit voluptatibus sunt aperiam ullam molestiae beatae doloremque asperiores dolor et deserunt enim illo magnam ex illum consectetur accusantium harum nulla sed eligendi est. Adipisci molestias dicta veritatis praesentium velit incidunt suscipit placeat cumque necessitatibus quidem, sit, ab aspernatur totam eum tempora libero rerum beatae ut amet repellendus. Distinctio totam ea exercitationem voluptatem inventore debitis dolor dicta in ducimus, quisquam reprehenderit accusantium eaque repellendus quasi vel consequuntur, sequi accusamus tempore quos dolorem amet facilis! Aliquid id consectetur facere earum hic quaerat ad, cumque, commodi, porro aperiam doloremque iure!
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.cool {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>
