<template>
  <div id="app">
    <!-- 一级路由出口 -->
    <router-view />
    <!-- 播放器 -->
    <audio src controls style="height:36px"></audio>

  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@red: #d43c33;
#nav {
  display: flex;
  text-align: center;
  border-bottom: 1px solid lightgray;
  height: 40px;
  box-sizing: border-box;
  li {
    flex: 1;
    list-style:none;
  }
  a {
    color: #2c3e50;
    text-decoration: none;
    line-height: 38px;
    display: inline-block;

    padding: 0 3px;
    box-sizing: border-box;

    &.router-link-exact-active {
      color: @red;
      border-bottom: 2px solid @red;
    }
  }
}
</style>
