<script>
export default {
    
}
</script>

<template lang="">
    <button class="vslotBtn"><slot /></button>
</template>

<style scoped lang="scss">
.vslotBtn{
    color: #fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
}
</style>