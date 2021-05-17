<template>
  <b-container fluid>
    <b-row>
      <b-col md="5" sm="5" class="login-page">
        <Ilustration />
      </b-col>
      <b-col>
        <LoginForm />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LoginForm from "@/components/forms/Login";
import Ilustration from "@/components/elements/ilustration/Ilustration";

export default {
  name: "Login",
  components: { LoginForm, Ilustration },
};
</script>

<style lang="scss">
.login-page {
  background: url("../../assets/img/imagebkg.png") center no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
}
.login-background {
  background: #ffff;
}
@media only screen and (max-width: 900px) {
  .login-page {
    min-height: 100vh;
  }
}
@media only screen and (max-width: 400px) {
  .icon {
    width: 15%;
  }
}
@media only screen and (max-width: 1200px) {
  .icon {
    width: 45%;
  }
}
@media only screen and (min-width: 1900px) {
  .icon {
    width: 50%;
  }
}
</style>
