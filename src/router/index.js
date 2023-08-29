import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroView from '../views/HeroView';
import OurCoffee from '../views/OurCoffee';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffee },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
