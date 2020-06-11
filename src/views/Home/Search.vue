<template>
  <div class="container">
    <div :class="{'mb-10':!searchList.length}">
      <van-search
        @search="handleToSearch"
        show-action
        v-model="value"
        shape="round"
        placeholder="输入漫画名或作者"
      >
        <template slot="action">
          <div v-show="!value">取消</div>
          <div v-show="value" @click="handleToSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div v-show="searchList.length!==0">
      <div class="res-text">
        搜索“
        <span>{{value}}</span>&nbsp;”结果，共
        <span>{{searchList.length}}</span>&nbsp;条
      </div>
      <ul class="book-res">
        <li class="item" v-for="item in searchList" :key="item.title">
          <img :src="item.img" alt="图片" />
          <div class="body">
            <div class="title text-overflow">{{item.title}}</div>
            <div class="text">作者：{{item.author}}</div>
            <div class="text intro text-overflow">{{item.intro}}</div>
            <div class="text">
              <span>
                <i class="iconfont icon-huore"></i>
                {{item.popularity}}
              </span>
              <span>
                <i class="iconfont icon-praise_icon"></i>
                {{item.argee}}
              </span>
            </div>
          </div>
          <div class="action">阅读</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
  data() {
    return {
      value: "",
      mockValue: "7",
      searchList: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleToSearch() {
      if (this.value === "") {
        this.searchList = [];
      } else {
        this.$axios.get("/api/search").then(({ data }) => {
          this.searchList = data.searchList;
        });
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.container {
  background-color: #fff;
}
.van-search {
  height: 50px;
  & ::placeholder {
    color: #333;
    font-size: 14px;
  }
}
.res-text {
  margin: 16px 0 12px;
  padding: 0 12px;
  font-size: 14px;
  color: #7a7a7a;
  background-color: #fff;
  span {
    color: #ff730b;
  }
}
.book-res {
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
    padding: 13px 12px;
    border-top: 1px solid #dcdcdc;
    .body {
      height: 100%;
      flex: 1;
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    img {
      width: 63px;
      height: 84px;
    }
    .title {
      font-size: 16px;
      color: #000;
    }
    .intro {
      width: 90px;
    }
    .iconfont {
      font-size: 13px;
      color: #999;
    }
  }
}
.action {
  width: 62px;
  height: 27px;
  line-height: 27px;
  border-radius: 25px;
  border: 1px solid #fde23d;
  text-align: center;
  color: #fde23d;
  font-size: 13px;
}
</style>
