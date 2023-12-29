<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    //data=function(){}
    return {
      isDarkMode: false, // 初始化為 false，表示暗色模式未啟用
      newDate: '',
      newDescription: '',
      newItem: '',
      newType: '吃飯', // 默认类型
      newIsCash: false,
      newAmount: '',
      expenses: []
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 切換 isDarkMode 的值
    },
    addItem: function() {
      if (this.newDate && this.newDescription && this.newItem && this.newAmount) {
        this.expenses.push({
          date: this.newDate,
          description: this.newDescription,
          item: this.newItem,
          type: this.newType,
          isCash: this.newIsCash,
          amount: this.newAmount
        });

        // 清空输入
        this.newDate = '';
        this.newDescription = '';
        this.newItem = '';
        this.newType = '吃飯'; // 重新设置默认类型
        this.newIsCash = false;
        this.newAmount = '';
      }
    },
    removeItem: function(index) {
      this.expenses.splice(index, 1);
    }
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
                    <div class="accountList">
                      <div class="account1">
                    <h1>Expense Tracker</h1>
                  </div>
                    <!-- 输入表单 -->
                    <div class="account2">
                      <label for="date">日期：</label>
                      <input type="date" id="date" v-model="newDate"><br>

                      <label for="description">说明：</label>
                      <input type="text" id="description" v-model="newDescription"><br>

                      <label for="item">品项：</label>
                      <input type="text" id="item" v-model="newItem"><br>

                      <label for="type">类型：</label>
                      <select id="type" v-model="newType">
                        <option value="吃飯">吃饭</option>
                        <option value="車錢">车钱</option>
                        <option value="物品">物品</option>
                      </select><br>

                      <label for="isCash">是否用现金：</label>
                      <input type="checkbox" id="isCash" v-model="newIsCash"><br>

                      <label for="amount">金额：</label>
                      <input type="number" id="amount" v-model="newAmount"><br>

                      <button @click="addItem">添加</button>
                    </div>
                    <div class="account3">
                    <!-- 表格 -->
                    <table border="1">
                      <thead>
                        <tr>
                          <th>日期</th>
                          <th>说明</th>
                          <th>品项</th>
                          <th>类型</th>
                          <th>是否用现金</th>
                          <th>金额</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(expense, index) in expenses" :key="index">
                          <td>{{ expense.date }}</td>
                          <td>{{ expense.description }}</td>
                          <td>{{ expense.item }}</td>
                          <td>{{ expense.type }}</td>
                          <td>{{ expense.isCash ? '是' : '否' }}</td>
                          <td>{{ expense.amount }}</td>
                          <td><button @click="removeItem(index)">删除</button></td>
                        </tr>
                      </tbody>
                    </table>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
              </div>
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
