Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  attached() {
    var that = this;
    console.log(this.properties.isModel)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight - that.properties.isModel + 'px'
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
      value: ['标题一', '标题二', '标题三']
    },
    isModel: {
      type: Number,
      value: 31
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
    winHeight: 0
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
  }
})