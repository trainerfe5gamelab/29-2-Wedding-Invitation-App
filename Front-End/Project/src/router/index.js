import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Templates from "@/views/Templates.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Themes from "@/views/Themes.vue";
import Event from "@/views/Event.vue";
import GenerateWedding from "@/views/GenerateWedding.vue";
import WeddingForm from "@/views/WeddingForm.vue";
import Invitation from "@/components/Invitation.vue";
import Invitations from "@/views/Invitations.vue";
import DashboardPelanggan from '@/views/DashboardPelanggan.vue';
import Tema from '@/views/Tema.vue';
import OrderPage from '@/views/OrderPage.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import OrderEdit from '@/views/OrderEdit.vue';
import OrderConfirmation from '@/views/OrderConfirmation.vue';
import Katalog from '../views/Katalog.vue';





const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/templates",
    name: "Templates",
    component: Templates,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/themes",
    name: "Themes",
    component: Themes,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/wedding-form",
    name: "WeddingForm",
    component: WeddingForm,
  },
  {
    path: "/generate-wedding",
    name: "GenerateWedding",
    component: GenerateWedding,
  },
  {
    path: "/invitation",
    name: "Invitation",
    component: Invitation,
  },
  {
    path: "/invitations",
    name: "Invitations",
    component: Invitations,
  },
  {
    path: '/dashboard',
    name: 'DashboardPelanggan',
    component: DashboardPelanggan
  },
  {
    path: '/tema',
    name: 'Tema',
    component: Tema
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage
  },
  
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true, isAdmin: true }
  },
  {
    path: '/edit-order/:id',
    name: 'OrderEdit',
    component: OrderEdit
  },
  {
    path: '/order-confirmation',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  },
  {
    path: '/katalog',
    name: 'Katalog',
    component: Katalog,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
