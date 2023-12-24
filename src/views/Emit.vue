<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import child2 from "../components/child2.vue";
export default {
  data() {
    return {
        childText:"",
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    emitobj(xxx){
        console.log(xxx);
        this.childText = xxx;
    }
  },
  components: {
    //元件
    child2,
  },
  mounted() {
    this.setLocation(11);
  },
};
</script>

<template>
    <div class="showArea">
        <h1>Emit</h1>
        <h3>{{ this.childText }}</h3>
        <!-- 變數命名要注意，方法與變數名字不要相關 -->
        <child2 @orange="emitobj"/>

    </div>
</template>

<style scoped lang="scss">
.showArea{
    width: 800px;
    height: 600px;
    margin: 0 auto;
}
</style>
