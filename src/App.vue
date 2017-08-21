<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './public/js/prefixfree'

  export default {
    name: 'app'
  }
</script>

<style>
  @import "public/css/common.css";
  #app{
    min-height: calc(100vh);
    background: #f9f9f9;
    overflow: auto;
  }
</style>
