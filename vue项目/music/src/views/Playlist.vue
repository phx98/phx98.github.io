<template>
  <div class="palylist">
    <div class="header">
      <div class="mask" :style="{backgroundImage: `url(${songdata.coverImgUrl})`}"></div>
      <div class="titleimg">
        <img :src="songdata.coverImgUrl" />
        <span>
          <i class="fa fa-headphones"></i>
          {{count}}
        </span>
      </div>
      <div class="header-right">
        <h4>{{songdata.name}}</h4>
        <div class="header-rtoop">
          <img :src="creator.avatarUrl" alt />
          <span>{{creator.nickname}}</span>
        </div>
      </div>
    </div>
    <div class="labelcontent">
      <h5>
        标签:
        <span v-for="(playlabel,index) in songdata.tags" :key="index">{{playlabel}}</span>
      </h5>
      <div class="labeldescrip" :class="{show:showhidden}">
        <span>简介:</span>
        <span>{{songdata.description}}</span>
      </div>
      <div class="more" @click="showhidden=!showhidden">
        <i class="fa fa-angle-up" v-if="showhidden"></i>
        <i v-else class="fa fa-angle-down"></i>
      </div>
    </div>
    <div class="content">
      <h5 class="contentitle">歌曲列表</h5>
      <ul class="contentdetails">
        <li v-for="(songlist,index) in songdata.tracks" :key="index">
          <span class="songorder">{{index+1}}</span>
          <div class="songlistfl">
            <h3>{{songlist.name}}</h3>
            <p>
              <span>{{songlist.ar[0].name}}</span>
              -
              <span>{{songlist.al.name}}</span>
            </p>
          </div>
          <div class="songlistright">
            <i class="fa fa-play-circle-o"></i>
          </div>
        </li>
      </ul>
      <h5 class="contentitle">精彩评论</h5>
      <ul>
        <li v-for="(hotcomment,index) in hotcomments" :key="index" class="contenthotcomments">
          <div class="conhotc-top">
            <div class="conhotc-top-left">
              <img :src="hotcomment.user.avatarUrl" />
            </div>

            <div class="talkman">
              <h5>{{hotcomment.user.nickname}}</h5>
              <p>{{hotcomment.time}}</p>
            </div>
            <LikeCount :commentlikecount="hotcomment.likedCount" class="likecount"></LikeCount>
          </div>
          <p class="conhotc-bottom">{{hotcomment.content}}</p>
        </li>
      </ul>

      <h5 class="contentitle">最新评论({{comments.length}})</h5>
      <ul>
        <li v-for="(comment,index) in comments" :key="index" class="contentcomments">
          <div class="conhotc-top">
            <div class="conhotc-top-left">
              <img :src="comment.user.avatarUrl" />
            </div>
            <div class="talkman">
              <h5>{{comment.user.nickname}}</h5>
              <p>{{comment.time}}</p>
            </div>
            <LikeCount :commentlikecount="comment.likedCount" class="likecount"></LikeCount>
          </div>
          <p class="conhotc-bottom">{{comment.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import LikeCount from "@/components/LikeCount.vue";

export default {
  data: function() {
    return {
      songListId: this.$route.query.id,
      songdata: null,
      showhidden: false,
      playdata: null,
      audiencecount: this.$route.query.audiencecount
    };
  },
  components: {
    LikeCount
  },
  computed: {
    creator: function() {
      return this.songdata.creator;
    },
    comments: function() {
      return this.playdata.comments;
    },
    hotcomments: function() {
      return this.playdata.hotComments;
    },
    count: function() {
      return this.audiencecount / 10000 > 1
        ? (this.audiencecount / 10000).toFixed(2) + "万"
        : this.audiencecount;
    }
  },
  methods: {
    getSonglist: function() {
      this.axios
        .get("/playlist/detail", {
          params: {
            id: this.songListId
          }
        })
        .then(response => {
          // 判断拿取数据是否正确，反爬虫
          // console.log(response.data.playlist);
          this.songdata = response.data.playlist;
          // 放入本地存储数据里面，设置过期时间
          window.localStorage.setItem(
            "sl-" + this.songListId,
            JSON.stringify({
              val: this.songdata,
              time: Date.now() + 2 * 60 * 60 * 1000
            })
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPlaylist: function() {
      this.axios
        .get("/comment/playlist", {
          params: {
            id: this.songListId
          }
        })
        .then(response => {
          // 判断拿取数据是否正确，反爬虫
          console.log(response.data);
          this.playdata = response.data;
          // 放入本地存储数据里面，设置过期时
          window.localStorage.setItem(
            "pl-" + this.songListId,
            JSON.stringify({
              val: this.playdata,
              time: Date.now() + 6 * 60 * 60 * 1000
            })
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    const cacheSonglist = JSON.parse(
      window.localStorage.getItem("sl-" + this.songListId)
    );
    const cachePlaylist = JSON.parse(
      window.localStorage.getItem("pl-" + this.songListId)
    );
    if (cacheSonglist && cacheSonglist.time > Date.now()) {
      this.songdata = cacheSonglist.val;
    } else {
      this.getSonglist();
    }
    // 拿取歌单
    if (cachePlaylist && cachePlaylist.time > Date.now()) {
      this.playdata = cachePlaylist.val;
    } else {
      this.getPlaylist();
    }
  },
  //   路由更新守卫,想要复用,同级组件的跳转
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    this.songListId = to.query.id;
    this.getSonglist();
    next();
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.header {
  height: 200px;
  width: 100%;
  display: flex;
  padding: 20px;
  overflow: hidden;
  color: #fff;
  position: relative;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(30px) brightness(0.8);
    transform: scale(1.5);
    background-position: center;
  }
  .titleimg {
    flex-basis: 30%;
    height: 100%;
    position: relative;
    img {
      height: 100%;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      width: 80px;
      background: rgba(0,0,0,0.5);
    }
  }
  .header-right {
    margin-top: 20px;
    padding-left: 20px;
    h4 {
      font-weight: 500;
    }
    .header-rtoop {
      margin-top: 40px;
      img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
      }
    }
  }
}
.labelcontent {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 20px;
  color: #666;
  background: #f8f8f8;
  h5 {
    span {
      border-radius: 10px;
      display: inline-block;
      padding: 1px 8px;
      font-size: 12px;
      margin-right: 10px;
      border: rgba(0, 0, 0, 0.5) solid 1px;
      position: relative;
      top: -1px;
    }
  }
  .labeldescrip {
    overflow: hidden;
    line-height: 19px;
    text-emphasis: ellipsis;
    height: 4.5em;
    &.show {
      height: auto;
    }
    span {
      white-space: pre-wrap;
      vertical-align: baseline;
    }
  }
  .more {
    overflow: hidden;
    i {
      float: right;
      font-size: 20px;
    }
  }
  // height: 70px;
}
.content {
  .contentitle {
    background: #eeeff0;
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
  }
  .contentdetails {
    background: #f8f8f8;
    li {
      display: flex;
      align-items: center;
      .songorder {
        width: 40px;
        font-size: 19px;
        color: #999;
        flex-basis: 10%;
        // background-color: pink;
        text-align: center;
      }
      .songlistfl {
        flex-basis: 80%;
        padding: 6px 0;
        color: #333;
        cursor: pointer;
        font-size: 14px;
        // background-color: skyblue;
        h3 {
          font-size: 17px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: normal;
          width: 200px;
        }
        p {
          font-size: 12px;
          color: #888;
        }
      }
      .songlistright {
        width: 25px;
        height: 25px;
        color: #e0e0e0;
        font-size: 25px;
        text-align: center;
      }
    }
  }
  .contenthotcomments,
  .contentcomments {
    background: #f8f8f8;
    .conhotc-top {
      display: flex;
      padding-top: 10px;
      .conhotc-top-left {
        margin-top: 0px;
        flex-basis: 10%;
        img {
          margin-left: 5px;
          border-radius: 50%;
          margin-right: 10px;
          width: 80%;
        }
      }
      .talkman {
        flex-basis: 70%;
        h5 {
          font-size: 14px;
          line-height: 20px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // cursor: pointer;
        }
        p {
          font-size: 12px;
          color: #888;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
        }
      }
      .likecount {
        flex-basis: 20%;
      }
    }
    .conhotc-bottom {
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // word-break: normal;
      width: 90%;
      margin-left: 10%;
      color: #333;
      font-size: 15px;
      line-height: 22px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f4f4f4;
    }
  }
}
</style>