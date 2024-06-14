<template>
  <div class="container" id="about-us">
    <div class="content">
      <h1>About Us</h1>
      <p>Learn more about Janji Suci.</p>
      <p>
        Janji Suci provides elegant and customizable wedding invitations to make
        your special day even more memorable. We offer various templates, RSVP
        management, and gift registry options to suit your needs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 2rem;
}

.content {
  text-align: center;
  max-width: 600px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #343a40;
}

p {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
}
</style>
