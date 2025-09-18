export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('#/views/login/index.vue'),
    meta: {
      title: '登录',
      showLink: false,
      rank: 101,
    },
  },
  {
    path: '/redirect',
    component: () => import('#/layout/index.vue'),
    meta: {
      title: '加载中...',
      showLink: false,
      rank: 102,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('#/layout/redirect.vue'),
      },
    ],
  },
] satisfies Array<RouteConfigsTable>;
