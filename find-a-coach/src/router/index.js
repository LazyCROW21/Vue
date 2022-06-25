import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../views/coach/CoachesList.vue";

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
    component: () => import("../views/coach/CoachRegister.vue")
  },
  {
    path: "/requests",
    name: "requests",
    component: () => import("../views/requests/RequestsReceived.vue")
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

export default router;
