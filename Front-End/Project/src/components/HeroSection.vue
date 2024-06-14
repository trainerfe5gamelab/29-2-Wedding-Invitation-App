<template>
  <section class="hero" id="hero">
    <div class="container text-center">
      <h1 class="display-4">Welcome to Janji Suci</h1>
      <p class="lead">Your perfect wedding invitation solution.</p>
      <router-link to="/register" class="btn btn-primary btn-lg"
        >Get Started</router-link
      >
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: url('@/assets/hr.jpg') no-repeat center center;
  background-size: cover;
  height: 135vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(246, 246, 246);
  text-shadow: 2px 4px 4px black;
  
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
