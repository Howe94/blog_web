<template>
  <div class="recommend-box">
    <!-- 右侧信息  未登录推荐用户的信息-->
    <div class="recommend-item">
      <common-form-title title="推荐作者"></common-form-title>
      <div class="author-box">
        <div class="author-item mb20" v-for="(item,index) in authorList" :key="index">
          <img class="author_img info-item" :src="item.author_img" alt="">
          <div class="author-right info-item ml10">
            <p class="author-name tip-item mb10">{{item.author_name}}</p>
            <p class="article-num tip-item">写了{{item.article_num}}篇博客·{{item.article_like}}点赞</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commonFormTitle from "@/components/commonFormTitle";
  export default {
    name: "recommendBox",
    data(){
      return {
        authorList:[
          {
            author_img:"https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"随意分搜",
            article_num: 42,
            article_like: 122
          },
          {
            author_img:"https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"随意分搜sas",
            article_num: 42,
            article_like: 122
          },{
            author_img:"https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"撒娇但是",
            article_num: 42,
            article_like: 122
          },
          {
            author_img:"https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"随意分搜",
            article_num: 42,
            article_like: 122
          },
          {
            author_img:"https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"随意分搜sas",
            article_num: 42,
            article_like: 122
          },{
            author_img:"https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            author_name:"撒娇但是",
            article_num: 42,
            article_like: 122
          }

        ]
      }
    },
    props: {},
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
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">
.recommend-box{
  .recommend-item{
    padding: 10px;
    background: $color-bg-2;
    border-radius: 4px;
    .author-box{
      padding: 20px 5px;
      .author-item{
        text-align: left;
        .info-item{
          display: inline-block;
          vertical-align: middle;
        }
        .author_img{
          cursor: pointer;
          width: 46px;
          border-radius: 50%;
        }
        .author-right{
          .author-name{
            cursor: pointer;
            font-size: 18px;

          }
          .article-num{
            font-size: 12px;
            color: $color-font-title4;
          }
        }
      }
    }
  }
}
</style>