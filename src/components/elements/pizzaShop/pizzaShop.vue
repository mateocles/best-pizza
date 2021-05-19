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
          <CarouselCard
            :interval="7000"
            height="300px"
            type="card"
            arrow="always"
          >
            <CarouselCardItem v-for="(data, i) in item" :key="i">
              <div @click.stop="viewShop(data)">
                <img
                  src="../../../assets/img/4.png"
                  alt="logo
                pizeria"
                />
                <div class="title">
                  <h6>{{ data.name }}</h6>
                </div>
                <div class="subtitle">
                  <span>{{ data.address }}</span>
                </div>
              </div>
            </CarouselCardItem>
          </CarouselCard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";

export default {
  name: "pizza-shop",
  components: {
    CarouselCard,
    CarouselCardItem,
  },
  props: {
    item: Array,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {},
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
