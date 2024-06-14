<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar-invitation">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ path: '/', hash: '#hero' }" @click.native="stopMusic">Janji Suci</router-link>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#bride-groom' }">Mempelai</router-link>
          </li> 
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#quotes' }">Quotes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#ceremony' }">Akad & Resepsi</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#maps' }">Maps</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#rsvp-gift' }">RSVP & Gift</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#thanks' }">Thanks</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarInvitation1",
    methods: {
      stopMusic() {
        this.$emit('stop-music');
      }
    }
  };
  </script>
  
  <style scoped>
  #navbar-invitation {
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.862);
    width: 100%;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  
  .navbar-brand {
    color: black;
    font-family: "Dancing Script", cursive;
    font-size: 25px;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  