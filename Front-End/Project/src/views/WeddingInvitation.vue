<template>
    <div class="container py-5">
      <h1>Wedding Invitation</h1>
      <h2>{{ event.male_name }} & {{ event.female_name }}</h2>
      <h3>Kepada YTH Bapak/Ibu</h3>
      <h4>{{ guestName }}</h4>
      <input type="text" v-model="guestName" placeholder="Enter Guest Name" />
      <button @click="openInvitation" class="btn btn-primary">Buka Undangan</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        event: {},
        guestName: 'Abhinaya'
      };
    },
    async created() {
      try {
        const eventId = this.$route.params.eventId;
        const response = await axios.get(`http://localhost:3000/events/${eventId}`);
        if (response.data.success) {
          this.event = response.data.event;
        } else {
          console.error('Failed to fetch event data');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    },
    methods: {
      openInvitation() {
        this.$router.push({ name: 'LandingPage', params: { event: this.event, guestName: this.guestName } });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  