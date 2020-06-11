<template>
  <div class="bs-box">
    <div class="collect-item" v-for="item in 2" :key="item">
      <img class="cover" src="@/assets/cover.jpg" alt />
      <div class="body">
        <div class="title">枷锁</div>
        <div class="author">LX</div>
        <div class="text">第1话</div>
      </div>
      <div class="action">续看</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",

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
.collect-item {
  height: 100px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;

  &:last-of-type {
    border: 0;
  }
}

.cover {
  width: 63px;
  height: 84px;
}

.body {
  margin-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title {
    font-size: 16px;
    color: #000;
  }

  .author, .text {
    font-size: 14px;
    color: #999;
  }
}

.action {
  padding: 0 12px;
  height: 29px;
  line-height: 29px;
  background-color: #fff;
  border: 1px solid #fde23d;
  border-radius: 4px;
  font-size: 12px;
  color: #fde23d;
}
</style>
