<template>
  <div class="container">
    <img
      class="toback"
      src="http://xiaoshuo.dreoma.com/Public/home/mhimages/png/back-free.png"
      alt="返回"
      @click="$router.back()"
    />
    <div class="banner"></div>
    <div class="box-list"></div>
  </div>
</template>

<script>
export default {
  name: "Free",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="stylus">
.container {
  background-color: #92d3ff;
  overflow: hidden;
}

.toback {
  position: fixed;
  left: 20px;
  top: 20px;
  background-size: 40px 40px;
  height: 40px;
  width: 40px;
  z-index: 99;
}

.banner {
  background-image: url('http://xiaoshuo.dreoma.com/Public/home/mhimages/rt_tl.png');
  background-position: bottom;
  background-size: cover;
  margin: 28px 29px 23px 26px;
  height: 104px;
}

.box-list {
  padding: 0 15px;
  margin: 2px 10px 0;
  background-color: #fff;
  min-height: 513px;
  position: relative;

  &::before {
    content: '';
    background-image: url('http://xiaoshuo.dreoma.com/Public/home/mhimages/br.png');
    position: absolute;
    left: 0;
    top: -13px;
    display: block;
    width: 100%;
    height: 22px;
    background-repeat: repeat-x;
    background-position: center top;
    background-size: 22px;
  }
}
</style>
