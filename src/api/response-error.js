// 请求错误（异常）处理
class ResponseError {
    constructor(code, msg){
        this.code = code !== undefined || -1;
        this.msg = msg || "网络不给力，请稍后重试";
    }
}