<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>



<style lang='stylus'>
@import 'http://at.alicdn.com/t/font_1869864_mgmtsejxv8.css';

* {
  box-sizing: border-box;
  outline: 0;
}

.container {
  min-height: 100vh;
}

.content {
  min-height: calc(100vh - 50px);
  background-color: #fff;
}

#app {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  // background-color: #f5f5f5;
}

.mt-10 {
  clear: both;
  border-top: 10px solid #f5f5f5;
}

.mb-10 {
  clear: both;
  border-bottom: 10px solid #f5f5f5;
}

.text-overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tabbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #fff;
}

.tabbar-box {
  display: flex;
  height: 50px;
  align-items: center;
  color: #333;

  .item {
    flex: 1;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .iconfont {
      font-size: 24px;
      margin-right: 6px;
    }
  }
}

// html {
// overflow-y: scroll;
// }

// :root {
// overflow-y: auto;
// overflow-x: hidden;
// }

// :root body {
// position: absolute;
// }

// body {
// width: 100vw;
// overflow: hidden;
// }

// html {
// overflow-y: overlay !important;
// overflow-x: overlay !important;
// }
html {
  overflow-y: scroll; // 这是为了兼容ie8，不支持:root, vw
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}
</style>
