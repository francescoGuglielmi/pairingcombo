import { createMemoryHistory, createRouter } from "vue-router";

import Homepage from "./components/homepage/Homepage.vue";
import Signup from "./components/homepage/Signup.vue";
import Login from "./components/homepage/Login.vue";
import AboutText from "./components/homepage/AboutText.vue";

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