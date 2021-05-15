<template>
  <b-col class="login-background">
    <LoginForm />
  </b-col>
</template>

<script>
import LoginForm from "@/components/forms/Login";

export default {
  name: "Login",
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
.login-background {
  background: #ffff;
  min-height: 100vh;
}
</style>
