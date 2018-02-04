//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:'hide'
        },
  searchgo: function () {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
})