<script>
import InjectChild from "../components/InjectChild.vue";
export default {
  components: {
    InjectChild,
  },
};
</script>

<template>
<div class="fatherArea">
    <h3>這是老爸的區域</h3>
    <InjectChild />
</div>
</template>

<style scoped lang="scss">
.fatherArea{
    height: 500px;
    width: 750px;
    border: 1px solid blue;
}
</style>
