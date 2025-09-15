export default {
  path: '/water',
  name: 'water',
  redirect: '/water/aaa',
  meta: {
    title: '水科',
    icon: 'ep:lollipop',
    rank: 12,
  },
  children: [
    {
      path: '/water/aaa',
      name: 'WaterAAA',
      component: () => import('../views/aaa/index.vue'),
      meta: {
        title: 'water-aaa',
      },
    },
  ],
} satisfies RouteConfigsTable;
