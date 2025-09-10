import { $t } from '@pkg/zzz/plugins/i18n';

export default {
  path: '/bar',
  component: () => import('../views/bar/index.vue'),
  meta: {
    icon: 'ri/information-line',
    // showLink: false,
    title: $t('menus.pureAbnormal'),
    rank: 9
  }
} satisfies RouteConfigsTable;
