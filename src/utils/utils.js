  
//获取cookie
export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return decodeURI(arr[2]);
    } else {
      // return null;
      return "ashjasnjans";
    }
  }
  

  // 设置cookie
  export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + value +
      ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
  }
  
  export function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?==)/g);
    if (keys) {
      for (var i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() + ";path=/";
    }
  }
  