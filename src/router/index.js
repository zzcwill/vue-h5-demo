import Vue from "vue";
import VueRouter from "vue-router";

import user from "@/router/user";
import demo from "@/router/demo";
import app from "@/router/app";

Vue.use(VueRouter);

// 后续可添加模块
const constantRoutes = user.concat(demo, app);

export default new VueRouter({
  mode: "history",
  base: import.meta.env.VITE_BASE_URL,
  routes: constantRoutes,
});
