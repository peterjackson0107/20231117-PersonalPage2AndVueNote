<script>
export default {
  inject:[
  "proMessage",
  "cool",
  "message",
  "setMSG",
  "arr",
  "pet",
  ]
}
</script>

<template>
<div class="childArea">
    <h3>兒子的區域</h3>
    <h4>{{ this.proMessage }}</h4>
    <h4>{{ this.cool }}</h4>
    <h4>{{ this.message }}</h4>
    <h4>{{ this.setMSG }}</h4>
    <h4>{{ this.arr}}</h4>
    <h4>{{ this.pet}}</h4>
</div>
</template>

<style scoped lang="scss">
.childArea{
    height: 450px;
    width: 700px;
    border: 1px solid red;
}
</style>
