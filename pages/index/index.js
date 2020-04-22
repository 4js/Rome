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
// import { newsList } from '../../mock/data'
import { getArticleAll } from '../../api/api.js'

Page({
  data: {
    articleList: [],
    searchText: '',
  },

  onShow() {
    getArticleAll({ "type": 2 }).then(res => {
      console.log(res)
      this.setData({
        articleList: res
      })
    })

    // let _this = this
    // setTimeout(function(){
    //   _this.setData({
    //     newsList: newsList.filter(item => item.type==='gz')
    //   })
    // }, 800)
  },

  changeSearchValue: function (e) {
    this.setData({
      searchText: e.detail.detail.value
    })
  },

  // 切换tab
  changeTab(e) {
    const keyList = ['gz', 'tj', 'rd', 'fp', 'zc', 'js']
    const currentKey = keyList[e.detail.name]
    const currentArr = newsList.filter(item => item.type === currentKey)
    this.setData({
      articleList: currentArr
    })
  },

  onShareAppMessage() {
    return {
      title: '农咨网',
      imageUrl: '/image/share.jpg'
    }
  },

})
