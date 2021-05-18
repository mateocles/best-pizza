<template>
  <div>
    <div class="title">
      <h2>Tiendas</h2>
    </div>
    <div class="subtitle">
      <span>Escoge tu pizzería favorita</span>
    </div>
    <div>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-shop",
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
