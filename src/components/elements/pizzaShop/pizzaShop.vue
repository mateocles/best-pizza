<template>
  <div>
    <div class="title">
      <h2>Tiendas</h2>
    </div>
    <div class="subtitle">
      <span>Escoge tu pizzería favorita</span>
    </div>
    <div>
      <CardShop />
    </div>
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
</style>
