<template>
  <div class="col-md-6 mb-4">
    <div class="card" :style="{ backgroundImage: 'url(' + template.background + ')' }">
      <div class="card-body">
        <h5 class="card-title">{{ template.title }}</h5>
        <p class="card-text">{{ template.description }}</p>
        <button class="btn btn-primary" @click="previewTemplate">Preview</button>
        <router-link :to="{ path: '/register' }" class="btn btn-secondary">Use</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['template'],
  methods: {
    previewTemplate() {
      this.$router.push({ path: '/invitation', query: { preview: true } });
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-size: cover;
  background-position: center;
  color: #212121; 
  height: 60vh;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  color: #ffffff; 
  text-shadow: 2px 4px 4px black;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #fff; 
  text-shadow: 2px 4px 4px black;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s, transform 0.3s;
  
}


.btn-secondary{
  margin-left: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background-color: #787878;
  transform: scale(1.05);
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
