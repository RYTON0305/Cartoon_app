<template>
  <ul class="book-res">
    <li class="book-item" v-for="item in bookList" :key="item.title">
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
</template>

<script>
export default {
  name: "BookList",
  props: {
    bookList: {
      type: Array,
      default: () => []
    }
  },
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
.book-res {
  .book-item {
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
    padding: 13px 12px;
    border-top: 1px solid #dcdcdc;
    box-sizing: content-box;

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

    span:last-of-type {
      margin-left: 10px;
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
