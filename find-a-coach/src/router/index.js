import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/coach/CoachesList.vue";
import store from '../store/index';

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    name: "coaches",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    props: true,
    name: "coachdetail",
    component: () => import("../views/coach/CoachDetail.vue"),
    children: [
      {
        path: "contact",
        name: "coachcontact",
        component: () => import("../views/requests/ContactCoach.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    meta: { requiresAuth: true },
    component: () => import("../views/coach/CoachRegister.vue")
  },
  {
    path: "/requests",
    name: "requests",
    meta: { requiresAuth: true },
    component: () => import("../views/requests/RequestsReceived.vue")
  },
  {
    path: "/auth",
    name: "auth",
    meta: { requiresUnAuth: true },
    component: () => import("../views/auth/UserAuth.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if(to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
