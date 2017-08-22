<template>
  <div class="sign_bg">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .sign_bg {
    width: 100%;
    height: calc(100vh);
    overflow: auto;
    background: url("../../static/images/bg.jpg") no-repeat;
    background-size: cover;
  }
</style>
