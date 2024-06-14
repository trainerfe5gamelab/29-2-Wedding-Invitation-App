<template>
  <div class="container">
    <h1>Admin Dashboard</h1>
    <div v-if="orders.length === 0">Belum ada pesanan.</div>
    <div v-else>
      <h2>Daftar Pesanan</h2>
      <div v-for="(order, index) in orders" :key="index" class="order-card">
        <div class="order-details">
          <h3>Pemesan: {{ order.customerName }}</h3>
          <p><strong>Nama Acara:</strong> {{ order.eventName }}</p>
          <p><strong>URL Acara:</strong> <a :href="order.eventUrl">{{ order.eventUrl }}</a></p>
          <p><strong>Tema:</strong> {{ order.theme }}</p>
        </div>
        <div class="action-buttons">
          <button class="btn btn-success" @click="editOrder(index)">Edit</button>
          <button class="btn btn-danger" @click="deleteOrder(index)">Hapus</button>
          <button class="btn btn-primary" @click="markOrderCompleted(index)">Selesai</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orders: [] // Array untuk menyimpan data pesanan
    };
  },
  mounted() {
    this.fetchOrders(); // Panggil method fetchOrders saat komponen dimount
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/orders'); // Ganti URL dengan URL endpoint Anda
        this.orders = response.data.orders; // Assign data pesanan dari response ke array orders
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data pesanan:', error);
        alert('Terjadi kesalahan saat mengambil data pesanan, silakan coba lagi.');
      }
    },
    editOrder(index) {
      // Logika untuk mengedit pesanan dengan index tertentu
    },
    deleteOrder(index) {
      // Logika untuk menghapus pesanan dengan index tertentu
    },
    markOrderCompleted(index) {
      // Logika untuk menandai pesanan sebagai selesai dengan index tertentu
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.order-card {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}

.order-details {
  flex: 1;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
