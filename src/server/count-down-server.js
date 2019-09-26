
export default class CountDown{
    constructor(timestamp){
        this.time = Number(timestamp); // timestamp毫秒
        this.timer = null;
    }
    initDealData(){
        if(this.time < 0){
            return []
        }
        let hours, minute, second; 
        hours = parseInt(this.time/1000/3600);
        minute = parseInt(this.time/1000/60%60);
        second = parseInt(this.time/1000%60);
        hours = hours > 9 ? hours: '0' + hours;
        minute = minute > 9 ? minute: '0' + minute;
        second = second > 9 ? second: '0' + second;
        return [hours, minute, second]
    }
    startDown(callback){ 
         this.timer = setInterval( () => {
             console.log(this.time, 'Just')
            this.time -= 1000;
            if(this.time < 0){
                clearInterval(this.timer)
                callback([])
                return 
            }
            const timeArr = this.initDealData()
            callback && callback(timeArr)
        }, 1000)
    }
    clearTimer(){
        console.log("clearInterval", this.timer)
        clearInterval(this.timer)
    }
}



