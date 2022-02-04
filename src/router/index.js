import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HowItWorks from '../views/HowItWorks.vue';
import RequestForm from '../views/RequestForm.vue';
import RequestForm1 from '../views/RequestForm1.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/howitworks',
    name: 'HowItWorks',
    component: HowItWorks,
  },
  {
    path: '/trytoken',
    name: 'TryToken',
    component: () => import(/* webpackChunkName: "about" */ '../views/TryToken.vue'),
  },
  {
    path: "/requestform",
    name: "RequestForm",
    component: RequestForm,
  },
  {
    path: '/requestform1',
    name: 'RequestForm1',
    component: RequestForm1,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/trytoken/mock',
    name: 'TryTokenMock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MockPage.vue'),
  },

  {
    path: '/trytoken/live/:otp',
    name: 'TryTokenLive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LivePage.vue'),
  },

  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
