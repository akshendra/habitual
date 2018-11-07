import Vue from 'vue';
import Router from 'vue-router';
import Habbits from './views/Habbits.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'habbits',
      component: Habbits,
    },
    {
      path: '/perf',
      name: 'performance',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Performance.vue'),
    },
  ],
});
