<template>
  <b-container fluid class="container-page">
    <b-row>
      <b-col md="5" sm="5" class="home-page">
        <Ilustration />
      </b-col>
      <b-col class="fadeInDown">
        <b-container fluid class="home-shops">
          <Search />
          <pizza-shop :item="searchpPizzaShops" />
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
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    ...mapGetters("PizzaShops", ["pizzaShops"]),
    searchpPizzaShops() {
      if (this.searchInput.length > 3) {
        return this.searchPizzaShops(this.items, this.searchInput);
      }
      return this.pizzaShops;
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
    searchPizzaShops(arrayToSearch, value) {
      return arrayToSearch.filter(function (item) {
        return item.name.toUpperCase().includes(value.toUpperCase());
      });
    },
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
