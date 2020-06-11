<template>
  <div class="container">
    <div class="navbar">
      <div class="tab-box">
        <div :class="['item',{'active':currentTab ==='cartoon'}]" @click="currentTab='cartoon'">漫画</div>
        <div :class="['item',{'active':currentTab ==='novel'}]" @click="currentTab='novel'">小说</div>
      </div>
      <div
        class="action iconfont icon-sousuo2"
        @click="$router.push(
        {
          name:'search'
        }
      )"
      ></div>
    </div>
    <keep-alive>
      <BookBox :bookType="currentTab" :key="currentTab" />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import BookBox from "./BookBox";
export default {
  name: "Home",
  components: {
    BookBox
  },
  data() {
    return {
      currentTab: "cartoon"
    };
  },
  mounted() {},
  components: {
    Tabbar,
    BookBox
  }
};
</script>

<style lang="stylus" scoped>
.container {
  background-color: #f5f5f5;
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
      width: 94px;
      height: 100%;
      line-height: 30px;
      border-radius: 20px;
      text-align: center;
    }
  }

  .action {
    position: absolute;
    right: 12px;
    font-size: 22px;
    color: #fff;
  }
}

.active {
  background-color: #fff;
  color: #fe8e99;
}
</style>
