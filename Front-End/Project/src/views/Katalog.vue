<template>
    <div class="container py-5">
      <h1>Katalog Undangan</h1>
      <p>Pilih dari katalog undangan pernikahan kami yang indah.</p>
      <div class="row">
        <div class="col-md-6 mb-4" v-for="item in katalogItems" :key="item.id">
          <div class="card">
            <img :src="item.image" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <router-link :to="{ name: 'WeddingForm', params: { theme: item.title } }" class="btn btn-primary">Pilih Tema</router-link>
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
        katalogItems: [
          {
            id: 1,
            title: "Tema Elegan",
            description: "Undangan pernikahan dengan tema elegan yang cocok untuk acara formal.",
            image: "https://example.com/images/elegant-theme.jpg"
          },
          {
            id: 2,
            title: "Tema Rustik",
            description: "Undangan pernikahan dengan tema rustik yang cocok untuk acara outdoor.",
            image: "https://example.com/images/rustic-theme.jpg"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  .card {
    height: 100%;
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  