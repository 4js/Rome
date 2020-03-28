// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 关闭弹出层
   */
  onClose(){
    this.setData({
      show: false
    })
  },

  /**
   * 显示分享弹出层
   */
  showShare(){
    this.setData({
      show: true
    })
  }
})