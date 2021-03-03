import {
    fetchData
  } from '@/utils/ajax';
  // 校验函数
  const checkFunc = (func) => {
    return func && (func.constructor === Function);
  };
  
  /*-------------------------------1、登录模块-------------------------------*/
  
  // 登录接口
  export function oauthToken(data, type, callFunc) {
    const options = checkFunc(callFunc) ? [data, type, callFunc] : [data, type];
    let url = '/minstone-auth/oauth/token';
    return fetchData(url, ...options);
  }
  
  //退出
  export function logout(data, type, callFunc) {
    const options = checkFunc(callFunc) ? [data, type, callFunc] : [data, type];
    let url = '/minstone-auth/logout';
    return fetchData(url, ...options);
  }