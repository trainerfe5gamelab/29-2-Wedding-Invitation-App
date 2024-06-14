<template>
    <div class="container py-5">
      <h1>Wedding Invitation</h1>
      <h2>{{ invitation.maleName }} & {{ invitation.femaleName }}</h2>
      <h3>Kepada YTH Bapak/Ibu</h3>
      <h4>{{ inviteeName }}</h4>
      <input v-model="inviteeName" placeholder="Nama Tamu" />
      <button @click="openInvitation" class="btn btn-primary">Buka Undangan</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Invitation",
    data() {
      return {
        invitation: {},
        inviteeName: '',
      };
    },
    created() {
      const orderId = this.$route.params.orderId;
      axios.get(`http://localhost:3000/invitation/${orderId}`)
        .then(response => {
          this.invitation = response.data;
          this.inviteeName = response.data.inviteeName || '';
        })
        .catch(error => {
          console.error('There was an error fetching the invitation data:', error);
        });
    },
    methods: {
      openInvitation() {
        localStorage.setItem('inviteeName', this.inviteeName);
        this.$router.push(`/landing-page/${this.invitation.orderId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  