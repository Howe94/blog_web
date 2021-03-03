<template>
  <div class="recommend-box">
    <!-- 右侧信息  登录用户的信息-->
    <div class="sign-up-info recommend-item">
      <common-form-title title="关于我"></common-form-title>
      <div class="user-box">
        <h2 class="user-name author-item">{{userInfo.user_name}}</h2>
        <p class="user-motto author-item">{{userInfo.user_motto}}</p>
        <div class="article_info author-item">
          <p>博客总数：<span>{{userInfo.article_count}}</span></p>
          <p>博客阅读量：<span>{{userInfo.article_views_count}}</span></p>
          <p>热门博客：<span>{{userInfo.article_title_more}}</span></p>
        </div>
      </div>
    </div>
    <!-- 常驻信息 文章分类-->
    <div class="article-sort recommend-item">
      <common-form-title title="文章分类"></common-form-title>
      <div class="article-sort-list">
        <p class="sort-item" v-for="(item,index) in articleSortList" :key="index">
          <span class="sort-name">{{item.sort_name}}</span>
          <span class="article-num">{{item.article_num}}</span>
        </p>
      </div>
    </div>
    <!-- 常驻信息 标签分类-->
    <div class="tag-summary recommend-item">
      <common-form-title title="热门标签"></common-form-title>
      <div class="hot-tag-box">
        <span class="hot-tag-item" v-for="(item,index) in hotTags" :key="index" :style="{background:setRadiumColor()}">
          {{item.tag_name}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
  import commonFormTitle from "@/components/commonFormTitle";

  export default {
    name: "recommendBox",
    props: {},
    data() {
      return {
        userInfo: {
          user_name: "豪宗超",
          user_id: "23",
          user_motto: "天道酬寻，为我则坤",//座右铭
          article_count: 23,//博客文章总数
          article_views_count: 10000,//文章总阅读量
          article_title_more: "前端开发手迹"
        },//用户信息
        //文章分类
        articleSortList: [
          {
            sort_name: "前端",
            sort_id: "23",
            article_num: 22,//文章总数
          },
          {
            sort_name: "后端",
            sort_id: "13",
            article_num: 42,//文章总数
          },
          {
            sort_name: "数据库",
            sort_id: "13",
            article_num: 16,//文章总数
          },
          {
            sort_name: "Javascript",
            sort_id: "13",
            article_num: 2,//文章总数
          },
          {
            sort_name: "Vue",
            sort_id: "13",
            article_num: 8,//文章总数
          },
        ],
        //热门标签
        hotTags:[
          {
            tag_name:"vue",
            tag_id:"1212"
          },
          {
            tag_name:"javascript",
            tag_id:"1212"
          },
          {
            tag_name:"java",
            tag_id:"1212"
          },
          {
            tag_name:"html",
            tag_id:"1212"
          },
          {
            tag_name:"element",
            tag_id:"1212"
          },
          {
            tag_name:"测试",
            tag_id:"1212"
          },
          {
            tag_name:"K8S",
            tag_id:"1212"
          },
          {
            tag_name:"python",
            tag_id:"1212"
          },
          {
            tag_name:"Elasticsearch",
            tag_id:"1212"
          },
          {
            tag_name:"shell",
            tag_id:"1212"
          }
        ]
      };
    },
    components: {commonFormTitle},
    watch: {},

    filters: {},
    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      //获取字典
    },

    /* 模板编译/挂载之后 */
    mounted() {
    },
    methods: {
      setRadiumColor(){
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .recommend-box {
    .recommend-item {
      padding: 10px;
      background: $color-bg-2;
      border-radius: 4px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    .sign-up-info .user-box {
      .author-item {
        margin: 10px 0;
      }

      .user-name {
        font-size: 18px;
        font-weight: 600;
      }

      .user-motto {
        font-size: 12px;
      }

      .article_info {
        text-align: left;
        p{
          color: $color-primary;
          padding:5px;
          span{
            color: $color-success;
            &:hover{
              cursor: pointer;
              font-weight: 600;
            }
          }
        }
      }
    }
    .article-sort {
      .article-sort-list{
        .sort-item{
          text-align: left;
          padding:10px 5px;
          border-bottom:1px solid $color-line;
          .article-num{
            cursor: pointer;
            display: inline-block;
            min-width: 25px; 
            font-size: 10px;
            color: $color-font-title5;
            float: right;
            border-radius: 10px;
            background: $color-warning;
            padding:5px;
            text-align:center;
          }
        }
      }
    }
    .tag-summary{
      .hot-tag-box{
        padding: 10px 5px;
        text-align:left;
        .hot-tag-item{
          cursor: pointer;
          display: inline-block;
          color: $color-font-title5;
          border-radius:5px;
          padding:5px 8px;
          margin:5px 0px;
          margin-right:20px;
          &:hover{
            -webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            -o-transform: scale(1.2, 1.2);
            -ms-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
            transition: all .4s;
          }
        }
      }
    }
  }

</style>