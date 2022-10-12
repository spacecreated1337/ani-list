import {
  createRouter,
  createWebHistory
} from 'vue-router';
import SearchView from '../views/SearchView.vue';
import NotAuthorizedUser from '../views/NotAuthorizedUser.vue';
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import TrendingAnimeView from "../views/TrendingAnimeView";
import AnimePageView from "../views/AnimePageView";
import NotFound404 from "../views/NotFound404";
const routes = [{
    path: '/',
    name: 'notAuthorizedUser',
    component: NotAuthorizedUser
  },
  {
    path: '/anime/:animeId/:animeName',
    name: 'animePageView',
    component: AnimePageView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
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
    path: '/trending',
    name: 'trending',
    component: TrendingAnimeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound404
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  routes,
});

export default router;
