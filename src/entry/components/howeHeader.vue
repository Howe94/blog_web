<template>
  <div class="howe-header-boxs">
    <!--      头部logo-->
    <div class="header-logo header-left">
      <img class="logo-item" src="@/assets/images/header-logo.png" alt="">
      <span class="header-name logo-item">技术大脑</span>
    </div>
    <div class="header-right">
      <!--      头部标签-->
      <div class="header-tab">
        <div class="tab-search-input">
          <el-input placeholder="请输入搜索的内容" prefix-icon="el-icon-search" v-model="searchTip">
          </el-input>
        </div>
        <div class="tab-content">
          <div class="tab-list">


                <el-dropdown v-for="(item,index) in tabList"
                             :key="index" @click="handelTab(item)">
                  <span :class="['tab-item',{'active-item':selectTabId === item.tabId}]">{{item.tabName}}</span>
                  <el-dropdown-menu slot="dropdown" v-if="item.children && item.children.length>0">
                    <el-dropdown-item v-for="(itemChildren,i) in item.children" :key="i">{{itemChildren.tabName}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>


          </div>
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="header-user">
        <div class="write-article mr20">
          <el-button type="primary" round><i class="iconfont blog-icon-write-article mr10"></i>写文章</el-button>
        </div>

        <!-- 未登录，及游客展示的 -->
        <div class="unsign-up" v-if="!isLogin">
          <el-button round @click="signIn">登录</el-button>
          <el-button type="warning" round @click="signUp">注册</el-button>
        </div>
        <!-- 已登录用户展示的信息 -->
        <div class="sign-up user-info" v-else>
          <el-dropdown @command="handleCommand" placement="bottom-end" class="sp-dropdown">
              <span class="el-dropdown-link user-name">
                {{userInfo.userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown" class="sp-header-dropdown">
              <el-dropdown-item v-for="item in userSettingsList" :command="item.command" :key="item.command">
                <!--                  <svg-icon :iconClass="item.iconClass" className="mr10"></svg-icon>-->
                {{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <img src="@/assets/images/header-logo.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import '@/assets/svg/icon-user.svg'
  export default {
    name: "howeHeader",
    data() {
      return {
        isLogin: false, //是is否登录
        userInfo: {
          userName: "豪宗超"
        },//用户信息
        searchTip: "", //搜索的关键字
        tabList: [
          {
            tabId: "0",
            tabName: "首页"
          },
          {
            tabId: '1',
            tabName: "归档",
            children: [
              {
                tabName: "前端",
                tabId: "1"
              },
              {
                tabName: "后端",
                tabId: "2"
              },
              {
                tabName: "算法",
                tabId: "3"
              },
              {
                tabName: "其他",
                tabId: "4"
              }
            ]
          }

        ],
        selectTabId: "0",//默认选中第一个
        userSettingsList: [
          {
            command: 'password',
            iconClass: 'user-password',
            name: '修改密码'
          }, {
            command: 'logout',
            iconClass: 'user-logout',
            name: '退出登录'
          }
        ]
      }
    },
    components: {},
    /* 组件实例刚刚被创建，组件属性计算之前，data属性为生成 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
    },

    /* 模板编译/挂载之后 */
    mounted() {
    },

    /* 组件销毁前 */
    beforeUnmount() {
    },
    methods: {
      /* 初始化 */
      init() {
      },
      /*//单击选中tabs事件*/
      handelTab(tabItem) {
        const that = this;
        console.log("选中的tab为====》", tabItem);
        that.selectTabId = tabItem.tabId;
      },
      /*用户信息下拉框*/
      handleCommand() {

      },
      /*登录*/
      signIn(){
        let url = `signInUp.html#/?r=${new Date().getTime()}`;
        console.log("跳转的路由为----》",url)
        window.top.location.href = url;
      },
      /*登录*/
      signUp(){
        let url = `signInUp.html#/signUp?r=${new Date().getTime()}`;
        window.top.location.href = url;
      }

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

  .howe-header-boxs {
    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;



    position: relative;
    line-height: 28px;
    transition: transform .3s;

    padding: 10px 20px;

    .header-left,
    .header-right {
      display: inline-block;
    }

    /* 头部logo样式 */
    .header-logo {
      cursor: pointer;

      img {
        //width: 34px;
        height: 34px;
        margin-right: .8rem;
        vertical-align: top;
      }

      .header-name {
        display: none;
        font-size: 28px;
        font-weight: 600;
        color: $color-main;
        line-height: 32px;
      }
    }


    .header-right {
      position: absolute;
      right: 20px;

      .header-tab,
      .header-user {
        display: inline-block;
      }

      /* 搜索框和tab样式 */
      .header-tab {
        padding: 0 60px;

        .tab-search-input,
        .tab-content {
          display: inline-block;
          vertical-align: top;
        }

        .tab-search-input {
          .el-input {
            .el-input__inner {
              height: 32px;
              border-radius: 20px;
            }

            .el-input__icon {
              line-height: 32px;
            }
          }

        }

        .tab-content {
          font-size: 18px;
          line-height: 32px;

          .tab-list {
            .tab-item {
              float: left;
              margin-left: 20px;
              cursor: pointer;

              &:hover {
                color: $color-primary;
              }

              &.active-item {
                color: #2D4DAB;
              }
            }
          }

        }
      }

      /* 用户和游客样式 */
      .header-user {
        vertical-align: middle;

        .write-article, .unsign-up, .sign-up {
          display: inline-block;

          .el-button.is-round {
            padding: 8px 14px;
          }
        }

        .write-article {
          .el-button {
            border: none;
            font-size: 18px;
            font-weight: 500;
          }
        }

        .sign-up {
          .el-dropdown {
            font-size: 16px;
            color: $color-main;
          }

          img {
            margin-left: 10px;
            width: 25px;
            vertical-align: top;
          }
        }
      }
    }
    &:hover{
      box-shadow: 0 2px 5px #0000000f;
      background: $color-bg;
      transition: all .8s ease;
    }


  }
</style>