<template>
  <div class="container">
    <Navbar title="人气榜" />
    <ul class="books-classify">
      <li
        class="item"
        v-for="(val,key) in bookObj"
        :key="key"
        :class="{'active':rankingType ===key}"
        @click="handleChangeRankingType(key)"
      >
        <div class="text">{{key}}</div>
      </li>
    </ul>
    <BookList :book-list="bookList" />
    <Tabbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import BookList from "@/components/BookList";
import Tabbar from "@/components/Tabbar";

export default {
  name: "Ranking",
  props: {},
  data() {
    return {
      bookList: [],
      bookObj: {},
      rankingType: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$axios.get("/api/ranking").then(({ data }) => {
      console.log(data);
      this.bookObj = data;
      this.rankingType = Object.keys(data)[0];
      this.bookList = data[this.rankingType];
    });
  },
  watch: {},
  methods: {
    handleChangeRankingType(type) {
      this.rankingType = type;
      this.bookList = this.bookObj[this.rankingType];
    }
  },
  components: {
    Navbar,
    BookList,
    Tabbar
  }
};
</script>

<style scoped lang="stylus">
.books-classify {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 74px;
  margin: 0 12px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    font-size: 14px;

    &:nth-of-type(3n) {
      .text {
        border: 0;
      }
    }

    .text {
      text-align: center;
      width: 100%;
      border-right: 1px solid #eee;
    }
  }
}

/deep/.book-item:first-of-type {
  border: none !important;
}

/deep/.ranking-active {
  .iconfont {
    color: #fe8e99;
  }

  color: #fde23d;
}

.active {
  color: #ff5420;
}
</style>
