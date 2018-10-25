<template>
    <div class="show-list-main">
        <section class="show-list vocal-concert">
            <div class="title-head clearfix">
                <strong class="title">演唱会</strong>
                <span class="more">
                    更多
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="10">
                        <polyline points="0,0 8,5 0,10"
                        style="fill:white;stroke:currentColor;stroke-width:1"/>
                    </svg>
                </span>
            </div>
           <div class="banner-wrap">
               <div class="banner">
                   <img src="/static/img/rAoKmVuwQVqABJ9-AADDMQnaVlM331.120e86c.jpg" />
                   <div class="bg"></div>
                    <div class="address">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="110" height="30">
                            <polygon points="0,0 110,0 100,30 0,30"
                                style="fill:red;
                                stroke:red;stroke-width:1"/>
                        </svg>
                        <span class="all-watch">深圳.大家都在看</span>
                    </div>
                    <div class="flow">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="10">
                            <ellipse cx="7" cy="5" rx="7" ry="5"
                                style="fill:rgba(225, 225, 225, 1);
                                stroke:#fff;stroke-width:0"/>
                        </svg>
                        <span class="dot"></span>
                        <span class="flow-num">48.1万</span>
                    </div>
                    <div class="barrage-wrap">
                        <ul class="barrage">
                            <li>
                                <img src="../../assets/head.png" />
                                <span>回归初心，巡演开启</span>
                            </li><br />
                            <li>
                                <img src="../../assets/head.png" />
                                <span>回归初心，巡演开启</span>
                            </li><br />
                            <li>
                                <img src="../../assets/head.png" />
                                <span>回归初心，巡演开启</span>
                            </li>
                        </ul>
                    </div>
               </div>
           </div>
        </section>

    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        created() {
            

        },
        mounted() {
            let $barrage = document.querySelector(".barrage");
            // setInterval(function (){
               
                $barrage.style.top = $barrage.offsetTop - 5 + 'px';
            // },500)

         },
    }
</script>
<style scoped lang="less">
    .show-list-main{
        padding: 0.2rem;
    }
    .show-list{
        .title{
            float: left;
            font-size: 0.3rem;
        }
        .more{
            float: right;
            color: #b2b2b2;
        }
    }
    .banner-wrap{

        .banner{
            width: 100%;
            height: 4rem;
            position: relative;
            background: rgba(0,0,0,0.1);
            img{
                width: 100%;
                height: 100%;
            }
            .address,.flow{
                position: absolute;
                top: 0;
            }
            .address{
                left: 0;
                .all-watch{
                    position: absolute;
                    height: 30px;
                    width: 100%;
                    text-align: center;
                    line-height: 30px;
                    color: #fff;
                    left: 0;
                    top: 0;
                    font-size: 0.12rem;
                }
            }
            .flow{
                top: 0.05rem;
                right: 0.1rem;
                .flow-num{
                    color: #fff;
                }
                .dot{
                   position: absolute;
                   width: 5px;
                   height: 5px;
                   border-radius: 50%;
                   border: 1px solid rgba(0,0,0,0.3); 
                   top: 6px;
                   left: 5px;
                }
            }
            .bg{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.2);
            }
            .barrage-wrap{
                position: absolute;
                left: 0.3rem;
                top: 1.2rem;
                border: 1px solid lightcoral;
                height: 1.86rem;
                overflow: hidden;
                width: 100%;
            }
            .barrage{
                position: absolute;
                left: 0;
                top: 0;
                li{
                    padding: 0.05rem 0.15rem 0.05rem 0.10rem;
                    overflow: hidden;
                    background: #999;
                    border-radius: 5px;
                    display: inline-block;
                    margin-bottom: 0.05rem;
                    img{
                        float: left;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                    }
                    span{
                        display: inline-block;
                        margin-left: 0.2rem;
                       float: left;
                       line-height: 0.4rem;
                       color: #fff;
                       font-size: 0.12rem;
                    }
                }
            }
        }
        
    }
</style>
