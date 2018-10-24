<template>
    <div>
        <Carousel
            v-model="value3"
            height="3.1rem"
            :loop="setting.loop"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :radius-dot="setting.radiusDot"
            :trigger="setting.trigger"
            :arrow="setting.arrow">
            <CarouselItem v-for="item in swiperImgs">
                <div class="demo-carousel"><img :src="item.imgurl" /></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value3: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                loop: true,
                dots: 'inside',
                radiusDot: true,
                trigger: 'click',
                arrow: 'never'
            },
            swiperImgs: []
        }
    },
    created() {
        this.swiperImgs =  [
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKmVuvXEyAensRAAG7syzxKIw879.df8a4fb.jpg"
                },
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKmVuwQVqABJ9-AADDMQnaVlM331.120e86c.jpg"
                },
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKmVvFlmiAbXfXAAGUzPru1mY596.3ae16ff.jpg"
                },
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKmVvH9W2AF5MkAAHgoVCdtrc354.d6234d9.jpg"
                },
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKNVu8STOARls6AAGyY6SDsEY972.80ae137.jpg"
                },
                {
                    id: "90902",
                    imgurl: "/static/img/rAoKNVvEVZ2ALq2rAAC6Vr4fBD0972.9616792.jpg"
                }
            ]
    },
}
</script>
<style scoped lang='less'>
/deep/.ivu-carousel{
    /deep/.demo-carousel{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

