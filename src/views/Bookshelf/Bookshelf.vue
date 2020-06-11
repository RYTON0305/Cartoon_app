<template>
  <div class="container">
    <div class="navbar">
      <div class="tab-box">
        <div
          :class="['item',{'active':currentTabComponent ==='Collection'}]"
          @click="currentTabComponent='Collection'"
        >收藏</div>
        <div
          :class="['item',{'active':currentTabComponent ==='History'}]"
          @click="currentTabComponent='History'"
        >历史</div>
      </div>
    </div>
    <component :is="currentTabComponent" />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import Collection from "./Collection";
import History from "./History";
export default {
  name: "Bookshelf",
  data() {
    return {
      currentTabComponent: "Collection"
    };
  },
  components: {
    Tabbar,
    Collection,
    History
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}

.navbar {
  position: absolute;
  top: 0;
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
      width: 54px;
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

.bs-box {
  margin-top: 45px;
  flex: 1;
  background-color: #f8f8f8;
}
</style>