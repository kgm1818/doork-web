<template>
    <div class="seat-map">
        <div class="seat-map__content" ref="seatMap">
            <canvas 
             id="seat-map"
             width="2000" 
             height="2000"
             style="{width: 500px, height: 500px}">

            </canvas>
        </div>
    </div>
</template>
<script>
const seatSize = 10;
export default {
    data(){
        return {
            
            seatMapPoint: [{
                x: 10,
                y: 10
            },{
                x: 35,
                y: 15
            },{
                x: 60,
                y: 20
            },{
                x: 85,
                y: 25
            },{
                x: 110,
                y: 30
            }]
        }
    },
    mounted(){
        var canvas =document.getElementById("seat-map");
        var context = canvas.getContext("2d");
        
        this.seatMapPoint.forEach(point => {
            console.log(point)
            context.beginPath();
            context.arc(point.x, point.y, seatSize, 0, 2 * Math.PI);
            context.fillStyle="red";
            context.fill();
        });
        this.$refs.seatMap.addEventListener('click', this.selectSeat)
    },
    methods: {
        selectSeat(event){
            console.log(event)
        }
    },
}
</script>
<style lang="scss">
    .seat-map{
        width: 100%;
        height:100%;
        &__content{

        }
    }
</style>