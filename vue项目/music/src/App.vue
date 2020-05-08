<template>
  <div id="app" @touchstart="apptouchstart" @touchend="apptouchend">
    <!-- 一级路由出口 -->
    <keep-alive>
      <router-view v-on:translate-song-id="playaudio = $event"></router-view>
    </keep-alive>
    <!-- 播放器 -->
    <audio v-if="playaudio" :src="playurl" controls style="height:36px" autoplay></audio>
  </div>
</template>
<script>
export default {
  methods: {
    apptouchstart: function(event) {
      // console.log("开始", event);
      //  console.log(event.changedTouches[0].clientX);
      this.touchstartX = event.changedTouches[0].clientX;
      this.touchstartY = event.changedTouches[0].clientY;
    },
    apptouchend: function(event) {
      // console.log("结束", event);
      // console.log(event.changedTouches[0].clientX);
      this.touchendX = event.changedTouches[0].clientX;
      this.touchendY = event.changedTouches[0].clientY;
      if (this.touchendX - this.touchstartX > 10) {
        // 符合条件为右滑
        this.routerBack();
        this.touchendX = 0;
        this.touchendY = 0;
        this.touchstartX = 0;
        this.touchstartY = 0;
      }
    },
    routerBack: function() {
      this.$router.back();
    }
  },
  data: function() {
    return {
      playaudio: "",
      touchstartX: 0,
      touchendX: 0,
      touchstartY: 0,
      touchendY: 0,
    };
  },
  computed: {
    playurl: function() {
      return `https://music.163.com/song/media/outer/url?id=${this.playaudio}.mp3`;
    }
  },

};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
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
    list-style: none;
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
