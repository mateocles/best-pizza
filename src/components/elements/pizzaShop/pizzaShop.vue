<template>
  <div>
    <div class="title">
      <h2>Tiendas</h2>
    </div>
    <div class="subtitle">
      <span>Escoge tu pizzería favorita</span>
    </div>
    <b-container fluid>
      <b-row>
        <b-col cols="8" cols-sm="2" cols-md="8" cols-lg="8" offset-md="1">
          <card-shop
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardShop from "../card/card";
export default {
  name: "pizza-shop",
  components: {
    CardShop,
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 40px;
}
.subtitle {
  padding-bottom: 15px;
}
.content-page {
  margin: 40px;
}
</style>
