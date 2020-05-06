/*
 * @Author: your name
 * @Date: 2020-03-26 14:15:37
 * @LastEditTime: 2020-03-28 12:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miniprogram\pages\index\index.js
 */
//index.js
//获取应用实例
const app = getApp()
import { getArticleAll } from '../../api/api.js'

Page({
  data: {
    tags: [{ title: "推荐" }, { title: "热点" }, { title: "扶贫" }, { title: "政策" }, { title: "技术" }],
    list: [],
    searchText: '',
    pageNum: 1,
    pageSize: 20,
    currentIndex: 0,
  },

  onLoad() {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onShow() {
    this.data.currentIndex = 1;
    this.loadData(this.data.currentIndex);
  },

  /**
   * 获取所有文章
   * @param {1推荐 2热点 3扶贫 4政策 5技术} type 
   */
  loadData: function (type) {
    getArticleAll({ type: type, page: this.data.pageNum, pageSize: this.data.pageSize }).then(res => {
      this.setData({
        list: res
      })
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 搜索框input事件 后期要加防抖
   * @param {*} e 
   */
  changeSearchValue: function (e) {
    this.setData({
      searchText: e.detail.detail.value
    })
  },

  /**
   * 切换tab
   * @param {*} e 
   */
  changeTab(e) {
    console.log(e)
    const currentIndex = e.detail.index + 1;
    this.data.currentIndex = currentIndex;
    this.loadData(currentIndex);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh---下拉动作");
    this.data.pageNum = 1;
    this.loadData(this.data.currentIndex);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom---上拉加载")
    this.data.pageNum += 1;
    this.loadData(this.data.currentIndex);
  },

  onShareAppMessage() {
    return {
      title: '农咨网',
      imageUrl: '/image/share.jpg'
    }
  },
})
