<template>
  <li class="songdetail" @click="$emit('translate-song-id',song.id)">
    <div class="songleft">
      <h3>{{song.name}}
          <span>{{songdetails.alias[0] !=undefined? '('+songdetails.alias[0]+')' : ''}}</span>
      </h3>
      <p>
        <span class="sghot"></span>
        <span>{{songdetails.artists[0].name}}</span>
        -
        <span>{{songdetails.album.name}}</span>
      </p>
    </div>
    <div class="songright">
      <i class="fa fa-play-circle-o"></i>
    </div>
  </li>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["song"],
  computed: {
    songdetails: function() {
      return this.song.song;
    }
  }
};
</script>

<style lang="less">
.songdetail {
  display: flex;
  padding: 10px 0px;
  margin-left: 5%;
  border-bottom:#ebebec solid 1px;
  width: 95%;
  text-align: left;
  .songleft {
    flex-basis: 80%;
     width: 0;
    h3{
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      span{
        color: #888888;
      }
    }
    p{
      .sghot{
        display: inline-block;
        width: 12px;
        height: 8px;
        margin-right: 4px;
        background: url(../assets/sq.png);
        background-size: 166px 97px;
        background-position: 0 0;
      }
      font-size: 12px;
      color: #888;
      cursor: pointer;
    }
  }
  .songright {
    flex-basis: 20%;
    padding-right: 20px;
    text-align: right;
    font-size: 25px;
    color: #aaaaaa;
  }
}
</style>