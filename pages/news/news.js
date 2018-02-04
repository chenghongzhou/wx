Page({
  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    title: ['时政要闻', '全联要闻', '非公要闻'],
    // 时政
    politicsNew: [
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      }
    ],
    // 全连
    completeNews: [
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      },
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      }
    ],
    // 非公
    noePublicNews: [
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      },
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      },
      {
        url: '/static/img/cc.jpg',
        title: '这是一段很长很长的文字这是一段很长很长的文字',
        name: '新华社',
        time: '2017-12-12'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
  },

  // 调整详情
  gotoDetails: function () {
    wx.navigateTo({
      url: '../newsDetails/detail'
    })
  }


})