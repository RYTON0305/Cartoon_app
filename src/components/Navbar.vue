<template>
  <nav :style="styleObject">
    <i :style="{'color':arrowColor}" class="iconfont icon-zuo" @click="$router.back()"></i>
    <div class="title">{{title}}</div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    styleObject() {
      return {
        color: this.textColor,
        "background-color": this.bgColor
      };
    }
  },
  mounted() {},
  props: {
    title: {
      type: String,
      default: ""
    },
    arrowColor: {
      type: String,
      default: "#f33"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    textColor: {
      type: String,
      default: "#333"
    }
  }
};
</script>

<style lang='less' scoped>
nav {
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  // background-color: #d43f3a;
  // color: #fff;
  // box-shadow: 0px 2px 2px #999;
  border-bottom: 1px solid #eee;
}
.iconfont {
  position: absolute;
  left: 10px;
  font-size: 24px;
  font-weight: bold;
}
</style>