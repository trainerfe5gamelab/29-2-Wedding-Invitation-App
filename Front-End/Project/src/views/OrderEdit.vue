<template>
    <div class="container py-5">
      <h1>Edit Order</h1>
      <form @submit.prevent="updateOrder">
        <!-- Form fields for editing order (similar to order creation form) -->
        <button type="submit" class="btn btn-primary">Update Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        order: {}
      };
    },
    created() {
      this.fetchOrder();
    },
    methods: {
      async fetchOrder() {
        try {
          const response = await axios.get(`http://localhost:3000/orders/${this.$route.params.id}`);
          this.order = response.data;
        } catch (error) {
          console.error('Error fetching order:', error);
        }
      },
      async updateOrder() {
        try {
          await axios.put(`http://localhost:3000/orders/${this.$route.params.id}`, this.order);
          this.$router.push({ name: 'AdminDashboard' });
        } catch (error) {
          console.error('Error updating order:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  