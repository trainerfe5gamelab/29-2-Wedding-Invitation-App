<template>
  <div class="container py-5">
    <h1 class="mb-4">Detail Acara</h1>
    <form @submit.prevent="createEvent" class="form">
      <div class="form-group">
        <label for="eventName">Nama Acara</label>
        <input type="text" class="form-control" id="eventName" v-model="eventName" required>
      </div>
      <div class="form-group">
        <label for="eventURL">URL Acara</label>
        <input type="text" class="form-control" id="eventURL" v-model="eventURL" required>
      </div>
      <button type="submit" class="btn btn-primary">Buat Acara</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: "",
      eventURL: ""
    };
  },
  methods: {
    createEvent() {
      const event = {
        name: this.eventName,
        url: this.eventURL,
        theme: localStorage.getItem('selectedTheme')
      };
      // Save event data and navigate to the wedding form
      // Assume the event is saved successfully
      this.$router.push("/wedding-form");
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  justify-content: center;
  align-items: center;
}

h1{
  margin-top: 10px;
  text-align: center;
}

.form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

.btn-primary {
  width: 100%;
}
</style>
