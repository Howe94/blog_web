import { fetchData } from '@/utils/ajax';
// 校验函数
const checkFunc = (func) => {
  return func && (func.constructor === Function);
};

export function getSignUpList(data, type, callFunc) {
  const options = checkFunc(callFunc) ? [data, 'get', callFunc] : [data, 'get'];
  let url = '/api/question-naire/1';
  return fetchData(url, ...options);
}






