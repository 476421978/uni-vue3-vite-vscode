<template>
  <div>
    <form @submit="formSubmit" @reset="formReset">
      <input class="uni-input" name="userPhone" v-model="userPhone" focus placeholder="请输入手机号" />

      <input class="uni-input" name="userPwd" v-model="userPwd" password placeholder="请输入密码" />

      <div class="uni-btn-v">
        <button form-type="submit" confirm-type>登录</button>
      </div>
    </form>
  </div>
</template>

<script setup>
let userPhone = ref('')
let userPwd = ref('')

function formSubmit(e) {
  console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
  var formdata = e.detail.value
  uni.showModal({
    content: '表单数据内容：' + JSON.stringify(formdata),
    showCancel: false
  })
}
</script>

<style lang="scss" scoped></style>
