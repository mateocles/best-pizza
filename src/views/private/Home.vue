<template>
  <b-container fluid class="container-page">
    <b-row>
      <b-col md="5" sm="5" class="home-page">
        <Ilustration />
      </b-col>
      <b-col class="fadeInDown">
        <b-container fluid class="home-shops">
          <Search />
          <pizza-shop />
        </b-container>
        <content-footer class="footer"></content-footer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Search from "../../components/elements/search/search";
import PizzaShop from "../../components/elements/pizzaShop/pizzaShop";
import ContentFooter from "../../layout/ContentFooter";
import Ilustration from "@/components/elements/ilustration/Ilustration";
export default {
  name: "home",
  components: {
    Search,
    PizzaShop,
    ContentFooter,
    Ilustration,
  },
  computed: {
    ...mapGetters("Pokemons", ["items", "allPokemons", "favoritePokemons"]),
    searchPokemons() {
      if (this.searchInput.length > 3) {
        return this.searchPokemon(this.items, this.searchInput);
      }
      if (this.allPokemons) {
        return this.items;
      }
      if (this.favoritePokemons) {
        return this.searchFavoritePokemon(this.items);
      }
      return this.items;
    },
  },
  created() {
    /* Se creo este codigo con el fin de que cuando la pagina realice un reload, recupe los datos del carrito en localstore */
    var payload = localStorage.getItem("user");
    if (payload) {
      this.setUser(JSON.parse(payload));
      this.getPizzaShops();
    } else {
      this.$router.push({ path: "/login" }).catch(() => {});
    }
  },
  methods: {
    ...mapActions("User", ["setUser"]),
    ...mapActions("PizzaShops", ["getPizzaShops"]),
  },
};
</script>

<style lang="scss">
.container-page {
  overflow: hidden;
}
.home-shops {
  margin: 40px;
}
.col {
  padding: 0px !important;
}
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.wrapper {
  min-height: 100%;
  position: relative;
}
.home-page {
  background: url("../../assets/img/imagebkg.png") center no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
}
</style>
