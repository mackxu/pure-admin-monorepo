export default {
  path: '/foo',
  name: 'Foo',
  meta: {
    icon: 'ep/home-filled',
    title: 'foo test',
    rank: 0
  },
  component: () => import('@page/gas/views/foo/index.vue')
} satisfies RouteConfigsTable;
