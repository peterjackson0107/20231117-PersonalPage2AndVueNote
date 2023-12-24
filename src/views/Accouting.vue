<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    //data=function(){}
    return {
      isDarkMode: false, // 初始化為 false，表示暗色模式未啟用
      total_spend:[],
      total_income:[],
      ts:0,
      ti:0,
      add_detail:{name: '',type:'收入',money:''},
      recent_day:7,
      total:0
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 切換 isDarkMode 的值
    },
    add_uitem:function(){
      this.usually_item.push({name:this.add_detail.name, type:this.add_detail.type})
    },
  },
  mounted(){
    this.setLocation(12)
  },
};
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="area">
    <div class="darkmodeButton">
      <button @click="toggleDarkMode" class="" :class="{ 'dark-mode': isDarkMode }"><i class="fa-regular fa-moon"></i></button>
    </div>
    <div :class="{ 'dark-mode': isDarkMode }" class="mainArea">
      <h1>Expense Tracker</h1>
        <div class="inputArea">
          <p>Account</p>
          <input type="text" style="width: 300px; border-radius: 8px;">
          <p>Password</p>
          <input type="text" style="width: 300px; border-radius: 8px;">
        </div>
        
        <div class="buttonArea">
          <a href="#" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal" style="text-decoration: none; margin-right: 10px;">Sign up</a>
            <div class="modal fade" id="signupModal">
              <div class="modal-dialog">
                <div class="modal-content" :class="{ 'dark-mode': isDarkMode }">
                  <!-- Header -->
                  <div class="modal-header">
                    <h3>Sign Up</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <!-- Body -->
                  <div class="modal-body">
                    <p>Account</p>
                    <input type="text" style="width: 300px; border-radius: 8px;">
                    <p>Password</p>
                    <input type="text" style="width: 300px; border-radius: 8px;">
                    <p>Repeat Password</p>
                    <input type="text" style="width: 300px; border-radius: 8px;"><br>
                    <button type="button" style="border-radius: 8px; margin-top: 10px;">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          <a href="#" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal" style="text-decoration: none;">Log in</a>
            <div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content" :class="{ 'dark-mode': isDarkMode }">
                  <!-- Header -->
                  <div class="modal-header">
                    <h1>Expense Tracker</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
    </div>
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
.area{
  width: 100%;
  height: 100vh;
.mainArea {
  width: 100%;
  height: 100%;

  .inputArea{
    margin: 0;
  }
  .buttonArea{
    margin: 50px 0;
    flex-direction: column;
  }
}
}
</style>
