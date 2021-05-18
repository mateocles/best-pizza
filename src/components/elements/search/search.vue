<template>
  <b-row>
    <b-col md="5"
      ><div class="input-container">
        <input
          class="form-control input"
          placeholder="Pizzerías"
          v-model="search"
        />
      </div>
    </b-col>
    <b-col md="5" class="contend-logout">
      <router-link class="router-link" to="/login">
        <img
          src="../../../assets/img/ic_contrasena.png"
          class="icon"
          alt="logo Icon"
        />Salir
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 4px solid #f6c243;
  width: 90px;

  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
}
.contend-logout {
  text-align: end;
}
.icon {
  width: 25px;
}
.router-link {
  color: #000000 !important;
}
</style>
