<script>
export default {};
</script>

<template lang="">
  <slot name="header" />
  <slot />

  <slot name="headerr" class="headerrSlot">
    <p>header</p>
  </slot>

  <slot />

  <slot name="footer">
    <p>footer</p>
  </slot>
</template>

<style scoped lang="scss">
slot {
  color: beige;
  background-color: #514d4d;
}
</style>
