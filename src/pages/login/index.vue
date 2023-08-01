<template>
  <div class="login-container">
    <!-- 背景图 -->
    <div ref="loginWrapper" class="login-bg-wrapper">
      <img :src="ImageMobileBg" />
    </div>

    <div class="form-wrapper">
      <div class="right">
        <div class="logo-wrapper">
          <img src="@i/login/sld_login_logo.png" />
        </div>
        <div class="form-container margin-top-lg">
          <div class="item-wrapper">
            <uni-easyinput type="number" v-model="userPhone" :maxlength="11" focus placeholder="请输入手机号" />
          </div>
          <div class="item-wrapper margin-top-lg">
            <uni-easyinput type="password" v-model="userPwd" :maxlength="6" placeholder="请输入密码" />
          </div>
          <div class="margin-top-lg">
            <button class="login btn-primary" :loading="loading" @click="onLogin">登录</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">CopyRight@2023-2024</div>
  </div>
</template>

<script setup>
import ImageBg from '@i/login/sld_login_left.png'
import ImageMobileBg from '@i/login/sld_login_bg.png'
import { UtiLogin } from '@u/login'

import { inject } from 'vue'
import { userLogin } from '@/api/user'
let userPhone = ref('12345678910')
let userPwd = ref('123456')
let loading = ref(false)

const $isMobile = inject('$isMobile')

function onLogin() {
  const params = {
    userPhone: userPhone.value,
    userPwd: userPwd.value
  }
  loading.value = true
  UtiLogin(params)
  loading.value = false
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  // 背景图
  .login-bg-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover; // 对图片进行剪切，保留原始比例
    }
  }

  // 登录图标
  .logo-wrapper {
    text-align: center;
    & img {
      width: 150px;
    }
  }
  // 登录框
  .form-wrapper {
    position: absolute;
    top: 18.5%;
    left: 0;
    right: 0;
    bottom: 15.8%;
    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .form-container {
        width: 50%;
        height: 60%;
        background: rgba(183, 183, 183, 0.2);
        padding: 5%;
        border-radius: 5px;
        border: 2px solid #fff;
        .item-wrapper {
          width: 100%;
        }
        .login {
          width: 100%;
        }
      }

      // 根据宽度选择样式
      @media screen and (max-width: 768px) {
        .form-container {
          width: 80%;
        }
      }
      @media screen and (min-width: 768px) and (max-width: 992px) {
        .form-container {
          width: 50%;
        }
      }
      @media screen and (min-width: 992px) {
        .form-container {
          width: 30%;
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%);
    color: #ccc;
  }
}
</style>
