<template>
  <div class="ewm">
    <Bg>
      <p class="end_title">最后一步</p>
      <p class="end_title1">人工认证：添加微信好友</p>
      <div class="erweima">
        <img :src="erweima"/>
      </div>
      <p class="hint">长按上图二维码，添加微信好友</p>
    </Bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import Bg from '../base/bg'

  export default {
    components:{
      Bg
    },
    data() {
      return {
        erweima:'../static/images/erweima_03.png'
      }
    }
  }
</script>
<style scoped lang="less">
  .ewm{
    p{
      text-align: center;
      font-size: .45rem;
      color: #505050;
      &.end_title{
        margin-top: 22%;
      }
      &.end_title1{
        margin-top: 1%;
      }
    }
    .erweima{
      width: 75%;
      margin: 5% auto 3% auto;
      display: block;
      img{
        width:100%;
        display: block;
      }
    }
  }
</style>
