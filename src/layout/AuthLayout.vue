<template>
  <slide-y-up-transition mode="out-in" origin="center top">
    <b-row class="login-page">
      <b-col md="5" sm="5">
        <Ilustration />
      </b-col>
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </slide-y-up-transition>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";
import Ilustration from "@/components/elements/ilustration/Ilustration";

export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition,
    Ilustration,
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
.login-page {
  background: url("../assets/img/imagebkg.png") center no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  min-height: 100vh;
}
</style>
