import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import HomeContent from '../components/HomeContent.vue';

const User = {
  template: '<h1>Home</h1>',
};
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: User,
    },
    {
      path: '/homecontent',
      component: HomeContent,
    },
  ],
});

export default router;
