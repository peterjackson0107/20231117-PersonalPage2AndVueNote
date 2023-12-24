<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    //data=function(){}
    return {
      arr: [1, 2, 3],
      arr2: [
        {
          name: "賣相奶茶",
          type: "貓",
          age: "5",
        },
        {
          name: "特上奶茶",
          type: "狗",
          age: "10",
        },
        {
          name: "阿薩姆奶茶",
          type: "雞",
          age: "15",
        },
      ],
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation", "getData"]),
  },
  mounted(){
    this.setLocation(3)
  },
  created(){
    this.getData()
  },
};
</script>

<template>
  <h3>V-for</h3>
  <!-- arr -->
  <p v-for="Item in arr">{{ Item }}</p>
  <p v-for="(Item, index) in arr">{{ index }}</p>
  <!-- arr2 -->
  <ol v-for="element in arr2">
    <li>{{ element.name }}</li>
    <li>{{ element.type }}</li>
    <li>{{ element.age }}</li>
    <p>---------------</p>
  </ol>

  <div class="coolArea" v-for="Iten in arr">
    <div class="cool" v-for="Iten in arr"></div>
  </div>

</template>


<style scoped lang="scss">
.coolArea {
  display: flex;
  .cool {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    margin-bottom: 15px;
    margin-left: 15px;
  }
}
</style>
