import { createMemoryHistory, createRouter } from "vue-router";

import HomepageComponent from "./components/homepage/HomepageComponent.vue";
import SignupComponent from "./components/homepage/SignupComponent.vue";
import LoginComponent from "./components/homepage/LoginComponent.vue";
import AboutText from "./components/homepage/AboutText.vue";

const routes = [
  { 
    path: '/', 
    components: {
      component: HomepageComponent,
      modal: AboutText,
    }
  },
  { 
    path: '/signup', 
    components: { 
      component: HomepageComponent,
      modal: SignupComponent,
    }
  },
  { 
    path: '/login', 
    components: { 
      component: HomepageComponent,
      modal: LoginComponent,
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;