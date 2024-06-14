<template>
  <div class="container">
    <h1>Form Pernikahan</h1>
    <form @submit.prevent="submitOrder">
      <div class="mb-3">
        <label for="orderID" class="form-label">Order ID</label>
        <input type="text" class="form-control" id="orderID" v-model="orderID" required />
      </div>
      <div class="mb-3">
        <label for="maleName" class="form-label">Nama Pria</label>
        <input type="text" class="form-control" id="maleName" v-model="maleName" required />
      </div>
      <div class="mb-3">
        <label for="femaleName" class="form-label">Nama Wanita</label>
        <input type="text" class="form-control" id="femaleName" v-model="femaleName" required />
      </div>
      <div class="mb-3">
        <label for="biMale" class="form-label">Bio Pria</label>
        <textarea class="form-control" id="biMale" v-model="biMale"></textarea>
      </div>
      <div class="mb-3">
        <label for="biFemale" class="form-label">Bio Wanita</label>
        <textarea class="form-control" id="biFemale" v-model="biFemale"></textarea>
      </div>
      <div class="mb-3">
        <label for="quotes" class="form-label">Quotes</label>
        <textarea class="form-control" id="quotes" v-model="quotes"></textarea>
      </div>
      <div class="mb-3">
        <label for="theme" class="form-label">Tema</label>
        <select class="form-control" id="theme" v-model="theme" @change="updateTheme">
          <option value="Classic">Classic</option>
          <option value="Modern">Modern</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="photo" class="form-label">Foto</label>
        <input type="file" class="form-control" id="photo" @change="handleFileUpload" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="theme">
      <h3>Preview Tema: {{ theme }}</h3>
      <div v-if="theme === 'Classic'" class="theme-preview" :style="{ backgroundImage: 'url(' + require('@/assets/hr2.jpg') + ')' }"></div>
      <div v-if="theme === 'Modern'" class="theme-preview" :style="{ backgroundImage: 'url(' + require('@/assets/hr3.jpg') + ')' }"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orderID: '',
      maleName: '',
      femaleName: '',
      biMale: '',
      biFemale: '',
      quotes: '',
      theme: 'Classic', // Default theme
      photo: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.photo = event.target.files[0];
    },
    updateTheme() {
      // Logic to handle theme changes if needed
    },
    async submitOrder() {
      try {
        const formData = new FormData();
        formData.append('orderID', this.orderID);
        formData.append('maleName', this.maleName);
        formData.append('femaleName', this.femaleName);
        formData.append('biMale', this.biMale);
        formData.append('biFemale', this.biFemale);
        formData.append('quotes', this.quotes);
        formData.append('theme', this.theme);
        if (this.photo) {
          formData.append('photo', this.photo);
        }

        const response = await axios.post('http://localhost:3000/orders', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.data.success) {
          alert('Order successfully submitted');
        } else {
          alert('Failed to submit order');
        }
      } catch (error) {
        console.error('There was an error submitting the order:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.theme-preview {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border: 2px solid #ccc;
}

h1{
  margin-top:100px;
}
</style>
