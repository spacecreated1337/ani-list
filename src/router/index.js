import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
import SearchView from '../views/SearchView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import TopAnimePageView from "../views/TopAnimePageView";
import AnimePageView from "../views/AnimePageView";
import NotFound404 from "../views/NotFound404";
const routes = [{
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/anime/:animeId/:animeName',
    name: 'animePageView',
    component: AnimePageView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/:top',
    name: 'TopAnimePageView',
    component: TopAnimePageView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound404
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
});

export default router;