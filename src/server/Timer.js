export default class Timer {
    /**
     * @params {timestamp}, 时间戳
     * @params {temp}, 1000毫秒或100毫秒秒制
     * @params {way} 倒计时以天开始或小时开始
    */
    
    constructor(timestamp, temp, way){
        this.timestamp = timestamp || 0;
        this.temp = temp || 1000;
        this.way = way || "hour";
        this.setIntervalArr = [];
    }
    getDay(){
        let day = parseInt(this.timestamp/1000/3600/24);
        return day
    }
    getHour(){
        let hour = parseInt((this.timestamp/1000/3600))
        hour = hour > 9? hour: '0' + hour;
        return hour
    }
    getDayHour(){
        let hour = parseInt((this.timestamp/1000/3600)%24)
        hour = hour > 9? hour: '0' + hour;
        return hour
    }
    getMinute(){
        let minute = parseInt((this.timestamp/1000/60)%60);
        minute = minute > 9? minute: '0' + minute;
        return minute
    }
    getSecond(){
        let second = parseInt((this.timestamp/1000)%60);
        second = second > 9? second: '0' + second;
        return second
    }
    getMinSecond(){ // 100毫秒
        let minSecond = parseInt((this.timestamp%1000)/100);
        return minSecond
    }
    getHourMinuteSecondMin(callback){
        let minSecond = this.getMinSecond();
        let timer = setInterval( () => {
            this.timestamp -= this.temp;
            minSecond -= 1;
            if(minSecond < 0){
                minSecond = 9;
            }
            if(this.timestamp < 0){
                clearInterval(timer)
                return
            }
            const { hour, minute, second } = this.getCommonTime()
            callback && callback({
                hour,
                minute,
                second,
                minSecond,
                timestamp: this.timestamp
            })
        }, this.temp)
        this.setIntervalArr.push(timer)
    }
    getHourMinuteSecond(callback){
        let timer = setInterval( () => {
            this.timestamp -= this.temp;
            if(this.timestamp < 0){
                clearInterval(timer)
                return
            }
            const { day, hour, minute, second } = this.getCommonTime()
            callback && callback({ 
                day,  
                hour,
                minute,
                second,
                timestamp: this.timestamp
            })
        }, this.temp)
        this.setIntervalArr.push(timer)
    }
    getCommonTime(){
        let day = 0, hour;
        if (this.way === "day"){
            day = this.getDay()
            hour = this.getDayHour()
        } else {
            hour = this.getHour()
        }
        let minute = this.getMinute()
        let second = this.getSecond()
        return {day, hour, minute, second}
    }
    removeInterval(){
        this.setIntervalArr.map( item => {
            clearInterval(item)
        })
    }
}