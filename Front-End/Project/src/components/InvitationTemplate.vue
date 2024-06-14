<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="#hero">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#bride-groom">Bride & Groom</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#quotes">Quotes</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#ceremony">Ceremony & Reception</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#maps">Maps</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#rsvp">RSVP & Gift</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#thanks">Thanks</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="preview" class="text-center py-5">
        <div class="container">
          <h1 class="display-4">Dear [Guest Name]</h1>
          <button @click="openInvitation" class="btn btn-primary">Buka Undangan</button>
        </div>
      </section>
      <section id="hero" class="text-center py-5">
        <div class="container">
          <h1 class="display-4">Rizky & Maulifa</h1>
          <button @click="openInvitation" class="btn btn-primary">Open Invitation</button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        audio: null
      }
    },
    methods: {
      openInvitation() {
        this.audio = new Audio(this.$route.query.music);
        this.audio.play();
        this.$router.push({ path: '/invitation-details' });
      }
    }
  }
  </script>
  
  <style scoped>
  #preview, #hero {
    background: img('/assets/hero-background.jpg') no-repeat center center;
    background-size: cover;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar {
    background-color: #f8f9fa;
  }
  </style>
  