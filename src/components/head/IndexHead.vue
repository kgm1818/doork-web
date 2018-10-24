<template>
    <div class="clearfix head-search">
        <div class="address-wrap">
            <img src="../../assets/location.png">
            <span class="address">深圳</span>
        </div>
        <div class="search">
            <Input suffix="ios-search" placeholder="搜索演出,艺人或场馆" style="width: auto" />
        </div>
    </div>
</template>
<script></script>
<style scoped lang='less'>
.head-search{
    padding: 0.1rem;
}
.address-wrap{
    float: left;
    width: 1.5rem;
    display: flex;
    height: 0.6rem;
    align-items: center;
    img{
        transform: scale(0.5);
    }
}
.search{
    float: left;
}
/deep/.ivu-input-suffix{
    left: 0;
}
/deep/.ivu-input{
    padding-left: 0.7rem;
    padding-right: 0.1rem;
    width: 5.3rem;
    background: #f0f0f0;
    height: 0.6rem;
}
   
</style>
