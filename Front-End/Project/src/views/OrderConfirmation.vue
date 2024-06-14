<template>
    <div class="container py-5">
      <h1>Pesanan Anda Sedang Diproses</h1>
      <p>Terima kasih telah memesan. Pesanan Anda sedang diproses oleh pihak Janji Suci.</p>
      <button class="btn btn-primary" @click="goHome">Kembali ke Halaman Utama</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  