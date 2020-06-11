<template>
  <div>
    <div class="banner-container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="img in bannerList" :key="img">
          <img class="slide_loading" :src="img" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img src="@/assets/home-banner-bottom.png" class="home-banner-bottom" alt />
    </div>
    <div class="portal-nav">
      <div class="protal-item" v-for="(val,key,i) in protalList" :key="i">
        <img :src="val" alt class="item_cate" />
        <div class="title">{{key}}</div>
      </div>
    </div>
    <div class="bm-box" v-for="(val,kind) in booksList" :key="kind">
      <div class="head">
        <div class="title dot">{{kind}}</div>
        <div class="more">
          更多
          <i class="iconfont icon-xiangyou"></i>
        </div>
      </div>
      <div class="books-row">
        <div class="item" v-for="item in val" :key="item.title">
          <img :src="item.imgUrl" alt class="lazy" />
          <div class="title">{{item.title}}</div>
          <div class="text">更新至{{item.updateTo}}话</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "BookBox",
  props: {
    bookType: {
      type: String,
      default: "cartoon"
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: true,

        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
        // Some Swiper option/callback...
      },
      bannerList: [],
      protalList: [],
      booksList: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$axios.get(`/api/books/${this.bookType}`).then(({ data }) => {
      console.log(data);
      this.bannerList = data.banner;
      this.protalList = data.portal;
      this.booksList = data.booksList;
    });
  },
  watch: {},
  methods: {},
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped lang="stylus">
/deep/.swiper-pagination-bullets {
  bottom: 30px !important;
}

/deep/ .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background-color: #000;
}

/deep/ .swiper-pagination-bullet-active {
  background-color: #fde23d;
  width: 12px;
  border-radius: 4px;
}

.banner-container {
  width: 100vw;
  // height: 236px;
  position: relative;

  img {
    width: 100vw;
  }

  /deep/.banner-bullet-active {
    background-color: rgba(253, 226, 61, 1);
    width: 12px;
    height: 8px;
    margin: 0 4px;
  }

  .home-banner-bottom {
    position: absolute;
    z-index: 99;
    bottom: 0;
  }
}

.portal-nav {
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 4px 10px 8px;
  text-align: center;
  background-color: #fff;
}

.protal-item {
  width: 88px;
  font-size: 12px;

  img {
    width: 50px;
  }
}

.bm-box {
  margin-top: 10px;
  background-color: #fff;

  .head {
    padding: 0 12px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 16px;

      &::before {
        display: inline-block;
        width: 4px;
        height: 12px;
        border-radius: 2px;
        background-color: #fde23d;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 5px;
        content: ' ';
      }
    }
  }

  .more {
    color: #fde23d;
    font-size: 8px;

    i {
      font-size: 8px;
      color: #ff0000;
    }
  }
}

.books-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .item {
    width: 105px;
    height: 187px;
    margin-bottom: 10px;
    background-color: #fff;

    .lazy {
      max-width: 100%;
      height: 146px;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 8px;
      font-size: 12px;
      color: #333;
    }

    .text {
      margin: 3px 0;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
