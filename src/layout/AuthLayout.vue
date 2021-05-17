<template>
  <slide-y-up-transition mode="out-in" origin="center top">
    <router-view></router-view>
  </slide-y-up-transition>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
.body {
  display: flex;
  flex-direction: column;
}
</style>
