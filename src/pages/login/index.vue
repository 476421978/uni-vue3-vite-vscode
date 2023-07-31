<template>
  <div>
    <form @submit="formSubmit">
      <input class="uni-input" name="userPhone" v-model="userPhone" placeholder="请输入手机号" />

      <input class="uni-input" name="userPwd" v-model="userPwd" password placeholder="请输入密码" />

      <div class="uni-btn-v">
        <button form-type="submit" confirm-type>登录</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { userLogin } from '@/api/user'
let userPhone = ref('')
let userPwd = ref('')

async function formSubmit(e) {
  var formdata = e.detail.value
  const params = {
    userPhone: userPhone.value,
    userPwd: userPwd.value
  }
  const res = await userLogin(params)
  console.log('res-----', res)
}
</script>

<style lang="scss" scoped></style>
