<template>
  <div class="class_item clearfix">
    <div class="class_desc">
      <p class="class_txt">课程24：使用哑铃锻炼肩袖肌群</p>
      <div class="btns">
        <span class="class_name">哑铃训练</span>
        <span class="class_money">免费</span>
      </div>
    </div>
    <div class="class_img">
      <img src="../assets/class_img.png"/>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .class_item{
    background: #fff;
    margin-top: 5px;
    padding: .2rem .3rem .5rem .5rem;
  }
  .class_desc {
    width: 55%;
    float: left;
    .class_txt{
      font-size: .4rem;
      font-weight: 600;
      color: #5b5b5b;
      margin-bottom: .6rem;
    }
    .btns{
      span{
        text-align: center;
        float: left;
        height: .9rem;
        line-height: .9rem;
        font-size: .4rem;
        border-radius: .25rem;
        &.class_name{
          color: #5b5b5b;
          padding: 0 .4rem;
          border:1px solid #5b5b5b;
          margin-right: .2rem;
        }
        &.class_money{
          color: #fff;
          background: #1eacc7;
          width: 2rem;
        }
      }
    }
  }
  .class_img {
    width: 40%;
    float: right;
    margin-top: .2rem;
    img {
      width: 100%;
      height: 2.5rem;
    }
  }
</style>
