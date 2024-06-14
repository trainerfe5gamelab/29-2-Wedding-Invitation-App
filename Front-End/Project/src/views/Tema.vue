<template>
  <div class="container py-5">
    <h1>Pilih Tema</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img
            src="path/to/classic-image.jpg"
            class="card-img-top"
            alt="Tema Classic"
          />
          <div class="card-body">
            <h5 class="card-title">Tema Classic</h5>
            <p class="card-text">Music: A Thousand Years</p>
            <button class="btn btn-primary" @click="selectTheme('Classic')">
              Pilih Tema
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img
            src="path/to/modern-image.jpg"
            class="card-img-top"
            alt="Tema Modern"
          />
          <div class="card-body">
            <h5 class="card-title">Tema Modern</h5>
            <p class="card-text">Music: Beautiful in White</p>
            <button class="btn btn-primary" @click="selectTheme('Modern')">
              Pilih Tema
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectTheme(theme) {
      this.$router.push({ name: "OrderPage", params: { theme: theme } });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
