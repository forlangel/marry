//app.js
var api = require('/api/api.js')
var AppId = 'wxd9a419b146ff9b1b'
var AppSecret = '7ce7ac57c371614ff851ffb93dfbb2b4'

App({
  onLaunch: function () {
  },
  getUserInfo: function (cb) {
    var that = this
    //调用登录接口，获取 code
    wx.login({
      success: function (res) {
        //发起网络请求
        wx.request({
          url: api.mobileIn,
          data: {
            appid: AppId,
            secret: AppSecret,
            code: res.code,
            grant_type: 'authorization_code'
          },
          header: {
            method: 'GET_OPENID'
          },
          method: 'GET',
          success: function (res) {
            // 将openId设成全局
            that.globalData.openId = res.data.openid
            console.log('res.data.openid', res.data.openid)
            that.globalData.flag = res.data.flag
            wx.getUserInfo({
              success: function (res) {
                // 将userInfo设成全局
                that.globalData.userInfo = res.userInfo
                // that.goHome()
                typeof cb == "function" && cb(that.globalData.userInfo, that.globalData.openId, that.globalData.user, that.globalData.flag)
              }
            })
          },
          fail: function (res) { },
          complete: function (res) {
            // that.goHome()
          }
        });
      }
    })
  },
  globalData: {
    userInfo: null,
    openId: null,
    user: null,
    flag: null
  }
})