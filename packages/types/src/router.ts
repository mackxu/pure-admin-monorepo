import type { FunctionalComponent } from 'vue';

export type RouteMetaType = {
  title?: string;
  icon?: string | FunctionalComponent;
  showLink?: boolean;
  savedPosition?: boolean;
  auths?: Array<string>;
};

export type RouteConfigs = {
  path?: string;
  query?: object;
  params?: object;
  meta?: RouteMetaType;
  children?: RouteConfigs[];
  name?: string;
};

export type multiTagsType = {
  tags: Array<RouteConfigs>;
};
