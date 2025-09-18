/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件，除了 remaining.ts 文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */
const modules: Record<string, any> = import.meta.glob(
  [
    '../../base/src/router/modules/**/*.ts',
    '!../../base/src/router/modules/**/remaining.ts',
  ],
  {
    eager: true,
  }
);

const routes = [];

Object.keys(modules).forEach(key => {
  routes.push(modules[key].default);
});

const remainingRouter = (
  await import('../../base/src/router/modules/remaining')
).default;

console.log(routes);
console.log(remainingRouter);

export {};
