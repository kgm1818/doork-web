<template>
  <div class="home">
      <section class="home__block">
          test
          <p class="home__block__label">文案。。。</p>
          <van-button type="primary">默认按钮</van-button>
          <a class="" href="/gridcard"> gridcard</a>
          <a href="javascript: ;" @click="$router.push('/canvas')"> canvas </a>
          <span>countDownServer</span>
          <span>{{ countDownText }}</span>
      </section>
  </div>
</template>

<script>
import CountDownServer from '../server/count-down-server'
// const countDownServer = new CountDownServer(10000) // 全局注册页面销毁还在
export default {
  name: 'Home',
  data () {
    return {
        countDownText: "",
        countDownServer: new CountDownServer(10000) 
    }
  },
  created() {
      const [initHours, initMinute, initSecond] = this.countDownServer.initDealData()
      this.countDownText = `${initHours}:${initMinute}:${initSecond}`
      this.countDownServer.startDown(timeArr => {
          if(timeArr.length <= 0){
              // 倒计时完后的逻辑处理
              console.log("Just end ")
              return
          }
          const [hours, minute, second] = timeArr;
          this.countDownText = `${hours}:${minute}:${second}`
      })
  },
  mounted() {
      this.$toast("文字大小异常")
  },
  methods: {
      
  },
  beforeDestroy(){
      console.log("beforeDestroy")
      // 视情况关闭倒计时
      // 1. 不关闭页面销毁倒计时还在进行
      // 2. 关闭
      this.countDownServer.clearTimer()
  }
}
</script>

<style scoped lang="scss">
    $ff67: #ff67ff;
    .home{
        &__block{
            color: $c_red;
            font-size: 50px;
            &__label{
                color: $ff67;
                font-size: 24px;
            }
        }
    }
</style>
