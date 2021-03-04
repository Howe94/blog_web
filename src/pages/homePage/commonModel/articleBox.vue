<template>
    <div class="article-box-content">
      <el-card class="article-card" v-for="(item,index) in articleList" :key="index">
        <div slot="header" class="card-header">
          <h2 class="article-title">{{item.article_tilte}}</h2>
          <div class="article-info">
            <span><i class="el-icon-s-custom"></i><span class="author"> {{item.user_name}}</span></span>
            <span><i class="el-icon-date"></i>{{item.last_update_time}}</span>
            <span><i class="el-icon-view"></i>{{item.article_comment_count}}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="article-img" v-if="index === 0">
            <img :src="item.article_image" alt="">
          </div>
          <p class="article-content">
            {{item.article_content}}
          </p>
        </div>
        <div class="card-footer">
          <el-button style="float: right; padding: 3px 0" type="text">阅读更多</el-button>
        </div>
      </el-card>
    </div>
</template>

<script>
  export default {
    name: "articleBox",
    props: {},
    data() {
      return {
        articleList: [
          {
            article_id: "1",
            user_id: "232",
            user_name: "howe",
            article_tilte: "k8s+jenkins自动部署前后台",
            article_image: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg",
            article_content: "很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。",
            article_views: 10,
            article_comment_count: 12,//评论总数
            article_create_date: "2020-03-28",//博客发表时间
            last_update_time: "2020-03-28",//最新更新时间
            article_like_count: 50,//博客点赞数
          },
          {
            article_id: "2",
            user_id: "232",
            user_name: "废铁",
            article_tilte: " 如何根据系统主题自动响应CSS深色模式",
            article_image: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg",
            article_content: "很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。",
            article_views: 10,
            article_comment_count: 12,//评论总数
            article_create_date: "2020-03-28",//博客发表时间
            last_update_time: "2020-03-28",//最新更新时间
            article_like_count: 50,//博客点赞数
          },
          {
            article_id: "2",
            user_id: "232",
            user_name: "cassie",
            article_tilte: " ansible自动搭建elasticsearch集群",
            article_image: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg",
            article_content: "基于ansible自动部署java环境，redis5.0.5集群，elasticsearch6.3.1集群；完整的安装部署包我将上传到Github，需要的朋友可以给个Start哟",
            article_views: 120,
            article_comment_count: 1312,//评论总数
            article_create_date: "2020-03-28",//博客发表时间
            last_update_time: "2020-03-28",//最新更新时间
            article_like_count: 50,//博客点赞数
          }
        ]
      };
    },
    components: {},
    watch: {},

    filters: {},
    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      // const that = this;
      //获取字典
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
      });
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    .article-box-content {
      text-align: left;

      .article-card {
        margin-bottom: 20px;
        padding: 0 20px;

        .el-card__header {
          padding: 10px 0px 5px;

          .card-header {
            .article-title {
              display: inline-block;
              cursor: pointer;
              font-size: 1.4rem;
              font-weight: 500;
              margin: 10px 0;
              &:hover{
                color: $color-main;
              }
            }

            .article-info {
              font-size: 12px;
              span {
                i{
                  color: $color-main;
                  margin-right: 5px;
                }
                &:not(:nth-of-type(0)) {
                  margin-right: 12px;
                }
                &.author{
                  display: inline-block;
                  margin-left: 5px;
                  &:hover{
                    cursor: pointer;
                    color: $color-main;
                    -webkit-transform: scale(1.1, 1.1);
                    -moz-transform: scale(1.1, 1.1);
                    -o-transform: scale(1.1, 1.1);
                    -ms-transform: scale(1.1, 1.1);
                    transform: scale(1.1, 1.1);
                    transition: all .4s;
                  }
                }
              }
            }
          }
        }

        .el-card__body{
          padding: 20px 0;
          .card-body {
            .article-img {
              text-align: center;
              img {
                width: 500px;
              }
            }
            .article-content{
              color: $color-font-title;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              padding-top:10px;
            }
          }
        }
        .card-footer{
          padding: 5px 0 20px;
          .el-button{
            font-size: 16px;
          }

        }

      }

    }

</style>