// sort-imports-ignore
import Table from '@pureadmin/table';
import { MotionPlugin } from '@vueuse/motion';

// import { useEcharts } from "@/plugins/echarts";
import { createApp, type Directive } from 'vue';
import VueTippy from 'vue-tippy';

import { setupStore } from '@core/store';
import App from '@page/base/App.vue';
import router from '@page/base/router';
import '@repo/assets/iconfont/iconfont.css';
// 导入字体图标
import '@repo/assets/iconfont/iconfont.js';
// 全局注册按钮级别权限组件
import { Auth } from '@repo/components/ReAuth';
// 全局注册@iconify/vue图标库
import {
  IconifyIconOffline,
  IconifyIconOnline,
  FontIcon,
} from '@repo/components/ReIcon';
import { Perms } from '@repo/components/RePerms';
import { getPlatformConfig } from '@repo/config';
// 自定义指令
import * as directives from '@repo/directives';

import '@page/multi';

// 获得路由实例

// import PureDescriptions from "@pureadmin/descriptions";

// 引入重置样式
import '@repo/style/reset.scss';
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import '@repo/style/tailwind.css';
// 导入公共样式
import '@repo/style/index.scss';

import 'element-plus/dist/index.css';
// 全局注册vue-tippy
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import { injectResponsiveStorage } from '@repo/utils/responsive';

import { useElementPlus } from './plugins/elementPlus';

const app = createApp(App);

Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.component('IconifyIconOffline', IconifyIconOffline);
app.component('IconifyIconOnline', IconifyIconOnline);
app.component('FontIcon', FontIcon);

app.component('Auth', Auth);
app.component('Perms', Perms);

app.use(VueTippy);

getPlatformConfig(app).then(async config => {
  setupStore(app);
  app.use(router);
  await router.isReady();
  injectResponsiveStorage(app, config);
  app.use(MotionPlugin).use(useElementPlus).use(Table);
  // .use(PureDescriptions)
  // .use(useEcharts);
  app.mount('#app');
});
