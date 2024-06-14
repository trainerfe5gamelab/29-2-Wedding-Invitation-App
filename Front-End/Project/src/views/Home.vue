<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <TemplatesSection />
    <AboutUsSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import TemplatesSection from "../components/TemplatesSection.vue";
import AboutUsSection from "../components/AboutUsSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
  components: {
    HeroSection,
    ServicesSection,
    TemplatesSection,
    AboutUsSection,
    ContactSection,
  },
};
</script>
