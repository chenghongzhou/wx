// pages/me/me.js
Page({
  data: {

  },
  goto_personCenter() {
    wx.navigateTo({
      url: "/pages/personCenter/personCenter",
    })
  },
  goto_gd() {
    wx.navigateTo({
      url: "/pages/viewpoint/viewpoint",
    })
  },
  projects() {
    wx.navigateTo({
      url: '/pages/project/project',
    })
  },
  goto_gz() {
    wx.navigateTo({
      url: '/pages/follow/follow',
    })
  },
  goto_fj() {
    wx.navigateTo({
      url: '/pages/dinner/dinner',
    })
  }
})