//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    things: [
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', text: '江南物流15000平方米仓储基地在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1',time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../img/thingsimg.png' }, { url: '../img/thingsimg.png' }] },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', text: '江南物流15000平方米仓储基地在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../img/thingsimg.png' }, { url: '../img/thingsimg.png' }] },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', text: '江南物流15000平方米仓储基地在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积1', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }] },
     
    ]
  },
  goviewDetail() {
    wx: wx.navigateTo({
      url: '/pages/viewpointDetails/viewpointDetails',
    })
  }
})
