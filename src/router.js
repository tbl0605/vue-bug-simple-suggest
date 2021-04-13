import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('./views/Home.vue');

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackMode: "eager" */ './views/About.vue')
  },
  {
    path: '*',
    // https://webpack.js.org/api/module-methods/#magic-comments
    component: () =>
      import(/* webpackMode: "eager" */ './components/ComponentNotFound')
  }
];

export default new Router({
  routes,
  base: process.env.BASE_URL,
  mode: process.env.VUE_APP_ROUTE_MODE /* 'history' or 'hash' */
});
