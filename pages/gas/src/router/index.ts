export default {
  path: '/bar',
  component: () => import('#views/bar/index.vue'),
  meta: {
    icon: 'ri/information-line',
    title: 'bar',
    rank: 9
  }
} satisfies RouteConfigsTable;
