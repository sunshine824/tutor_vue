<template>
  <div class="sign_input">
    <bg>
      <h2 class="title">开通导师分享权限</h2>
      <p class="sm_title">PTHola客服将尽快为您完成认证</p>
      <div class="input_group">
        <p class="userinfo">您的姓名</p>
        <input type="text" class="user_input"/>
      </div>
      <div class="input_group">
        <p class="userinfo">您的电话</p>
        <input type="tel" class="user_input"/>
      </div>
      <div class="btn1">
        <span class="submit">提交申请</span>
      </div>
      <p class="notice">提交后请准备您的导师证书，我们将人工认证</p>
    </bg>
  </div>
</template>
<script type="text/ecmascript-6">
  import Bg from '../base/bg'

  export default {
    components:{
      Bg
    },
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="less">
  .sign_input{
    .title{
      font-size: .65rem;
      color: #505050;
      text-align: center;
      margin-top: 22%;
      font-weight: 600;
    }
    .sm_title{
      font-size: .4rem;
      color: #505050;
      text-align: center;
      margin-top: 1%;
      margin-bottom: 15%;
    }
    .input_group{
      margin-top: 4%;
      .userinfo{
        text-align: center;
        color: #505050;
        font-size: .45rem;
        margin-bottom: 10px;
      }
      .user_input{
        width:85%;
        margin: 0 auto;
        height: 1rem;
        line-height: 1rem;
        border-radius: .2rem;
        border: 1px solid #e3e3e3;
        background: #fff;
        display: block;
        padding-left: 15px;
        padding-right: 15px;
        font-size: .4rem;
      }
    }
    .btn1{
      width:85%;
      margin: 6% auto 4% auto;
      display: block;
      .submit{
        width:100%;
        height:1rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        font-size: .45rem;
        background: #44bcd2;
        border-radius: .2rem;
        display: block;
      }
    }
    p.notice{
      font-size: .45rem;
      color: #505050;
      text-align: center;
    }
  }
</style>
