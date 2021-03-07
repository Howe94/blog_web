# 使用svg组件注意事项

## 1、依赖

`svg-sprite-loader`

## 2、需要配置相关的svg

可以查看`vue.congfig.js`文件

## 3、单页使用时

需要在`main.js`文件里引用

```js
// 全局注册svg组件
import '@/components/svgIcon';
```

## 4、示例

在`svg`文件里添加一张`business-menu.svg`图片，`iconClass`跟图片名称保持一致，`className`可以自己添加类，默认会有一个`svg-icon`

**注意**：需要把svg图片文件的(需要修改的)fill以及stroke修改成`currentColor`。

```html
<svg-icon iconClass="business-menu" className='business-menu-icon'></svg-icon>
```

```css
.business-menu-icon {
  width: 14px;
  height: 14px;
  color: green;
}
```
