Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司',isChecked:true,isFree:true,eare:'上海'},
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', isChecked: true, isFree: true, eare: '上海'},
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', isChecked: true, isFree: true, eare: '上海'},
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', isChecked: true, isFree: true, eare: '上海'},
      { url: '../../static/img/who.png', name: '张三', position: '董事长', company: '北京艾迪超可以寄有限公司', isChecked: true, isFree: false, eare: '上海'}
    ] ,
  },
  checkIs(e){
    let off = this.data.lists
    let t = e.currentTarget.id
      var that=this
      if (that.data.lists[t].isChecked==true){
        that.data.lists[t].isChecked=false
        this.setData({
          lists:that.data.lists
        })
        console.log(that.data.lists)
    }else{
        that.data.lists[t].isChecked = true
        this.setData({
          lists: that.data.lists
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */















})