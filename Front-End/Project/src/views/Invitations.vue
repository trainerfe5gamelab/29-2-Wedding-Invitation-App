<template>
  <div class="container py-5 d-flex flex-column align-items-center">
    <h1 class="mb-4">Invitations</h1>
    <p class="mb-4">Welcome to Janji Suci Invitations.</p>
    <div v-if="!isLoggedIn" class="text-center">
      <router-link to="/register" class="btn btn-primary mb-3">Register</router-link>
      <br>
      <router-link to="/login" class="btn btn-secondary">Login</router-link>
    </div>
    <div v-else class="text-center">
      <router-link to="/event-details" class="btn btn-primary">Create Event</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    // Check if the user is logged in
    this.isLoggedIn = !!localStorage.getItem('userToken'); // Assume you store a token in localStorage
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 150px;
}

.btn-primary {
  margin-bottom: 10px;
}
</style>
