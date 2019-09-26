// 公共方法  Lodash库

/*  时间戳转日期 
 *  @params {startTime} 毫秒
 *  @params {endTime}
 */

 // 时区转换
function getDateWithTimeZone(targetTimeZoneTimestamp, targetTimeZone) {
    const utcTimeZone = 0;
    let currentTimeZoneDate = new Date(targetTimeZoneTimestamp);
    let currentTimeZoneOffset = currentTimeZoneDate.getTimezoneOffset();
    let targetTimeZoneOffset = (utcTimeZone - targetTimeZone) * 60
    if (currentTimeZoneOffset === targetTimeZoneOffset) {
        return currentTimeZoneDate
    } else {
        let utcTimeZoneTimestamp = targetTimeZoneTimestamp + (currentTimeZoneOffset * 60 * 1000)
        let currentTimeZoneTimestamp = utcTimeZoneTimestamp + (targetTimeZone * 60 * 60 * 1000)
        return new Date(currentTimeZoneTimestamp)
    }
}

function getMonthWithZero(date) {
    let month = date.getMonth() + 1;
    return month < 10 ? '0' + month : month;
}

function getWeek(date) {
    switch (date.getDay()) {
        case 0:
            return "周日";
        case 1:
            return "周一";
        case 2:
            return "周二"
        case 3:
            return "周三"
        case 4:
            return "周四"
        case 5:
            return "周五";
        case 6:
            return "周六"
        default:
            return "";
    }
}

function getDayWithZero(date) {
    let day = date.getDate();
    return day < 10 ? '0' + day : day;
}

function getHourWithZero(date) {
    let hour = date.getHours();
    return hour < 10 ? '0' + hour : hour;
}

function getMinuteWithZero(date) {
    let minute = date.getMinutes();
    return minute < 10 ? '0' + minute : minute;
}


export function getDateWeek(startTime, endTime){
    let startDate = getDateWithTimeZone(startTime, 8);
    let endDate = getDateWithTimeZone(endTime, 8);

    let startYear = startDate.getFullYear();
    let startMonth = getMonthWithZero(startDate);
    let startDay = getDayWithZero(startDate);
    let startWeek = getWeek(startDate);

    let endYear = endDate.getFullYear();
    let endMonth = getMonthWithZero(endDate);
    let endDay = getDayWithZero(endDate);

    if (startTime === endTime) {
        return {
            date: `${startMonth}/${startDay}`,
            week: startWeek,
        }
    }
    if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
        return {
            date: `${startMonth}/${startDay}`,
            week: startWeek,
        }
    }
    if(startYear === endYear && startMonth === endMonth){
        return {
            date: `${startMonth}/${startDay} - ${endMonth}/${endDay}`,
        }
    }
    if (startYear === endYear) {
        return {
            date: `${startMonth}/${startDay} - ${endMonth}/${endDay}`,  
        }
    }
    return {
        date: `${startYear}/${startMonth}/${startDay} - ${endYear}/${endMonth}/${endDay}`,
    }
}

/*
 *  解决iOS调出输入法后页面不回退的兼容问题
 *  
 */
export function temporaryRepair(){ 
    let currentPosition, timer;
    let speed = 1;
    timer = setInterval(function (){
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= speed;
        window.scrollTo(0,currentPosition);
        currentPosition += speed;
        window.scrollTo(0, currentPosition);
        clearInterval(timer);
    }, 1);
}

/**
 * 数组随机排序
 * Date: 2019/9/25
 * 
 * */

export function shuffle(data) {
    let _data = [...data];
    let len = _data.length;
    let end = len - 1 ;
    for(let i=0; i<len; i++){
        let index = Math.floor(Math.random() * len);
        let temp = _data[end];
        _data[end] = _data[index];
        _data[index] =temp;
    }
    return _data;
 }

 /**
 * 倒计时
 * Date: 2019/9/25
 * 
 * */
