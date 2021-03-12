<template>
  <div id="app">
    <!--    头部组件-->
    <howe-header></howe-header>
    <!--    主体-->
    <router-view></router-view>

  </div>
  
</template>
<script>
  //引入头部组件
  import howeHeader from "./components/howeHeader";

  export default {
    name: 'app',
    data() {
      return {
        innerWidth: 0,
      }
    },
    components: {howeHeader},
    /* 组件实例刚刚被创建，组件属性计算之前，data属性为生成 */
    beforeCreate() {

    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;

      that.$nextTick(() => {
        that.init();
      });

      console.log(`
        く__,.ヘヽ.        /  ,ー､ 〉
                 ＼ ', !-─‐-i  /  /´
                 ／｀ｰ'       L/／｀ヽ､
               /   ／,   /|   ,   ,       ',
             ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
              ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
                !,/7 '0'     ´0iソ|    |
                |.从"    _     ,,,, / |./    |
                ﾚ'| i＞.､,,__  _,.イ /   .i   |
                  ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
                    | |/i 〈|/   i  ,.ﾍ |  i  |
                   .|/ /  ｉ：    ﾍ!    ＼  |
                    kヽ>､ﾊ    _,.ﾍ､    /､!
                    !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
                    ﾚ'ヽL__|___i,___,ンﾚ|ノ
                        ﾄ-,/  |___./
                        'ｰ'    !_,.:
      `);
    },

    /* 组件销毁前 */
    beforeUnmount() {

    },

    methods: {
      /* 初始化 */
      init() {
      },
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: PingFangSC, PingFangSC-Regular, PingFangSC-Medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    min-width: 1020px;
    height: 100%;
    min-height: 656px;
    overflow: hidden;

    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    background: url("~@/assets/images/blog-bg.png") center center / cover no-repeat;


  }

</style>
