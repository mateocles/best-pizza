<template>
  <div>
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <router-view></router-view>
    </fade-transition>
    <content-footer></content-footer>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    ContentFooter,
    FadeTransition,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style></style>
