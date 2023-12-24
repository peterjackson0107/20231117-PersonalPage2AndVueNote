<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),
  },
  mounted() {
    this.setLocation();
  },
};
</script>

<template></template>

<style scoped lang="scss"></style>
