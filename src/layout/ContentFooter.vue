<template>
  <footer class="contend">
    <b-row>
      <b-col md="8" sm="4" class="social-media">
        <img
          src="../assets/img/logo-facebook.png"
          class="icon-logo-facebook"
          alt="logo Icon"
        />
        <img
          src="../assets/img/logo-instagram.png"
          class="icon"
          alt="logo Icon"
        />
      </b-col>
      <b-col class="logo-footer">
        <img
          src="../assets/img/Best-Pizza.png"
          class="logo-pizza"
          alt="logo Icon"
        />
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style lang="scss" scoped>
.contend {
  background: #1f1f1f;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
  color: #fff;
}
.icon {
  width: 50px;
}
.icon-logo-facebook {
  width: 25px;
}
.social-media {
  margin-left: 50px;
}
.logo-pizza {
  width: 40px;
  padding-top: 13px;
}
</style>
