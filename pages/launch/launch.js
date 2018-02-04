Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrlist: [{
      url: 'http://pic.iidingyun.com/file/2005/fj@3x.png',
      name: '张三',
      title: '经理',
      company: '北京艾迪超科技有限公司'

    }],
    arrdata: [
      {
        title: '建筑行业的同志们交流',
        type: '饭局',
        num: '500元/人',
        time: '2018-01-05  今天  18:00 ',
        address: '深圳南山'

      }
    ],
    imglist: [{
      url: 'http://pic.iidingyun.com/file/2005/fj@3x.png'
    }, {
      url: 'http://pic.iidingyun.com/file/2005/fj@3x.png'
    }, {
      url: 'http://pic.iidingyun.com/file/2005/fj@3x.png'
    }]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  invitation() {
    wx.navigateTo({
      url: '/pages/Invitation/Invitation'
    })
  }
  
})