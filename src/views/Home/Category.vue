<template>
  <div>
    <div class="navbar">
      <div class="tab-box">
        <div class="item" @click="$router.push({name:'home'})">首页</div>
        <div class="item active">分类</div>
      </div>
    </div>
    <div class="cate-box">
      <div class="cate-row" v-for="(val,key,index) in cateList" :key="key">
        <div class="left">{{key}}</div>
        <div class="body">
          <span class="item" v-for="(item,cate) in val" :key="cate">{{cate}}</span>
        </div>
        <div class="right">
          <div class="toggleFold" v-if="index==0">
            收起
            <i class="iconfont icon-Group-"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {},
  data() {
    return {
      cateList: {}
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$axios.get("/api/category").then(({ data }) => {
      this.cateList = data;
    });
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="stylus">
.navbar {
  height: 45px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #fff;

  .tab-box {
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: #fe8e99;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;

    .item {
      width: 55px;
      height: 100%;
      line-height: 30px;
      border-radius: 27px;
      text-align: center;
    }
  }
}

.active {
  background-color: #fff;
  color: #fe8e99;
}

.cate-box {
  font-size: 14px;
  color: #888;
  padding: 9px 0;

  .cate-row {
    display: flex;
    min-height: 45px;
    // align-items: center;
    text-align: center;

    .left {
      width: 68px;
    }

    .right {
      width: 93px;
    }

    .body {
      flex: 1;
      color: #333;
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      .item {
        padding: 4px 7px;
        text-align: center;
      }
    }
  }
}
</style>
