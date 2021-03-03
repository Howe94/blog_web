import axios from 'axios';
import qs from 'qs';
import {
  MessageBox,
} from 'element-ui';
import {
  getCookie,
  clearAllCookie,
  // funcUrlDel
} from './utils.js';
import store from '../store';
import * as Msg from './notify.js';

const ajaxBaseUrl = '';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (!config.setHideLoading) {
    store.commit('showLoading');
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  store.commit('forceClose');
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('hideLoading');
  if (response.data) {
    return response.data;
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  // 对响应错误做点什么
  store.commit('forceClose');
  if (error.response.status === 401) {
    // if (document.getElementsByClassName('el-loading-mask')[0]) {
    //   document.getElementsByClassName('el-loading-mask')[0].style.zIndex = 2000;
    // }
    MessageBox.alert('登录已失效，请重新登录', '登录失效', {
      confirmButtonText: '重新登录',
      callback: () => {
        clearAllCookie();
        sessionStorage.clear(); //清除sessionStorage
        window.top.location.href = `${process.env.BASE_URL}login.html`;
      }
    });
  } else {
    Msg.notifyError(error.response.data.message || '服务器内部异常,请刷新重试！');
  }
  return Promise.reject(error);
});

/**
 * @param {string} url
 * @param {object} data
 * @param {string} type
 * @param {function} callFunc
 * @param {function} filter
 */
export function fetchData(url, data, type, callFunc, filter) {
  let ajaxType = type ? type.toLowerCase() : type;
  let sendData = '';
  if (filter && filter.constructor === Function) {
    sendData = filter(data);
  }
  const config = {};
  config.method = ajaxType || 'post';
  config.url = ajaxBaseUrl + url;
  // if (data.token) {
  config.headers = {
    'access-token': getCookie('access_token'),
    'loginaware': true
  };
  // }
  if (data && data.setHideLoading) {
    config.setHideLoading = true;
  }

  if (ajaxType === 'get' || ajaxType === 'delete') {
    config.url = ajaxBaseUrl + url + '?r=' + Math.random() * 1000;
    config.params = data;
  } else if (data.params) {
    config.data = data.params;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  } else {
    config.data = sendData || qs.stringify(data);
  }
  if (!callFunc) {
    return axios(config);
  }
  axios(config).then(res => {
    callFunc(res);
  }).catch(err => {
    callFunc({
      desc: 'axios统一拦截，捕获错误',
      err: err
    });
    console.log('axios统一拦截，捕获错误：', err);
  });
}

/**
 * 公共获取接口数据方法
 * url:接口路径
 * data ：参数对象
 * callFunc: 数据回调
 * filter：过滤数据
 * type ：请求方式
 */
// export function fetchData(url, data, callFunc, filter, type) {
//     if (filter && filter.constructor === Function) {
//         var sendData = filter(data);
//     }
//     var config = {}

//     config.method = data.method || 'post'
//     config.url = ajaxBaseUrl + url
//     config.data = sendData ? qs.stringify(sendData) : qs.stringify(data);


//     if (!callFunc) {
//         return axios(config)
//     }
//     axios(config).then(res => {
//         callFunc(res)
//     }).catch(err => {
//         callFunc({
//             desc: 'axios统一拦截，捕获错误',
//             err: err
//         });
//         console.log('axios统一拦截，捕获错误：', err)
//     })
// }
/**
 * 多个接口同时调用返回数据方法
 * array: 数组对象
 */
export function fetchMultiData(axiosArr, callFunc) {
  axios.all(axiosArr).then(axios.spread((...resArr) => {
    callFunc(resArr);
  })).catch(err => {
    callFunc({
      desc: 'axios统一拦截，捕获错误',
      err: err
    });
    console.log('axios统一拦截，捕获错误：', err);
  });
}