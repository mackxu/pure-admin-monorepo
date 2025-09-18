import gasRouters from '@page/gas/router';
import waterRouters from '@page/water/router';

const { VITE_COMPOSE_GAS, VITE_COMPOSE_WATER } = import.meta.env;

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

if (VITE_COMPOSE_WATER === 'true') {
  pageStaticRouters.push(waterRouters);
  composePages.push('water');
  // water page views
  const waterPageViews = import.meta.glob('@page/water/views/**/*.{vue,tsx}'); // water视图列表，用于匹配接口下发的路由
  if (VITE_COMPOSE_WATER) {
    pageViews = {
      ...pageViews,
      ...waterPageViews,
    };
  }
}
