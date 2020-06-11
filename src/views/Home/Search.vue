<template>
  <div class="container">
    <div :class="{'mb-10':!bookList.length}">
      <van-search
        @search="handleToSearch"
        show-action
        v-model="value"
        shape="round"
        placeholder="输入漫画名或作者"
      >
        <template slot="action">
          <div v-show="value" @click="$router.push({
            name:'home'
          })">取消</div>
          <div v-show="!value" @click="handleToSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div v-show="bookList.length!==0">
      <div class="res-text">
        搜索“
        <span>{{value}}</span>&nbsp;”结果，共
        <span>{{bookList.length}}</span>&nbsp;条
      </div>
      <BookList :book-list="bookList" />
    </div>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
export default {
  name: "Search",
  props: {},
  data() {
    return {
      value: "",
      mockValue: "7",
      bookList: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleToSearch() {
      if (this.value === "") {
        this.bookList = [];
      } else {
        this.$axios.get("/api/search").then(({ data }) => {
          this.bookList = data.searchList;
        });
      }
    }
  },
  components: {
    BookList
  }
};
</script>

<style scoped lang="stylus">
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
</style>
