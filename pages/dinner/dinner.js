//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arrlists: [{
      label: '饭局',
      title: '建筑行业同事交流会',
      address: '深圳南山',
      time: '今天',
      num: '500/人',
      people: '5人',
      times: '12:23'
    },
    {
      label: '饭局',
      title: '建筑行业同事交流会',
      address: '深圳南山',
      time: '今天',
      num: '500/人',
      people: '5人',
      times: '12:23'
    },
    {
      label: '饭局',
      title: '建筑行业同事交流会',
      address: '深圳南山',
      time: '今天',
      num: '500/人',
      people: '5人',
      times: '12:23'
    }]
  },
  goto_other(ev) {
    let index = ev.currentTarget.dataset.index
    if (index === 0) {
      wx.navigateTo({
        url: '/pages/apply/apply'
      })
    } else {
      wx.navigateTo({
        url: '/pages/launch/launch'
      })
    }
  }
})
