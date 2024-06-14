<template>
  <section id="services" class="py-5">
    <div class="container">
      <h2 class="text-center">Our Services</h2>
      <div class="row">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, title: 'Custom Invitations', description: 'Beautifully designed custom wedding invitations.' },
        { id: 2, title: 'RSVP Management', description: 'Easily manage your guest RSVPs and preferences.' },
        { id: 3, title: 'Gift Registry', description: 'Set up a gift registry for your guests.' }
      ]
    }
  }
}
</script>

<style scoped>
#services {
  background: url('@/assets/service.jpg') no-repeat center center;
  background-size: cover;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center{
  color: white;
  text-shadow: 2px 4px 4px black;
  padding-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
}
</style>
