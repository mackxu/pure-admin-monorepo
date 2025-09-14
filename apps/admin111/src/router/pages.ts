import gasRouters from '@page/gas/router';
const { VITE_COMPOSE_GAS } = import.meta.env;

export const composePages = [];

export const pageStaticRouters = []; // 静态路由
export let pageViews = {}; // 用于匹配动态路由

if (VITE_COMPOSE_GAS === 'true') {
  pageStaticRouters.push(gasRouters);
  composePages.push('gas');

  // gas page views
  const gasPageViews = import.meta.glob('@page/gas/views/**/*.{vue,tsx}'); // gas视图列表，用于匹配接口下发的路由
  if (VITE_COMPOSE_GAS) {
    pageViews = {
      ...pageViews,
      ...gasPageViews,
    };
  }
}
