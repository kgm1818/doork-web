<template>
  <div id="app">
    <router-view></router-view>
    <nav class="foot-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/showsLibrary">演出库</router-link>
      <router-link to="/myjuooo">我的</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang='less'>
@import './style/rest.less';
@import './style/common.less';
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  width: 100%;
  height: 100%;
}
.foot-nav{
  height: 44px;
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.foot-nav:before{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  left: 0;
  top: -1px;
  transform: scaleY(0.5);
}
.foot-nav a{
  color: #333;
}
.foot-nav a.router-link-exact-active{
  color: #ff7919;
}
</style>
