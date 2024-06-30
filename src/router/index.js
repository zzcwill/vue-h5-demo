import Vue from 'vue';
import VueRouter from 'vue-router';

import app from '@/router/app';
import demo from '@/router/demo';
import user from '@/router/user';

Vue.use(VueRouter);

// 后续可添加模块
const constantRoutes = user.concat(demo, app);

export default new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_BASE_URL,
  routes: constantRoutes
});
