<template>
  <div class="container" id="register">
    <h1>Register</h1>
    <p>Buat akun terlebih dahulu untuk menikmati layanan Janji Suci.</p>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="name" class="form-label">Nama</label>
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
      <button type="submit" class="btn btn-primary">Selanjutnya</button>
      <p>
        Sudah punya akun? <router-link to="/login">Log in di sini</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      whatsapp: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      // Handle registration logic
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
