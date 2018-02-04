//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',text:'中央经济会议在北京召开  习近平作重要讲话'},
      { url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', text: '中央经济会议在北京召开  习近平作重要讲话'},
      { url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', text: '中央经济会议在北京召开  习近平作重要讲话'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    news:[
      { url: '../../static/img/newscount.png', title:'尤权受中共中央委托 向党外人士通报中央经济工作会议精神',author:'新华社',time:'2018-1-25'},
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' },
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' }
    ],
    things:[
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../img/thingsimg.png' }, { url: '../img/thingsimg.png' }] },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }] }
    ],
    show:'hide'
  },
  boxshow:function(){
    this.setData({
      show:'show'
    })
  },
  onLoad(){

  }
})
