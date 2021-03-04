<template>
  <div class="home-page-boxes bg">
    <div class="main-content">
      <!--顶部的内容-->
      <main-top></main-top>
      <!--博客内容-->
      <common-body isColumn :rightWidth="'380px'">
        <template slot="left">
          <div class="content-left">
            <article-box></article-box>
          </div>
        </template>
        <template slot="right">
          <div class="content-right">
            <!--展示用户的信息-->
            <user-recommend-box v-if="isLogin"></user-recommend-box>
            <!--未登录信息-->
            <recommonend-box v-else></recommonend-box>
          </div>
        </template>
      </common-body>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import mainTop from "./commonModel/mainTop";
  import commonBody from "@/components/commonBody";
  import articleBox from "./commonModel/articleBox";
  import userRecommendBox from "./commonModel/userRecommendBox";
  import recommonendBox from "./commonModel/recommonendBox.vue";
  import * as Service from "./service.js";


  export default {
    name: "homePage",
    data() {
      return {
        isLogin: false,//是否登录
      };
    },
    components: {mainTop, commonBody, articleBox, recommonendBox, userRecommendBox},
    watch: {},

    filters: {},
    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;

      //获取字典
      that.initDictionary();
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
      });
    },

    methods: {

      /************************ 初始化字典项 ************************/

      initDictionary() {
        const that = this;
        let params = {
          // page:1,
          // pageCount:1
        };
        Service.getSignUpList(params)
            .then(res => {
              if (res) {
                let data = JSON.parse(JSON.stringify(res));
                this.deptOptions = data;
              }
            })
            .catch(err => {
              console.log("错误")
            });
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .home-page-boxes {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: auto;
    padding-bottom: 50px;
    background-image: url("~@/assets/images/blog-bg.png");
    //background:  center center / cover no-repeat;
    .main-content {
      text-align: center;
    }

  }
</style>
