<template>
  <div class="home">
      <section class="home__block">
          test
          <p class="home__block__label">文案。。。</p>
          <van-button type="primary">默认按钮</van-button>
          <a class="" href="/gridcard"> gridcard</a>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created() {
      console.log(this.$route)
  },
  mounted() {
      this.$toast("文字大小异常")
  },
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
