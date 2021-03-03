import { Message } from 'element-ui';

// 成功的通知
export function notifySuccess (message) {
  Message.success({
    showClose: false,
    message: message,
  });
}

// 失败的通知
export function notifyError (message) {
  Message.error({
    showClose: false,
    message: message,
  });
}

// 警告的通知
export function notifyWarning (message) {
  Message.warning({
    showClose: false,
    message: message
  });
}

// 信息提示通知
export function notifyInfo (message) {
  Message.info({
    showClose: false,
    message: message,
    customClass: 'md-notify-info', //自定义类，修改样式
    iconClass: 'md-notify-info-icon' // 自定义图标
  });
}