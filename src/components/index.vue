<template>
  <div class="index_class">
    <div class="banner">
      <img src="../assets/banner.png" alt="" class="bg_img"/>
      <a href="javascript:;" class="enter"></a>
      <a href="javascript:;" class="wechat"></a>
    </div>
    <div class="classes clearfix" :class="{fixed:isTop}" ref="classes">
      <ul class="clearfix">
        <li v-for="(item,index) in classes" :key="index">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
    <class-item></class-item>
    <class-item></class-item>
    <class-item></class-item>
    <class-item></class-item>
    <class-item></class-item>
    <class-item></class-item>
  </div>
</template>
<script>
  import classItem from '../base/class_item'

  export default {
    components: {
      classItem
    },
    data() {
      return {
        classes: ['全部课程', '哑铃训练', '杠铃训练'],
        isTop:false
      }
    },
    computed:{
      offsetTopY(){
        return this.$refs.classes.offsetTop
      }
    },
    methods:{
      isTops(){
        this.isTop=window.scrollY>=this.offsetTopY?true:false
      }
    },
    mounted(){
      this.$nextTick(()=>{
        window.addEventListener('scroll',this.isTops)
      })
    }
  }
</script>
<style scoped lang="less">
  .banner {
    width: 100%;
    height: auto;
    overflow: auto;
    display: flex;
    position: relative;
    .bg_img {
      width: 100%;
      height: 100%;
    }
    a {
      position: absolute;
      &.enter {
        width: 3rem;
        height: .9rem;
        top: 17%;
        right: 7%;
      }
      &.wechat {
        width: 3rem;
        height: 1.2rem;
        top: 50%;
        right: 7%;
      }
    }
  }

  .classes {
    background: #fff;
    width: 100%;
    ul {
      li {
        float: left;
        width: 33.333333%;
        font-size: .45rem;
        text-align: center;
        padding: .2rem 0 0 0;
        a {
          color: #5b5b5b;
          border-bottom: 5px solid #1eacc7;
          padding-bottom: .2rem;
          display: inline-block;
        }
      }
    }
  }
  .fixed{
    position: fixed !important;
    top:0 !important;
  }
</style>
