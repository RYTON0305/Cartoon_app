<template>
  <div class="content">
    <div class="login">
      <img src="http://xiaoshuo.dreoma.com/Public/home/mhimages/placeholder.png" alt />

      <van-field size="large" v-model="text" placeholder="请输入用户名" />
      <van-field size="large" v-model="password" placeholder="请输入密码" type="password" />
      <van-field
        v-if="registered"
        size="large"
        v-model="password"
        placeholder="请再次输入密码"
        type="password"
      />

      <div v-if="registered" class="connect-btn" @click="handleLogin">登录</div>
      <div v-else class="connect-btn">注册</div>
      <div class="toggleLogin">
        <span @click="registered=!registered">{{registered?'没有账号？去注册':'有账号？去登录'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      text: "",
      password: "",
      registered: true
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleLogin() {
      this.$toast("登录成功");
      this.$router.push("/home");
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.content {
  height: 100vh;
}

img {
  display: block;
  width: 66px;
  margin: 0 auto;
  padding: 44px 0;
}

.login {
  padding: 0 20px;
}

.van-field {
  border-bottom: 1px solid #eee;
  font-size: 19px;
  padding: 12px 0;
  color: #444;

  ::placeholder {
    color: #bbb;
  }
}

.connect-btn {
  height: 45px;
  background-color: #72a1ff;
  font-size: 19px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 45px;
  margin-top: 25px;
}

.toggleLogin {
  margin-top: 171px;
  font-size: 17px;
  color: #aaa;
  text-align: center;
}
</style>
