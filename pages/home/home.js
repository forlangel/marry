var api = require('../../api/api.js')
var app = getApp()
//数据可用接口返回 - 在此展示只是为了方便查看数据体
Page({
  data: {
    imgUrls: [
      {
        imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3279.JPG',
        type: '欧洲风情'
      },
      {
        imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3664.JPG',
        type: '粉色浪漫'
      },      
      {
        imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3220.JPG',
        type: '绿野仙踪'
      },
      {
        imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3335.JPG',
        type: '大气典雅'
      },
      {
        imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3359.JPG',
        type: '逗比特写'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2600,
    duration: 1200,
    //item_image
    item_one_image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    userInfo: {},
    isPlayingMusic: true,
    music_url: "http://111.202.85.146/amobile.music.tc.qq.com/C400000b2FOH08rJZ4.m4a?guid=3604957086&vkey=23B8EE9CD729269EF29C2A2D7F1A53161F51BF83C4B66E52BFB863024450D34CCAD34F1EA6E83AB487E0DD7E5247A53AA6F9D35C41531D4A&uin=0&fromtag=66"
  },
  //生命周期函数--监听页面加载
  onLoad: function() {
    var that = this
    wx.playBackgroundAudio({
      dataUrl: "http://111.202.85.146/amobile.music.tc.qq.com/C400000b2FOH08rJZ4.m4a?guid=3604957086&vkey=23B8EE9CD729269EF29C2A2D7F1A53161F51BF83C4B66E52BFB863024450D34CCAD34F1EA6E83AB487E0DD7E5247A53AA6F9D35C41531D4A&uin=0&fromtag=66",
      title: '',
      coverImgUrl: ''
    }),
      that.getWxUserInfo()

  },
  getWxUserInfo: function(){
    var that = this
    wx.getUserInfo({
      success: function (res) {
        that.saveUser(app.globalData.openId, res.userInfo)
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    //that.getImageList()

  },
  // 每条List点击事件
  jump: function(e) {
    let id = e.currentTarget.dataset.id
    console.debug(id)
    console.log("id:", id)
    wx.navigateTo({
      url: 'gridview/gridview?id=' + id,
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  //保存用户信息
  saveUser: function (openId,userInfo){
    console.log('userInfo',userInfo)
    wx.request({
      url: api.mobileIn,
      method: 'GET',
      header: {
        method: 'SAVE_USER',
      },
      data: {
        openId: openId,
        userInfo: userInfo

      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 获取图片
  getImageList: function() {
    var that = this
    wx.request({
      url: api.mobileIn,
      method: 'GET',
      header: {
        method: 'GET_IMAGE',
      },
      data: {
        homeType: 'banner'

      },
      success: function(res) {
        wx.hideToast()
        if (200 == res.statusCode) {
          if (res.data.length >= 1) {
            console.log(res.data)
            //更新数据
            that.setData({
              // imgUrls: res.data
            })
          }
        }
      },
    })
  },
  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      console.log('this.data.music_url', this.data.music_url)
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})