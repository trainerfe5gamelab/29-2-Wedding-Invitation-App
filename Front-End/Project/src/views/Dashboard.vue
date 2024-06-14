<template>
  <div class="container">
    <h1 class="title">Buat Undangan</h1>
    <button @click="navigateToThemes" class="btn btn-primary">Buat Undangan</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToThemes() {
      this.$router.push("/themes");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  margin-bottom: 20px;
}
</style>
