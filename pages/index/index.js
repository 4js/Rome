/*
 * @Author: your name
 * @Date: 2020-03-26 14:15:37
 * @LastEditTime: 2020-03-26 18:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miniprogram\pages\index\index.js
 */
//index.js
//获取应用实例
const app = getApp()
import { newsList } from '../../mock/data'

Page({
  data: {
    newsList: 6,
    loading: true,
    searchText: '',
  },
  onShow(){
    let _this = this
    setTimeout(function(){
      _this.setData({
        loading: false,
        newsList: newsList.filter(item => item.type==='gz')
      })
    }, 800)
  },

  handleChange ({ detail }) {
    this.setData({
      current: detail.key
    });
  },

  changeSearchValue: function(e){
    this.setData({
      searchText: e.detail.detail.value
    })
  },

  // 切换tab
  changeTab(e){
    const keyList = ['gz','tj','rd','fp','zc','js']
    const currentKey = keyList[e.detail.name]
    const currentArr = newsList.filter(item => item.type===currentKey)
    this.setData({
      newsList: currentArr
    })
  },

  onShareAppMessage(){
    return {
      title: '农咨网',
      imageUrl: '/image/share.jpg' 
    }
  },

  onClick(){

  },

  onChange(){

  },

  onSearch(){
    
  }

})
