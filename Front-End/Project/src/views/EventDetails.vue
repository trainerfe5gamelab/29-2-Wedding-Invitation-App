<template>
  <div class="container py-5">
    <h1>Event Details</h1>
    <form @submit.prevent="createEvent">
      <div class="mb-3">
        <label for="eventName" class="form-label">Event Name</label>
        <input
          type="text"
          class="form-control"
          id="eventName"
          v-model="eventName"
          required
        />
      </div>
      <div class="mb-3">
        <label for="eventUrl" class="form-label">Event URL</label>
        <input
          type="text"
          class="form-control"
          id="eventUrl"
          v-model="eventUrl"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Create Event</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: "",
      eventUrl: "",
    };
  },
  methods: {
    createEvent() {
      this.$router.push({
        name: "WeddingForm",
        params: { eventName: this.eventName, eventUrl: this.eventUrl },
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
