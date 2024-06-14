<template>
  <div class="container">
    <h1 class="title">Pilih Tema</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card" style="background-image: url('~@/assets/hr2.jpg')">
          <div class="card-overlay">
            <img src="@/assets/hr2.jpg" class="card-img-top" alt="Classic Theme">
            <div class="card-body">
              <h5 class="card-title">Tema Classic</h5>
              <p class="card-text">Music: A thousand Years</p>
              <button @click="selectTheme('Classic')" class="btn btn-primary">Pilih Tema</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card" style="background-image: url('~@/assets/hr3.jpg')">
          <div class="card-overlay">
            <img src="@/assets/hr3.jpg" class="card-img-top" alt="Modern Theme">
            <div class="card-body">
              <h5 class="card-title">Tema Modern</h5>
              <p class="card-text">Music: Beautiful in White</p>
              <button @click="selectTheme('Modern')" class="btn btn-primary">Pilih Tema</button>
            </div>
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
      localStorage.setItem('selectedTheme', theme);
      this.$router.push("/event");
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.card {
  position: relative;
  border: none;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 300px; /* Set height for consistent card size */
}

.card:hover {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 5px;
  color: #fff;
}

.card-text {
  font-size: 0.875rem;
  margin-bottom: 10px;
  color: #fff; 
}

.btn-primary {
  width: 100%;
}

.card-img-top {
  height: auto;
  max-height: 200px; 
}
</style>
