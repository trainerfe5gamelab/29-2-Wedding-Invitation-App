<template>
    <div class="container py-5">
      <h1>Buat Undangan?</h1>
      <button class="btn btn-primary" @click="$router.push('/tema')">Buat Undangan</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardPelanggan"
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  