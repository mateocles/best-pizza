<template>
  <b-container fluid>
    <b-row>
      <b-col md="5" sm="5" class="home-page">
        <Ilustration />
      </b-col>
      <b-col class="view wrapper"
        ><fade-transition :duration="200" origin="center top" mode="out-in">
          <router-view></router-view>
        </fade-transition>
        <content-footer class="footer"></content-footer>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import ContentFooter from "./ContentFooter";
import Ilustration from "@/components/elements/ilustration/Ilustration";

export default {
  components: { ContentFooter, FadeTransition, Ilustration },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.col {
  padding: 0px !important;
}
footer {
  width: 100%;
  height: 81px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.wrapper {
  min-height: 100%;
  position: relative;
}
.home-page {
  background: url("../assets/img/imagebkg.png") center no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
}
</style>
