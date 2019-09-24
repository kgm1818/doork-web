<template>
  <div class="canvas-block">
      <div class="canvas-block__content">
          <canvas ref="canvas" width="500" height="600" style="background: lightyellow;"></canvas>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
    }
  },
  created(){
  },
  mounted(){
     let ctx = this.$refs.canvas.getContext('2d');

    //  // 绘制园
    //  ctx.beginPath();
    //  ctx.arc(100, 100, 100, 0, 2 * Math.PI);
    //  ctx.stroke();

    //  // 绘制半黑半白  默认为黑色
    //  ctx.beginPath();
    //  ctx.arc(100, 100, 100, 1.5 * Math.PI, 0.5 * Math.PI, true)
    //  ctx.fill();

    //  // 绘制一黑一白两个半圆
    //  ctx.fillStyle="white";
    //  ctx.beginPath();
    //  ctx.arc(100, 50, 50, 0, Math.PI*2);
    //  ctx.fill();

    //  ctx.fillStyle="black";
    //  ctx.beginPath();
    //  ctx.arc(100, 150, 50, 0, Math.PI*2);
    //  ctx.fill();

    //  // 绘制两个小园
    //  ctx.fillStyle = "black";
    //  ctx.beginPath();
    //  ctx.arc(100, 50, 20, 0, Math.PI * 2 );
    //  ctx.fill();

    //  ctx.fillStyle = "white";
    //  ctx.beginPath();
    //  ctx.arc(100, 150, 20, 0, Math.PI * 2 );
    //  ctx.fill();

     // 座位图
     ctx.lineWidth=2;
     ctx.strokeStyle="#999";
     ctx.beginPath();
     ctx.moveTo(200, 250);
     ctx.bezierCurveTo(195,242, 235, 242, 230, 250);
     ctx.stroke();

     // || 左边
    ctx.strokeStyle="#999";
    ctx.lineWidth=5;
    ctx.lineCap="round";
    ctx.beginPath();
    ctx.moveTo(200,250);
    ctx.lineTo(200,270);
    ctx.stroke();

    // 右边
    ctx.strokeStyle="#999";
    ctx.lineWidth=5;
    ctx.lineCap="round";
    ctx.beginPath();
    ctx.moveTo(230,250);
    ctx.lineTo(230,270);
    ctx.stroke();

    // 
    ctx.strokeStyle="#999";
    ctx.lineWidth=5;
    ctx.lineCap="round";
    ctx.beginPath();
    ctx.moveTo(200,270);
    ctx.lineTo(230,270);
    ctx.stroke();

    // 小园
    ctx.lineWidth=2;
     ctx.fillStyle = "#999";
     ctx.beginPath();
     ctx.arc(215, 252, 6, 0, Math.PI * 2 );
     ctx.stroke();
    // 底部半圆
    ctx.lineWidth=2;
    ctx.fillStyle = "#999";
     ctx.beginPath();
     ctx.arc(215, 266, 8, 0,  Math.PI * 1, Math.PI * 1 );
     ctx.stroke();
  }
}
</script>

<style scoped lang="scss">
    .canvas-block{
        &__content{
            width: 600px;
            height: 700px;
        }
    }
</style>
