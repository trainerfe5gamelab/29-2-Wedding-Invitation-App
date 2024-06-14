<template>
    <div class="container py-5">
      <h1>Pesanan Pelanggan</h1>
      <div v-if="orders.length">
        <div class="row">
          <div class="col-md-4" v-for="order in orders" :key="order.order_id">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Order ID: {{ order.order_id }}</h5>
                <p class="card-text">Pengantin Pria: {{ order.male_name }}</p>
                <p class="card-text">Pengantin Wanita: {{ order.female_name }}</p>
                <p class="card-text">BI Pengantin Pria: {{ order.bi_male }}</p>
                <p class="card-text">BI Pengantin Wanita: {{ order.bi_female }}</p>
                <p class="card-text">Quotes: {{ order.quotes }}</p>
                <p class="card-text">Tema: {{ order.theme }}</p>
                <p class="card-text">Status: {{ order.status }}</p>
                <div class="mb-2">
                  <label for="status">Update Status:</label>
                  <select v-model="order.newStatus" class="form-control">
                    <option value="On Progress">On Progress</option>
                    <option value="Progress Stopped">Progress Stopped</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button class="btn btn-success mt-2" @click="updateStatus(order)">Update Status</button>
                </div>
                <button class="btn btn-warning" @click="editOrder(order.order_id)">Edit</button>
                <button class="btn btn-danger" @click="deleteOrder(order.order_id)">Delete</button>
                <div v-if="order.status === 'Completed'" class="mt-2">
                  <button class="btn btn-primary" @click="confirmCompletion(order)">Konfirmasi Selesai</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Belum ada pesanan.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: []
      };
    },
    created() {
      this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        try {
          const response = await axios.get('http://localhost:3000/orders');
          this.orders = response.data.map(order => ({
            ...order,
            newStatus: order.status
          }));
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },
      async updateStatus(order) {
        try {
          await axios.put(`http://localhost:3000/orders/${order.order_id}`, {
            status: order.newStatus
          });
          order.status = order.newStatus;
          if (order.status === 'Completed') {
            this.sendCompletionNotification(order);
          }
        } catch (error) {
          console.error('Error updating status:', error);
        }
      },
      async editOrder(orderId) {
        this.$router.push({ name: 'OrderEdit', params: { id: orderId } });
      },
      async deleteOrder(orderId) {
        try {
          await axios.delete(`http://localhost:3000/orders/${orderId}`);
          this.orders = this.orders.filter(order => order.order_id !== orderId);
        } catch (error) {
          console.error('Error deleting order:', error);
        }
      },
      async confirmCompletion(order) {
        try {
          await axios.post(`http://localhost:3000/orders/${order.order_id}/confirm`);
          this.fetchOrders();
        } catch (error) {
          console.error('Error confirming completion:', error);
        }
      },
      async sendCompletionNotification(order) {
        try {
          await axios.post(`http://localhost:3000/orders/${order.order_id}/notify-completion`);
          alert('Notifkasi telah dikirim ke pelanggan.');
        } catch (error) {
          console.error('Error sending notification:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  </style>
  