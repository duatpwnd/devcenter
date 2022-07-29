import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/docs",
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "@/pages/SignIn.vue"),
  },

  {
    path: "/intro",
    name: "intro",
    component: () =>
      import(/* webpackChunkName: "intro" */ "@/pages/Intro.vue"),
  },
  {
    path: "/docs",
    name: "docs",
    component: () => import(/* webpackChunkName: "docs" */ "@/pages/Docs.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue"),
  },
  {
    path: "/questions",
    name: "questions",
    component: () =>
      import(/* webpackChunkName: "faq" */ "@/pages/Questions.vue"),
  },
  {
    path: "/topics",
    name: "topics",
    component: () =>
      import(/* webpackChunkName: "topics" */ "@/pages/Topics.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition != null) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            left: 0,
            top: (savedPosition as { [key: string]: any }).top,
          });
        }, 500);
      });
    }
  },
});

export default router;
