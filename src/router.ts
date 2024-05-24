import { createMemoryHistory, createRouter } from "vue-router";

import Homepage from "./components/Homepage.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import AboutText from "./components/AboutText.vue";

const routes = [
  { 
    path: '/', 
    components: {
      component: Homepage,
      modal: AboutText,
    }
  },
  { 
    path: '/signup', 
    components: { 
      component: Homepage,
      modal: Signup,
    }
  },
  { 
    path: '/login', 
    components: { 
      component: Homepage,
      modal: Login,
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;