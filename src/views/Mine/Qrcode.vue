<template>
  <div class="container">
    <div class="img-box">
      <img src="@/assets/face_error.png" alt="错误" />
    </div>
    <div class="errMsg">api unauthorized hints: [qGeCyCPce-vZt45a!](代码：48001)</div>
    <div class="jumpTo"></div>
    {{time}} 秒后页面自动
    <router-link to="/mine">跳转</router-link>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "",
  props: {},
  data() {
    return {
      time: 3,
      timer: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time < 1) {
        clearInterval(this.timer); //关闭

        this.$router.back();
      }
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.timer); //关闭
    }
  },
  methods: {},
  components: {
    Navbar
  }
};
</script>

<style scoped lang="less">
.container {
  margin: 24px 48px;
  text-align: center;
}
.img-box {
  img {
    width: 100px;
    height: 100px;
  }
}
.errMsg {
  padding-top: 20px;
}
.jumpTo {
  padding-top: 10px;
}
</style>
