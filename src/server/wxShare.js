// 微信分享功能
// https://res.wx.qq.com/open/js/jweixin-1.0.0.js
const wxShare = {
    init(){
        this.loadScript("https://res.wx.qq.com/open/js/jweixin-1.0.0.js")
    },
    loadScript(url){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    },
    wxConfig($appId, $timestamp, $noncestr, $signature){
        wx.config({
            defug: false,
            appId: $appId,
            timestamp: $timestamp,
            nonceStr: $noncestr,
            signature: $signature,
            // 所有要调用的 API 都要加到这个列表中
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'],
        })
    },
    isShare($title, $desc, $imgUrl, $link, sussCallback, canCallback){
        wx.ready(function (){
            // **微信分享的数据**
            const shareData = {
                title: $title, // 分享标题
                desc: $desc, // 分享描述
                imgUrl: $imgUrl, // 分享图标
                link: $link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                type: "", // 分享类型,music、video或link，不填默认为link
                dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
                success: function (){
                    // 分享成功可以做相应的数据处理
                    console.log("success share")
                    sussCallback && sussCallback()
                },
                cancel: function (){
                    // 取消分享
                    console.log("cancel share")
                    canCallback && canCallback()
                }
            }
            // 分享微信朋友圈
            wx.onMenuShareTimeline (shareData);
            // 分享给朋友
            wx.onMenuShareAppMessage(shareData);
            // 分享到qq
            wx.onMenuShareQQ (shareData);
            // 分享到微博
            wx.onMenuShareWeibo (shareData);
            // 分享到qq空间
            wx.onMenuShareQZone(shareData);
        })
    },
    isShareErr(){

    },
}
// **配置微信信息**
wx.config({
    defug: false,
    appId: "",
    timestamp: "",
    nonceStr: "",
    signature: "",
    // 所有要调用的 API 都要加到这个列表中
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'],
})

wx.ready(function (){
    // **微信分享的数据**
    const shareData = {
        title: "", // 分享标题
        desc: "", // 分享描述
        imgUrl: "", // 分享图标
        link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        type: "", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        success: function (){
            // 分享成功可以做相应的数据处理
        }
    }
    // 分享微信朋友圈
    wx.onMenuShareTimeline (shareData);
    // 分享给朋友
    wx.onMenuShareAppMessage(shareData);
    // 分享到qq
    wx.onMenuShareQQ (shareData);
    // 分享到微博
    wx.onMenuShareWeibo (shareData);
    // 分享到qq空间
    wx.onMenuShareQZone(shareData);
})

wx.error(function (){
    // config信息验证失败会执行error函数，如签名过期导致验证失败，
    // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
    //对于SPA可以在这里更新签名。 
    console.log("好像出错了！！");
 })

export default wxShare