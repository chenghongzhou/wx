Page({
  data: {
    arrlist: [{
      url: 'http://pic.iidingyun.com/file/2005/fj@3x.png',
      txt: '项目'
    }, {
      url: 'http://pic.iidingyun.com/file/2005/cj@3x.png',
      txt: '局'
    },
    {
      url: 'http://pic.iidingyun.com/file/2005/pd@3x.png',
      txt: '观点'
    }]
  },
  back() {
    console.log(111111)
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goto_dg() {
    wx.navigateTo({
      url: '/pages/viewpoint/viewpoint',
    })
  },
})