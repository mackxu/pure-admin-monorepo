import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
  type Router
} from 'vue-router';

let router: Router;

/**
 * 初始化路由实例
 * @param routes 路由配置
 */
export function initRouterInstance(routes?: RouteRecordRaw[]) {
  if (router) return router;
  if (!routes) {
    throw Error('初始化路由实例需要传递routes参数');
  }
  router = createRouter({
    history: createWebHashHistory(''),
    routes,
    strict: true,
    scrollBehavior(to, from, savedPosition) {
      return new Promise(resolve => {
        if (savedPosition) {
          return savedPosition;
        } else {
          if (from.meta.saveSrollTop) {
            const top: number =
              document.documentElement.scrollTop || document.body.scrollTop;
            resolve({ left: 0, top });
          }
        }
      });
    }
  });
  return router;
}
