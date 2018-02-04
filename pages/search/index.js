Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  attached() {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 弹窗标题
    title: {
      type: Array,
      value: ['要闻', '项目', '用户']
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    // isShow: false
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    news: [
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' },
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' },
      { url: '../../static/img/newscount.png', title: '尤权受中共中央委托 向党外人士通报中央经济工作会议精神', author: '新华社', time: '2018-1-25' }
    ],
    things: [
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../img/thingsimg.png' }, { url: '../img/thingsimg.png' }] },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', title: '江南物流15000平方米仓储基地', text: '在成都三环--外环附件建设建筑1000m^3的标准仓库，总建筑面积11000m^3', time: '2018-1-25', imgUlr: [{ url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }, { url: '../../static/img/thingsimg.png' }] }
    ],
    users:[
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司'},
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司' },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司' },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司' },
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司' }
    ]    
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    swichNav: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    bindChange: function (e) {
      var that = this;
      that.setData({ currentTab: e.detail.current })
    },
    boxshow: function () {
      this.setData({
        show: 'show'
      })
    },
  }
})