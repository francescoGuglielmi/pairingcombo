import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./components/homepage/HomePage.vue";
import SignUp from "./components/homepage/SignUp.vue";
import LogIn from "./components/homepage/LogIn.vue";
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
      modal: SignUp,
    }
  },
  { 
    path: '/login', 
    components: { 
      component: HomePage,
      modal: LogIn,
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;