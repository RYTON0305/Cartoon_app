<template>
  <div class="tabbar-container">
    <div class="tabbar">
      <div class="tabbar-box">
        <router-link tag="div" to="/bookshelf" class="item">
          <i class="iconfont icon-jiaoshi_shujia"></i> 书架
        </router-link>
        <router-link tag="div" to="/home" class="item ranking-active">
          <i class="iconfont icon-daohangshouye"></i> 首页
        </router-link>
        <router-link tag="div" to="/mine" class="item">
          <i class="iconfont icon-wode"></i> 我的
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style scoped lang='stylus'>
.tabbar-container {
  height: 50px;
}

.tabbar {
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}

.iconfont {
  color: #ddd;
}

.router-link-active {
  .iconfont {
    color: #fe8e99;
  }

  color: #fde23d;
}
</style>