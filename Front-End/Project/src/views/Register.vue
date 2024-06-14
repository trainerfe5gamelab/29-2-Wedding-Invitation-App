<template>
  <div class="container py-5">
    <h1>Register</h1>
    <p>Create an account to enjoy our services at Janji Suci.</p>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="whatsapp" class="form-label">WhatsApp</label>
        <input
          type="text"
          class="form-control"
          id="whatsapp"
          v-model="whatsapp"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select class="form-control" id="role" v-model="role" required>
          <option value="Pelanggan">Pelanggan</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Daftar!</button>
      <p class="mt-3">
        Already have an account?
        <router-link to="/login">Log in here</router-link>.
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      whatsapp: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Pelanggan",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/register', {
          name: this.name,
          whatsapp: this.whatsapp,
          email: this.email,
          password: this.password,
          role: this.role
        });
        if (response.data.success) {
          this.$router.push("/login");
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('There was an error registering:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
