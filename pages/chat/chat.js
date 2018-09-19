// pages/bless/index.js
var api = require('../../api/api.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    inputValue: '',
    zanNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    }),
      that.getCommentList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    that.getPraiseList(),
      that.getCommentList()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  // 获取评论列表
  getCommentList: function () {
    var that = this
    wx.request({
      url: api.mobileIn,
      method: 'GET',
      data: {},
      header: { method: 'GET_COMMENT' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          chatList: res.data
        });
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })

  },
  bindgetuserinfo: function (e) {
    console.log(e.detail.userInfo)
    var that = this;
    if (e.detail.userInfo) {
      wx.setStorageSync('userInfo', e.detail.userInfo)
      that.setData({
        userInfo: e.detail.userInfo,
        authBtn: false
      })
      console.log(1, e.detail.userInfo)
      //that.foo()

    } else {
      wx.showToast({
        title: "为了您更好的体验,请先同意授权",
        icon: 'none',
        duration: 2000
      });
    }
  },
  foo: function () {
    var that = this;
    if (that.data.inputValue) {
      //留言内容不是空值

      var userInfo = that.data.userInfo;
      var name = userInfo.nickName;
      var face = userInfo.avatarUrl;
      var words = that.data.inputValue;
      wx.request({
        url: api.mobileIn,
        data: { 'nickName': name, 'nickImage': face, 'comment': words, 'openId': app.globalData.openId },
        header: { method: 'SAVE_COMMENT' },
        method: "GET",
        dataType: "json",
        success: res => {
          if (200 == res.statusCode) {
            console.log(res.data)
            that.getCommentList()
            wx.showModal({
              title: '提示',
              content: res.data,
              showCancel: false
            })
          }
        }
      })
    } else {
      //Catch Error
      wx.showModal({
        title: '提示',
        content: '您还没有填写内容',
        showCancel: false
      })
    }
    that.setData({
      inputValue: ''//将data的inputValue清空
    });
    return;
  }
})