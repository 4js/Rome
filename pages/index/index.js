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
    list: [],
    searchText: '',
  },

  onShow() {
    getArticleAll({ type: 2 }).then(res => {
      this.setData({
        list: res
      })
    }).catch(err => {console.log(err)})

    // let _this = this
    // setTimeout(function(){
    //   _this.setData({
    //     newsList: newsList.filter(item => item.type==='gz')
    //   })
    // }, 800)
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
    // const keyList = ['gz', 'tj', 'rd', 'fp', 'zc', 'js']
    // const currentKey = keyList[e.detail.name]
    // const currentArr = newsList.filter(item => item.type === currentKey)
    // this.setData({
    //   list: currentArr
    // })
  },

  onShareAppMessage() {
    return {
      title: '农咨网',
      imageUrl: '/image/share.jpg'
    }
  },

})
