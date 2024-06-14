<template>
  <div class="container py-5">
    <h1>Login</h1>
    <p>Log in to your account at Janji Suci.</p>
    <form @submit.prevent="login">
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
        <label for="role" class="form-label">Role</label>
        <select class="form-control" id="role" v-model="role" required>
          <option value="Pelanggan">Pelanggan</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      role: "Pelanggan",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
          role: this.role,
        });
        if (response.data.success) {
          localStorage.setItem('userToken', response.data.token);
          if (this.role === 'Pelanggan') {
            this.$router.push("/dashboard");
          } else {
            this.$router.push("/admin/dashboard");
          }
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.error("There was an error logging in:", error);
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
