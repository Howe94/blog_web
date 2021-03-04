import { fetchData } from '@/utils/ajax';
// 校验函数
const checkFunc = (func) => {
  return func && (func.constructor === Function);
};

export function getToken(data, type, callFunc) {
  const options = checkFunc(callFunc) ? [data, 'get', callFunc] : [data, 'get'];
  let url = '/api/token/getToken';
  return fetchData(url, ...options);
}






