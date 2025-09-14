import gasRouters from '@page/gas/router';

export let pageViews = {};

export const pageStaticRouters = [gasRouters];

const gasPageViews = import.meta.glob('@page/gas/views/**/*.{vue,tsx}'); // gas视图列表，用于匹配接口下发的路由
// gas page views

pageViews = {
  ...pageViews,
  ...gasPageViews,
};
