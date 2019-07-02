<template>
  <div class="home">
      <section class="home__block">
          test
          <p class="home__block__label">文案。。。</p>
      </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
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
