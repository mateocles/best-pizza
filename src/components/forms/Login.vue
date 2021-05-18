<template>
  <div class="wrapper fadeInDown">
    <div class="form-content">
      <div class="fadeIn first">
        <img
          src="../../assets/img/Login-Best-Pizza.png"
          class="icon"
          alt="logo Icon"
        />
      </div>
      <div class="title">
        <h2>Bienvenido</h2>
      </div>
      <div class="subtitle">
        <span>A las mejores pizzas del país</span>
      </div>
      <!-- Login Form -->
      <div class="input-container">
        <b-form-input
          type="email"
          class="form-control"
          placeholder="Usuario"
          v-model="userName"
        ></b-form-input>
      </div>
      <div class="input-container">
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          v-model="password"
        />
      </div>
      <div class="forget-password">
        <h6 class="" href="#">¿Olvidate tu contraseña?</h6>
      </div>
      <div>
        <b-button variant="warning" class="form-control" @click="login()"
          >Iniciar sesión</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { setMessage } from "../../common/Utils/Message";

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      valid: false,
    };
  },
  computed: { ...mapGetters("User", ["Users", "loading"]) },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions("User", ["getUsers"]),
    login() {
      this.valid = false;
      if (this.userName != "" && this.password != "") {
        this.Users.forEach((element) => {
          if (
            element.email == this.userName &&
            element.password == this.password
          ) {
            this.valid = true;
            localStorage.setItem("user", JSON.stringify(element));
            this.$router.push({ path: "/home" }).catch(() => {});
          }
        });
        if (!this.valid) {
          this.$bvToast.toast("Por favor revisar los campos", {
            title: `Correo y contraseña no coinciden`,
            variant: "danger",
            solid: true,
          });
        }
      } else {
        setMessage("Error", `Por favor revisar los campos`, "error");
      }
    },
  },
};
</script>

<style lang="scss">
.forget-password {
  padding: 20px;
}
.form-control {
  height: 57px;
}
.input-container {
  padding-bottom: 15px;
}
.title {
  padding-top: 40px;
}
.subtitle {
  padding-bottom: 15px;
}

h2 {
  text-align: center;
  display: inline-block;
  color: #000000;
}
span {
  text-align: center;
  display: inline-block;
  color: #707070;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-right: 40px;
}

.form-content {
  background: #fff;
  text-align: center;
}

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

*:focus {
  outline: none;
}

.icon {
  width: 50%;
}
@media only screen and (max-width: 900px) {
  .icon {
    width: 25%;
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
