<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import flowChild1 from "../components/flowChild1.vue";
import flowChild2 from "../components/flowChild2.vue";
export default {
  data() {
    return {
      objInfo: {},
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    getInfo(x) {
      console.log(x);
      this.objInfo = x;
      console.log(this.objInfo);
      this.chanage = !this.chanage;
    },
    chanPage() {
      this.chanage = !this.chanage;
    },
  },
  components: {
    //元件
    flowChild1,
    flowChild2,
  },
  mounted() {
    this.setLocation(13);
  },
};
</script>

<template>
  <h1>DataFlow</h1>
  <h3>資料需求：姓名、手機、性別[radio]、地址、年齡</h3>
  <h3>{{ this.objInfo }}</h3>
  <h3>change:{{ this.change }}</h3>
  <h3>text:{{ this.text }}</h3>
  <div class="childArea">
    <flowChild1
      @get="getInfo"
      v-show="this.change == false"
      v-model:text="this.text"
    />
    <flowChild2
      v-bind="this.objInfo"
      v-show="this.change == true"
      @back="chanPage()"
    />
  </div>
</template>

<style scoped lang="scss">
.childArea {
  display: flex;
  margin: 0 auto;
  width: 600px;
  height: 700px;
  border: 1px solid;
}
</style>
