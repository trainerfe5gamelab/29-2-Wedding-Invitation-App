<template>
  <div class="invitation">
    <NavbarInvitation1 @stop-music="stopMusic" />
    <section id="home" class="py-5">
      <div class="container text-center">
        <h2 class="title">Home</h2>
        <!-- Konten lainnya -->
      </div>
    </section>
    <section id="bride-groom" class="py-5" >
      <div class="container text-center">
        <h2 class="title">Bride & Groom</h2>
        <p class="text">Rizky Haryanto Putro</p>
        <p class="subtext">Son of Mr. Budi and Mrs. Mulyani</p>
        <p class="address">Address: Kelinci 5 No 194</p>
        <p class="text">Maulifa Sekar Arum</p>
        <p class="subtext">Daughter of Mr. Suprayitno and Mrs. Siti Kholifah</p>
        <p class="address">Address: Tugurejo RT 05 RW 03</p>
      </div>
    </section>
    <section id="quotes" class="py-5" style="background-color: #e8e8e8;">
      <div class="container text-center">
        <h2 class="title">Quotes</h2>
        <p class="quote">"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought." - Surah Ar-Rum Ayat 21</p>
      </div>
    </section>
    <section id="ceremony" class="py-5" style="background-color: #f0f0f0;">
      <div class="container text-center">
        <h2 class="title">Ceremony & Reception</h2>
        <p class="text">The wedding ceremony and reception will be held at the bride's residence.</p>
      </div>
    </section>
    <section id="maps" class="py-5" style="background-color: #e8e8e8;">
      <div class="container text-center">
        <h2 class="title">Maps</h2>
        <p class="text">Map details here</p>
      </div>
    </section>
    <section id="rsvp-gift" class="section" style="background-color: #fafafa;">
      <div class="container text-center">
        <h2 class="title">RSVP & Gift</h2>
        <form @submit.prevent="submitRSVP" class="form">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="guestName" class="form-label">Name</label>
                <input type="text" class="form-control" id="guestName" v-model="guestName" required>
              </div>
              <div class="mb-3">
                <label for="guestWhatsapp" class="form-label">WhatsApp</label>
                <input type="text" class="form-control" id="guestWhatsapp" v-model="guestWhatsapp" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Attendance</label>
                <div>
                  <input type="radio" id="attending" v-model="attendance" value="attending">
                  <label for="attending">Attending</label>
                </div>
                <div>
                  <input type="radio" id="not-attending" v-model="attendance" value="not-attending">
                  <label for="not-attending">Not Attending</label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="gift" class="form-label">Gift</label>
                <select class="form-select" v-model="gift" required>
                  <option disabled value="">Select Gift Option</option>
                  <option value="virtual-bank1">Virtual Bank 1</option>
                  <option value="virtual-bank2">Virtual Bank 2</option>
                  <option value="virtual-bank3">Virtual Bank 3</option>
                </select>
              </div>
              <div class="mt-4">
                <button type="button" class="btn btn-secondary" @click="sendGift">Send Gift</button>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Send RSVP & Gift</button>
        </form>
        <div v-if="showGiftAddress" class="gift-address mt-3">
          <h4>Gift Address</h4>
          <p>Kelinci 5 No 194</p>
          <p>Tugurejo RT 05 RW 03</p>
        </div>
      </div>
    </section>
    <section id="thanks" class="py-5" style="background-color: #e8e8e8;">
      <div class="container text-center">
        <h2 class="title">Thank You</h2>
        <p class="thank-you-message">Thank you for being a part of our special day.</p>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarInvitation1 from '@/components/NavbarInvitation1.vue';

export default {
  data() {
    return {
      guestName: '',
      guestWhatsapp: '',
      attendance: '',
      gift: '',
      showGiftAddress: false,
      musicUrl: require('@/assets/backsound.mp3'),
      audio: null
    }
  },
  created() {
    this.$root.$emit('toggle-navbar', false);
    this.$router.beforeEach((to, from, next) => {
      if (to.hash === '#hero') {
        this.stopMusic();
      }
      next();
    });
    if (this.$route.query.preview) {
      this.playMusic();
    }
  },
  beforeDestroy() {
    this.$root.$emit('toggle-navbar', true);
    this.stopMusic();
  },
  methods: {
    submitRSVP() {
      alert('RSVP submitted successfully');
    },
    cashless() {
      window.location.href = 'https://bank-account-url';
    },
    sendGift() {
      this.showGiftAddress = !this.showGiftAddress;
    },
    playMusic() {
      this.audio = new Audio(this.musicUrl);
      this.audio.play();
    },
    stopMusic() {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    }
  },
  components: {
    NavbarInvitation1
  }
}
</script>
 
<style scoped>
#home {
  background: url('@/assets/hero-background.jpg') no-repeat center center;
  background-size: cover;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(246, 246, 246);
  text-shadow: 2px 4px 4px black;
}

#bride-groom{
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:50px;

}

#quotes{
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invitation {
  font-family: 'Dancing Script', cursive;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #d9534f;
}

.text {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.subtext {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.address {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  font-size: 1.5rem;
  color: #5bc0de;
  margin-bottom: 2rem;
}

.btn {
  transition: background-color 0.3s, transform 0.3s;
}

.btn:hover {
  background-color: #5bc0de;
  transform: scale(1.05);
}

.thank-you-message {
  font-size: 1.2rem;
  margin-top: 1rem;
}

.gift-address {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.section {
  background-color: #fafafa;
  padding: 5rem 0;
}

.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.text-center {
  text-align: center;
}

.form-control, .form-select {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
