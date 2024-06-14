<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Janji Suci</router-link>
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
            <router-link class="nav-link" :to="{ path: '/', hash: '#hero' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#services' }"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ path: '/', hash: '#templates' }"
              >Templates</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/invitations"
              >Invitations</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#about-us' }"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#contact' }"
              >Contact</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="nav-link btn btn-link" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.isLoggedIn = !!localStorage.getItem('userToken');
  },
  methods: {
    logout() {
      localStorage.removeItem('userToken');
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
#navbar {
  background-color:white;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.862);
  width:100%;
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
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>


<!--<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Janji Suci</router-link>
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
            <router-link class="nav-link" :to="{ path: '/', hash: '#hero' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#services' }"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ path: '/', hash: '#templates' }"
              >Templates</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/invitations"
              >Invitations</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#about-us' }"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', hash: '#contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#navbar {
  background-color:white;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.862);
  width:100%;
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
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>-->
