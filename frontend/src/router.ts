import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./components/homepage/HomePage.vue";
import AuthForm from "./components/homepage/AuthForm.vue";
import AboutText from "./components/homepage/AboutText.vue";

const routes = [
  { 
    path: '/', 
    components: {
      component: HomePage,
      modal: AboutText,
    }
  },
  { 
    path: '/signup', 
    components: { 
      component: HomePage,
      modal: AuthForm,
    },
    props: {
      component: false,
      modal: { formType: 'signup' },
    },
  },
  { 
    path: '/login', 
    components: { 
      component: HomePage,
      modal: AuthForm,
    },
    props: {
      component: false,
      modal: { formType: 'login' },
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;