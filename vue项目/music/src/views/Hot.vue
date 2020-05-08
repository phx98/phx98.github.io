<template>
  <div class="hot">
    <HomeLink></HomeLink>
    <div class="hotpot">
      <div class="hotpotimg"></div>
      <p>{{}}</p>
    </div>
  </div>
</template>
<script>
import HomeLink from "@/components/HomeLink.vue";

export default {
  components: {
    HomeLink
  },
  data: function() {
    return {
      hotlist: null
    };
  },
  methods: {
    getHotList: function() {
      this.axios
        .get("/top/list?idx=1")
        .then(response => {
          // console.log(response.data.playlist);
          this.hotlist = response.data.playlist;
          window.localStorage.setItem(
            " hotlist",
            JSON.stringify({
              val: this.hotlist,
              time: Date.now() + 1 * 60 * 60
            })
          );
          console.log(this.hotlist);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    CheckLocal: function() {
      let cacheHotlist = JSON.parse(window.localStorage.getItem("hotlist"));
      if (cacheHotlist && cacheHotlist.time > Date.now()) {
        this.hotlist = cacheHotlist.val;
      } else {
        this.getHotList();
      }
      console.log(this.hotlist);
    },
    Handletime: function() {
      console.log(this.hotlist);
    }
  },
  created() {
    this.CheckLocal();
  },
  mounted() {
    this.Handletime();
  }
};
</script>
<style lang="less" scoped>
.hotpot{
  width: 100%;
  height: 170px;
  background: url(../assets/hotpot.jpg);
  display: flex;
  align-items: center;
  
  .hotpotimg{
    margin-left:20px ;
    width: 142px;
    height: 67px;
    background: url(../assets/sq.png);
    background-position: -24px -30px;
    background-size: 166px 97px;
  }
  p{
    flex-basis: 100%;

  }
}
</style>