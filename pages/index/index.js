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
  },

  onShow() {
     this.loadData(1);
  },

  loadData:function(type){
    getArticleAll({ type: type }).then(res => {
      this.setData({
        list: res
      })
    })
  },

  // 搜索框input事件 后期要加防抖
  changeSearchValue: function (e) {
    this.setData({
      searchText: e.detail.detail.value
    })
  },

  // 切换tab
  changeTab(e) {
    console.log(e)
    const currentIndex = keyList[e.detail.index];
    this.loadData(currentIndex);
  },

  onShareAppMessage() {
    return {
      title: '农咨网',
      imageUrl: '/image/share.jpg'
    }
  },

})
