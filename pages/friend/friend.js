//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      { url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', text: '中央经济会议在北京召开  习近平作重要讲话' },
      { url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', text: '中央经济会议在北京召开  习近平作重要讲话' },
      { url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', text: '中央经济会议在北京召开  习近平作重要讲话' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    news: [
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' },
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' },
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' }
    ],
    things: [
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../img/thingsimg.png' }, { url: '../img/thingsimg.png' }], num1: '111', num2: '2222' },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }], num1: '111', num2: '2222'}
    ],
    show: 'hide',
    arrlist: [{
      url:'http://pic.iidingyun.com/file/2005/fj@3x.png',
      txt:'饭局'
    }, {
        url: 'http://pic.iidingyun.com/file/2005/cj@3x.png',
      txt: '茶局'
    },
    {
      url: 'http://pic.iidingyun.com/file/2005/pd@3x.png',
      txt: '派对'
    }, {
      url: 'http://pic.iidingyun.com/file/2005/sl@3x.png',
      txt: '沙龙'
    }],
    list: [
      {
        url: '/static/img/thingsimg.png',
        name: '张三',
        title: '北京艾迪超科技有限公司'
      },
      {
        url: '/static/img/thingsimg.png',
        name: '张三',
        title: '北京艾迪超科技有限公司'
      },
      {
        url: '/static/img/thingsimg.png',
        name: '张三',
        title: '北京艾迪超科技有限公司'
      }
    ],
    arrlists:[{
      label:'饭局',
      title:'建筑行业同事交流会',
      address:'深圳南山',
      time:'今天',
      num:'500/人',
      people:'5人',
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
  boxshow: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  goto_fj() {
    wx.navigateTo({
      url: '/pages/dinner/dinner',
    })
  },
  projects() {
    wx.navigateTo({
      url: '/pages/follow/follow',
    })
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
  },
  goPersonal() {
    wx.navigateTo({
      url: '/pages/personCenter/personCenter',
    })
  },
  goProjectDetail() {
    wx.navigateTo({
      url: '/pages/projectDetails/projectDetails',
    })
  }
})
