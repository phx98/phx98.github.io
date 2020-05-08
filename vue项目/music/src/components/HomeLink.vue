<template>
  <div :class="{homelink:homelink}" class="homelinktop">
    <div class="top-logo">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3915735970,515042675&fm=26&gp=0.jpg"
      />
      <span>网易云音乐</span>
      <button>下载APP</button>
    </div>
    <ul id="nav">
      <li>
        <router-link to="/">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/hot">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      homelink: false,
      // scrollTop:Number,
      // offsetTop:Number
    };
  },
  mounted: function() {
    // var scrollTop =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // var offsetTop = document.querySelector('.homelinktop');
  //  console.log(scrollTop);
   
  //  console.log(offsetTop);
   
  }
};
</script>
<style lang="less" scoped>
.homelink {
  position: fixed;
  top: 0;
}
.top-logo {
  height: 50px;
  background: #d91a12;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: content-box;
  color: #fff;
  img {
    height: 50px;
    vertical-align: middle;
  }
  button {
    height: 36px;
    line-height: 36px;
    width: 70px;
    text-align: center;
    font-size: 16px;
    color: #d43c33;
    background-color: #fff;
    position: relative;
    float: right;
    margin-right: 50px;
    border: 0px;
    z-index: 3;
    &::before {
      content: "";
      height: 37px;
      width: 36px;
      position: absolute;
      background-color: #fff;
      left: -20px;
      top: 0;
      border-radius: 50%;
      z-index: -1;
    }
    &::after {
      content: "";
      height: 37px;
      width: 36px;
      position: absolute;
      left: 66px;
      top: 0;
      background-color: #fff;
      border-radius: 50%;
      z-index: -1;
    }
  }
}
</style>
