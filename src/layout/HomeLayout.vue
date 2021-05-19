<template>
  <slide-y-up-transition mode="out-in" origin="center top">
    <router-view></router-view>
  </slide-y-up-transition>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "home-layout",
  components: { SlideYUpTransition },
};
</script>
