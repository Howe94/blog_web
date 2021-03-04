<template>
  <div class="login-box">
    <div class="login-main">
      <div class="login-title">TechnologyBrain's Blog</div>
      <!--禁用自动填充密码-->
      <input type="text" name="username" style="display:none;" />
      <input type="password" name="password" style="display:none;" />
      <ul>
        <li>
        <span class="login-icon">
          <i :class="[
                'icon-user icon-user-nor',
                { 'icon-user-sel': form.username || userCheck == 1 },
                { 'icon-user-wrong': userCheck == 0 },
              ]"></i>
        </span>
          <el-input placeholder="账号" v-model="form.username" :class="[
              { 'right-mess': form.username || userCheck == 1 },
              { 'error-mess': userCheck == 0 },
            ]" @blur="userCheck = null" @focus="userCheck = 1"></el-input>
          <span :class="[
              'login-mess',
              { 'right-mess': form.username || userCheck == 1 },
              { 'error-mess': form.username && userCheck == 0 },
            ]" :style="{
              visibility:
                form.username || userCheck === 1 ? 'visible' : 'hidden',
            }">账号</span>
        </li>
        <li>
        <span class="login-icon">
          <i :class="[
                'icon-password icon-password-nor',
                { 'icon-password-sel': form.password || passCheck == 1 },
                { 'icon-password-wrong': passCheck == 0 },
              ]"></i>
        </span>
          <el-input type="password" placeholder="密码" v-model="form.password" :class="[
              { 'right-mess': form.password || passCheck == 1 },
              { 'error-mess': passCheck == 0 },
            ]" @blur="passCheck = null" @focus="passCheck = 1"></el-input>
          <span :class="[
              'login-mess',
              { 'right-mess': form.password || passCheck == 1 },
              { 'error-mess': form.password && passCheck == 0 },
            ]" :style="{
              visibility:
                form.password || passCheck === 1 ? 'visible' : 'hidden',
            }">密码</span>
          <p class="wrong-tip" v-if="userCheck == 0 || passCheck == 0">
            <i class="icon-jinggao"></i>账号/密码错误，或账号已被禁用
          </p>
        </li>
        <li class="login-btn">
          <el-button type="primary" @click="login()">立即登录</el-button>
        </li>
        <li class="login-tips">
          <i class="icon-tips"></i>“忘记账号/密码、账号被禁用”无法登录的，请联系管理员。
        </li>
        <li class="sign-up-tips">
          <i class="icon-tips"></i>如若还没有账户信息，前往<span>注册</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    setCookie
  } from "@/utils/utils";
  import {
    getToken
  } from "../service";
  // 消息通知
  import * as Msg from '@/utils/notify.js';
  export default {
    data() {
      return {
        userCheck: null, // 账号检测结果, 1是通过0是失败
        passCheck: null, // 密码检测结果, 1是通过0是失败
        form: {
          username: "",
          password: "",
          code: "",
        },
        codeSrc: "",
      };
    },
    methods: {
      // 监听键盘enter时间
      keyupSubmit() {
        document.onkeydown = () => {
          let _key = window.event.keyCode;
          if (_key === 13) {
            this.login();
          }
        };
      },
      login() {
        let params ={
          username: this.form.username,
          password: this.form.password
        };

        getToken({params},"post").then(res => {
          if (res.data.token) {
            this.$message.success("登录成功，正在跳转...");
            setCookie("access_token", res.data.token);
            // 延迟跳转防止提示样式被遮住
            let timer = setTimeout(() => {
              clearTimeout(timer);
              window.location.href = `${process.env.BASE_URL}index.html`;
            }, 200);
          } else {
            if (Number(res.status) === 400) {
              this.userCheck = 0;
              this.passCheck = 0;
              Msg.notifyError(res.desc);
            }
          }
        }).catch(err => {
          console.log(err);
        });
      },
    },
    created() {
      this.keyupSubmit();
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .login-box {
    width: 100%;
    height: 100%;
    background: url("~@/assets/images/blog-bg.png") no-repeat;
    background-size: 100% 100%;
    position: fixed;

    .login-main {
      border-radius: 4px;
      width: 458px;
      height: 400px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 3px 6px 0px rgba(139, 139, 139, 0.5);
      margin: auto;
      position: relative;
      top: 50%;
      margin-top: -246px;

      .login-title {
        font-size: 28px;
        font-weight: 400;
        color: $color-font-title;
        padding: 34px 0 35px;
        line-height: 40px;
        text-align: center;
      }

      .right-mess {
        &.login-mess {
          top: -10px;
        }

        color: $color-main !important;

        .el-input__inner {
          background: #fff;
          border: 1px solid $color-main;
        }
      }

      .error-mess {
        color: $color-danger !important;

        .el-input__inner {
          background: #fff;
          border: 1px solid $color-danger;
        }
      }

      li {
        margin-bottom: 23px;
        position: relative;

        .login-icon {
          display: inline-block;
          width: 66px;
          height: 48px;
          line-height: 48px;
          text-align: right;
          margin-right: 11px;
        }

        .icon-user {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
        }

        .icon-user-nor {
          background: url("~@/assets/images/login/icon-user-nor.svg") no-repeat;
        }

        .icon-user-sel {
          background: url("~@/assets/images/login/icon-user-sel.svg") no-repeat;
        }

        .icon-user-wrong {
          background: url("~@/assets/images/login/icon-user-wrong.svg") no-repeat;
        }

        .icon-password {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
        }

        .icon-password-nor {
          background: url("~@/assets/images/login/icon-password-nor.svg") no-repeat;
        }

        .icon-password-sel {
          background: url("~@/assets/images/login/icon-password-sel.svg") no-repeat;
        }

        .icon-password-wrong {
          background: url("~@/assets/images/login/icon-password-wrong.svg") no-repeat;
        }

        .icon-code {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
        }

        .icon-code-nor {
          background: url("~@/assets/images/login/icon-code-nor.svg") no-repeat;
        }

        .icon-code-sel {
          background: url("~@/assets/images/login/icon-code-sel.svg") no-repeat;
        }

        .icon-code-wrong {
          background: url("~@/assets/images/login/icon-code-wrong.svg") no-repeat;
        }

        .el-input {
          width: 334px;
        }

        .el-input__inner {
          height: 48px !important;
          line-height: 48px !important;
          background: #fff;
          border: 1px solid $color-border;
          border-radius: 4px !important;
        }

        .login-mess {
          transition: all 0.2s;
          position: absolute;
          left: 90px;
          top: 18px;
          display: inline-block;
          padding: 0 3px;
          background: white;
          font-size: 14px;
        }

        .wrong-tip {
          line-height: 30px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(202, 68, 68, 1);
          padding-left: 77px;
          margin-right: 5px;

          .icon-jinggao {
            width: 16px;
            height: 16px;
            display: inline-block;
            vertical-align: middle;
            background: url("~@/assets/images/login/jinggao.svg") no-repeat;
            margin-right: 7px;
          }
        }
      }

      .login-code {
        margin-bottom: 30px;

        .el-input {
          width: 203px;
        }

        .code-img {
          width: 115px;
          height: 41px;
          vertical-align: middle;
          display: inline-block;
          background: rgba(233, 233, 233, 1);
          margin-left: 15px;
          cursor: pointer;
        }
      }

      .login-btn {
        margin-bottom: 30px;
        padding: 0 44px;

        .el-button {
          width: 100%;
          height: 48px !important;
        }
      }

      .login-tips, .sign-up-tips{
        padding-left: 42px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 20px;
        -webkit-background-clip: text;

        .icon-tips {
          width: 16px;
          height: 16px;
          display: inline-block;
          vertical-align: middle;
          background: url("~@/assets/images/login/icon-tips.svg") no-repeat;
        }
      }
      .sign-up-tips{

      }
    }
  }
</style>
