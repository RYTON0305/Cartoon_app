import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Home.vue")
  },
  {
    path: "/ranking",
    name: "ranking",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Ranking.vue")
  },
  {
    path: "/free",
    name: "free",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Free.vue")
  },
  {
    path: "/category",
    name: "category",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Category.vue")
  },
  {
    path: "/search",
    name: "search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Search.vue")
  },

  {
    path: "/bookshelf",
    name: "bookshelf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Bookshelf/Bookshelf.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mine/Mine.vue")
  },
  {
    path: "/withdraw",
    name: "withdraw",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mine/Withdraw.vue")
  },

  {
    path: '/service/:title',
    props: true,
    children: [
      {
        path: "client",
        name: "client",
        meta: {
          arrowColor: '#fff',
          bgColor: '#0085d0',
          textColor: '#fff'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Client.vue")
      },
      {
        path: "qrcode",
        name: "qrcode",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Qrcode.vue")
      },
      {
        path: "custom",
        name: "custom",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Custom.vue")
      },
      {
        path: "message",
        name: "message",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Message.vue")
      },
      {
        path: "feedback",
        name: "feedback",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Feedback.vue")
      },
      {
        path: "bill",
        name: "bill",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Bill.vue")
      },
      {
        path: "connect",
        name: "connect",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Connect.vue")
      },
      {
        path: "bulletin",
        name: "bulletin",
        meta: {
          title: '系统公告'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Bulletin.vue")
      },
      {
        path: "deposit",
        name: "deposit",
        meta: {
          title: '账户充值'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mine/Deposit.vue")
      },

    ],
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mine/Service.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
