<template>
  <div class="content">
    <div class="login mt-10">
      <img src="http://xiaoshuo.dreoma.com/Public/home/mhimages/placeholder.png" alt />

      <van-field size="large" v-model="text" placeholder="请输入用户名" />
      <van-field size="large" v-model="password" placeholder="请输入密码" type="password" />
      <div class="connect-btn">绑定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Connect",
  props: {},
  data() {
    return {
      text: "",
      password: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
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
</style>
