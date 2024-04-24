import router from "@/router";

router.beforeEach((to, from, next) => {
  console.info("permission");
  next();
});

router.afterEach(() => {});
