<script>
import { mapActions } from "pinia";
import counter from "../stores/counter";
import VslotButton from "../components/VslotButton.vue";
import VslotNamed from "../components/VslotNamed.vue";
import scopedSlot from "../components/scopedSlot.vue";
import VslotModal from "../components/VslotModal.vue";
export default {
  data() {
    return {
      arr: [
        {
          type: "headerr",
          name: "奶茶狗",
        },
        {
          type: "footer",
          name: "紅茶貓",
        },
      ],
      isSHow: false,
    };
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
    openModal(){
      this.isSHow=!this.isSHow
    }
  },
  components: {
    VslotButton,
    VslotNamed,
    scopedSlot,
    VslotModal,
  },
};
</script>
<template lang="">
  <VslotButton>
    <span> Click me quick !!! </span>
    <i class="fa-solid fa-gamepad"></i>
    <i class="fa-solid fa-gamepad"></i>
    <i class="fa-solid fa-gamepad"></i>
  </VslotButton>

  <VslotNamed>
    <template v-slot:header>
      <h1>VslotName:Header</h1>
    </template>
    <h2>No Name</h2>
  </VslotNamed>

  <VslotNamed v-for="item in arr">
    <template v-slot:[item.type]>
      <h1 class="namedDynamic">{{ item.name }}</h1>
    </template>
  </VslotNamed>

  <scopedSlot v-slot="slotProps">
    {{ slotProps.text }} & {{ slotProps.count }}
    <h1>TTTT</h1>
  </scopedSlot>

  <scopedSlot v-slot="{ text, count }"> {{ text }}xxxx{{ count }} </scopedSlot>

  <button type="button" @click="openModal">不要按我我會跳喔</button>
  <VslotModal v-show="isSHow" @alertMessage="openModal">
  </VslotModal>

</template>

<style scoped lang="scss"></style>
