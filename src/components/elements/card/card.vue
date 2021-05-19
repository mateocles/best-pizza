<template>
  <div class="shops">
    <CarouselCard :interval="7000" height="300px" type="card" arrow="always">
      <CarouselCardItem v-for="i in 6" :key="i">
        <div @click.stop="viewShop(i)">
          <img src="../../../assets/img/1.png" alt="logo pizeria" />
          <div class="title">
            <h6>Bienvenido</h6>
          </div>
          <div class="subtitle">
            <span>A las mejores pizzas del país</span>
          </div>
        </div>
      </CarouselCardItem>
    </CarouselCard>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";

export default {
  name: "card",
  components: {
    CarouselCard,
    CarouselCardItem,
  },
  props: {
    pizzaShops: {
      type: JSON,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    viewShop(data) {
      console.log(data);
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 20px;
}
.subtitle {
  padding-bottom: 15px;
}
.shops {
  padding-top: 20px;
  text-align: center;
}
</style>
