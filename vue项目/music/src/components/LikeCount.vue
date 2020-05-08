<template>
  <div>
    <span @click="addcount" :class="{ redhandactive : redhand }">
      {{likecount}}
      <i class="fa fa-thumbs-o-up"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      redhand: false,
      likecount: this.commentlikecount
    };
  },
  props: ["commentlikecount"],
  methods: {
    addcount: function() {
      this.redhand = !this.redhand;
      if (this.redhand) {
        this.likecount++;
      } else {
        this.likecount--;
      }
    }
  }
};
</script>

<style lang="less" scoped>
span {
  // background: skyblue;
  display: inline-block;
  height: 30px;
  min-width: 30px;
  padding-right: 15px;
  font-size: 14px;
  color: #999;
  text-align: right;
  &.redhandactive {
    color: red;
  }
}
</style>