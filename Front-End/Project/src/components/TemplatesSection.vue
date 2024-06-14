<template>
  <section id="templates" class="py-5">
    <div class="container">
      <h2 class="text-center">Our Templates</h2>
      <div class="row">
        <TemplateCard
          v-for="template in templates"
          :key="template.id"
          :template="template"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TemplateCard from "./TemplateCard.vue";

export default {
  components: {
    TemplateCard,
  },
  data() {
    return {
      templates: [
        {
          id: 1,
          title: "Classic",
          description: "Elegant and timeless design.",
          musicUrl: require('@/assets/backsound.mp3'),
          previewLink: "/invitation/classic",
          background: require('@/assets/hr.jpg')
        },
        {
          id: 2,
          title: "Modern",
          description: "Sleek and stylish design.",
          musicUrl: require('@/assets/backsound.mp3'),
          previewLink: "/invitation/modern",
          background: require('@/assets/service.jpg')
        },
      ],
    };
  },
};
</script>

<style scoped>
#templates {
  background-color: #f8f9fa;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #343a40;
}

.row {
  justify-content: center;
}

.template-card {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
