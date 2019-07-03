<template>
  <div id="app">
    <router-view></router-view>
    <nav class="tab-nav">
      <router-link to="/">主页</router-link>
      <router-link to="/showsLibrary">动态</router-link>
      <router-link to="/myjuooo">收藏</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang='scss'>
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.tab-nav{
  height: 88px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  &::before{
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
  a{
    color: #333;
    font-size: 24px;
    &.router-link-exact-active{
      color: #ff7919;
    }
  }
}
</style>
