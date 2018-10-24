<template>
    <div>
        <IndexHead/>
        <Swiper/>
        <div class="category-container">
            <div class="category-wrap">
                <a href="" class="cate-link">
                    <div class="img-box">
                        <img src="http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUxWAVCq7AAA1AYjHYo4689.png">
                    </div>
                    <p class="classify">演唱会</p>
                </a>
                <a href="" class="cate-link">
                    <div class="img-box">
                        <img src="http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyCATRKeAAAs7TXa0as743.png">
                    </div>
                    <p class="classify">音乐会</p>
                </a>
                <a href="" class="cate-link">
                    <div class="img-box">
                        <img src="http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyiAJYdkAAAznnkz53A336.png">
                    </div>
                    <p class="classify">舞台剧</p>
                </a>
                <a href="" class="cate-link">
                    <div class="img-box">
                        <img src="http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUzCANA78AAAuNmAUVOY761.png">
                    </div>
                    <p class="classify">音乐剧</p>
                </a>
                <a href="" class="cate-link">
                    <div class="img-box">
                        <img src="http://image.juooo.com/group1/M00/02/45/rAoKNVvFUzmASY4pAAAm76AQAHw370.png">
                    </div>
                    <p class="classify">儿童</p>
                </a>
            </div>
            <div class="module-wrap">
                <a class="item">
                    <img src="http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png">
                    <p class="item-txt">演出日历</p>
                </a>
                <a class="item">
                    <img src="http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png">
                    <p class="item-txt">聚特惠</p>
                </a>
                <a class="item">
                    <img src="http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png">
                    <p class="item-txt">学生专区</p>
                </a>
                <a class="item">
                    <img src="http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png">
                    <p class="item-txt">欢聚橙卡</p>
                </a>
            </div>
        </div>
        <List/>
    </div>
</template>
<script>
import IndexHead from '@/components/head/IndexHead.vue'
import Swiper from '@/pages/home/swiper.vue'
import List from '@/pages/home/List.vue'
export default {
    data(){
        return {

        }
    },
    components: {
        IndexHead,
        Swiper,
        List
    }
}
</script>
<style scoped lang="less">
.category-container{
    padding-top: 0.1rem;
    .category-wrap{
        display: flex;
        margin: 0 0.2rem;
        padding-bottom: 0.2rem;
        box-shadow: 0.05rem 0.1rem 0.1rem rgba(178, 178, 178, 0.1);
        .cate-link{
            flex: 1;
            text-align: center;
            .img-box{
                width: 1.05rem;
                height: 1.05rem;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .module-wrap{
        padding: 0.2rem;
        display: flex;
        .item{
            flex: 1;
            height: 1rem;
            margin-right: 0.1rem;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            &:last-child{
                margin-right: 0;
            }
            .item-txt{
                position: absolute;
                width: 100%;
                line-height: 1rem;
                color: #fff;
                text-align: center;
                left: 0;
                top: 0;
                font-size: 0.12rem;
                background: rgba(0,0,0,0.3);
                border-radius: 0.1rem;
            }
        }
    }
}
</style>

