<template>
  <div class="login-illustration animation">
    <img src="@/assets/img/Pizza.png" alt="illustration" />
  </div>
</template>

<script>
export default {
  name: "ilustration",
  props: {
    type: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.animation {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.login-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;

  & > img {
    max-width: auto;
    max-height: 500px;
    padding: auto;
  }
}

@media only screen and (max-width: 900px) {
  .login-illustration {
    justify-content: center;
    & > img {
      max-width: auto;
      max-height: 250px;
    }
  }
}
@media only screen and (max-width: 400px) {
  .login-illustration {
    justify-content: center;
    & > img {
      max-width: auto;
      max-height: 200px;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .login-illustration {
    & > img {
      max-width: auto;
      max-height: 400px;
    }
  }
}
@media only screen and (min-width: 1900px) {
  .login-illustration {
    & > img {
      max-width: auto;
      max-height: 600px;
    }
  }
}
</style>
