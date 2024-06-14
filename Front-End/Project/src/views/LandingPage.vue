<template>
  <div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Quotes</li>
        <li>Mempelai</li>
        <li>Maps</li>
        <li>RSVP and Gift</li>
        <li>Thanks</li>
      </ul>
    </nav>
    <div class="hero">
      <h1>Welcome To Wedding</h1>
      <h2>{{ event.male_name }} & {{ event.female_name }}</h2>
    </div>
    <section id="quotes">
      <h2>Quotes</h2>
      <p>"Quran surat Ar-Rum · Ayat 21, dari Arab, terjemaham Indonesia"</p>
    </section>
    <section id="mempelai">
      <h2>Mempelai</h2>
      <p>{{ event.male_name }}</p>
      <p>{{ event.female_name }}</p>
    </section>
    <section id="maps">
      <h2>Maps</h2>
      <!-- Maps content here -->
    </section>
    <section id="rsvp">
      <h2>RSVP</h2>
      <p>Name: {{ guestName }}</p>
      <input v-model="guestName" placeholder="Enter your name" />
      <p>Email: <input type="email" v-model="guestEmail" /></p>
      <p>Will you attend?</p>
      <select v-model="rsvpStatus">
        <option>1. Hadir</option>
        <option>2. Tidak Hadir</option>
      </select>
    </section>
    <section id="gift">
      <h2>Gift</h2>
      <p>
        Cashless:
        <select>
          <option>ATM 1</option>
          <option>ATM 2</option>
        </select>
      </p>
      <p>
        Beri Kado: <span>{{ event.address }}</span>
      </p>
    </section>
    <section id="thanks">
      <h2>Thanks</h2>
      <p>Thank you for attending our wedding.</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      event: {},
      guestName: "",
      guestEmail: "",
      rsvpStatus: "1. Hadir",
    };
  },
  async created() {
    const eventId = this.$route.query.eventId;
    const guestName = this.$route.query.guestName;
    this.guestName = guestName;

    try {
      const response = await axios.get(
        `http://localhost:3000/events/${eventId}`
      );
      if (response.data.success) {
        this.event = response.data.event;
      } else {
        alert("Failed to load event");
      }
    } catch (error) {
      console.error("There was an error fetching the event:", error);
    }
  },
};
</script>

<style scoped>
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin-right: 20px;
  cursor: pointer;
}
.hero {
  text-align: center;
  margin: 20px 0;
}
</style>
