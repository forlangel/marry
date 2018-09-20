// pages/home/gridview/gridview.js 
var id = ''
//为方便查看数据格式，写死在这里，后续可接口返回
var imgUrlOzfq = [
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3291.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3296.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3319.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3245.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3255.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3263.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3165.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3167.JPG'
]
var imgUrlHuahai = [
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0893.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0899.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0885.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0895.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0888.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/HY2A0889.JPG'
]
var imgUrlFhjr = [
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3449.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3666.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3681.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3682.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3685.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3699.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3682.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3704.JPG'
]
var imgUrlDqdy = [
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3337.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3647.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3631.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3611.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3753.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3755.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3799.JPG'
]
var imgUrlGwtx = [
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3356.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3360.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3376.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3391.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3395.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3404.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3406.JPG'
]
var imgUrlLyxz = [
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3225.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3230.JPG',
  'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3237.JPG'
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /** 
   * 预览图片
   */
  previewImage: function(e) {
    var current = e.target.dataset.src;
    if (id == '欧洲风情'){
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrlOzfq // 需要预览的图片http链接列表
      })
    } else if (id == '粉色浪漫') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrlFhjr // 需要预览的图片http链接列表
      })
    } else if (id == '大气典雅') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrlDqdy // 需要预览的图片http链接列表
      })
    } else if (id == '逗比特写') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrlGwtx // 需要预览的图片http链接列表
      })
    } else if (id == '绿野仙踪') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrlLyxz // 需要预览的图片http链接列表
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    id = options.id
    console.log('options.id:' + options.id)
    if (id == '欧洲风情') {
      that.setData({
        imgUrls: [{
          imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3291.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3296.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3319.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3245.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3255.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3263.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3165.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3167.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3169.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          }
        ]
      });
    }else if (id == '粉色浪漫') {
      that.setData({
        imgUrls: [{
          imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3449.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3666.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3681.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3685.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3699.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3682.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3704.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          }
        ]
      });
    } else if (id == '大气典雅') {
      that.setData({
        imgUrls: [{
          imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3337.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3647.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3631.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3611.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3753.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3755.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3799.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          }
        ]
      });
    } else if (id == '逗比特写') {
      that.setData({
        imgUrls: [{
          imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3356.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3360.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3376.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3391.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3395.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3404.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3406.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          }
        ]
      });
    } else if (id == '绿野仙踪') {
      that.setData({
        imgUrls: [{
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3225.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3230.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          },
          {
            imgUrl: 'https://www.forlangel.cn/party/wechat/marry/picture/LCH_3237.JPG',
            desc: '不管你走在哪里我都会站在你看得见的地方如果有委屈有过错只要你回头我始终站在你的身后'
          }
        ]
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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

  }
})