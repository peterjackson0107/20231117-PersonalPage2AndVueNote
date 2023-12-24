<script>
export default {
    data(){
        return{
            message: "message",
        }
    }
}
</script>

<template lang="">
    <div>
        <slot :text="this.message" :count="1">
        </slot>
    </div>
</template>

<style scoped lang="scss">
    
</style>