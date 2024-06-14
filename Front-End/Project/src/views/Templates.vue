<template>
  <div class="container py-5" id="templates">
    <h1>Select a Template</h1>
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="template in templates" :key="template.id">
        <div class="card mb-4">
          <img
            :src="template.image"
            class="card-img-top"
            :alt="template.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ template.name }}</h5>
            <button @click="selectTemplate(template)" class="btn btn-primary">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templates: [
        { id: 1, name: "Elegant White", image: "/images/elegant-white.jpg" },
        { id: 2, name: "Classic Gold", image: "/images/classic-gold.jpg" },
      ],
    };
  },
  methods: {
    selectTemplate(template) {
      this.$router.push({
        name: "EventDetails",
        params: { templateId: template.id },
      });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #343a40;
}

.row {
  justify-content: center;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
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
  color: #343a40;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
