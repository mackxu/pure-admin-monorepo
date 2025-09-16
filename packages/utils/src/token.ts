import Cookies from 'js-cookie';
import { storageLocal } from '@pureadmin/utils';
import { TokenKey, userKey, multipleTabsKey } from '@repo/constants/user';
import type { DataInfo } from '@repo/types/user';

/** 获取`token` */
export function getToken(): DataInfo<number> {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey)!)
    : storageLocal().getItem(userKey);
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return 'Bearer ' + token;
};

/** 删除`token`以及key值为`user-info`的localStorage信息 */
export function removeToken() {
  Cookies.remove(TokenKey);
  Cookies.remove(multipleTabsKey);
  storageLocal().removeItem(userKey);
}
