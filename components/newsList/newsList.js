/*
 * @Author: your name
 * @Date: 2020-03-28 12:02:04
 * @LastEditTime: 2020-03-28 13:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Rome\components\news-list\news-list.js
 */
// components/news-list/news-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 数组列表
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: true
  },

  observers: {
    'list': function (newval) {
      console.log(newval)
      // 监听传参 如果有列表去除loading
      newval.length && this.setData({
        loading: false
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
