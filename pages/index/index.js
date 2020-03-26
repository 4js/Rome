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

const ARR = [
  {
    title: '从上海到泸溪兴隆场，她的蜂蜜刷屏了朋友圈！',
    author: '玉伯',
    read: 125,
    time: '10分钟前'
  },
  {
    title: '逆向奔跑者陈艳玲：返乡创业打造新邵农业生态新名片',
    author: '艳玲',
    img: 'https://image.cnhnb.com/image/png/miniapp/2020/03/18/906f8c9ffd294bd1904440c7c5077e34.png',
    read: 9525,
    time: '1小时前'
  },
  {
    title: '农村6旬老农山林种砂仁，通过卖砂仁卖苗年挣40万！',
    author: '老农',
    img: 'https://image.cnhnb.com/image/png/miniapp/2020/02/19/7152c9f846b34188bd09def5cdbe878e.png',
    read: 65253,
    time: '2小时前'
  },
  {
    title: '他专心养鱼，第一年就卖了18万元！',
    author: '虫鸣',
    read: 25253,
    time: '3小时前'
  },
  {
    title: '这位书记不简单，他用一颗小小葡萄撑起了一条产业链！',
    author: '皓诚',
    img: 'https://image.cnhnb.com/image/jpg/miniapp/2020/03/25/066ec18210bb4c718515266a641b8e59.jpg',
    read: 56894,
    time: '4小时前'
  },
  {
    title: '特别推荐丨从“门外汉”到电商能人，她奏响了电商致富曲',
    author: '玉伯',
    img: 'https://image.cnhnb.com/image/jpg/miniapp/2020/01/13/29882ea72671404cb97bdae1918a97cf.jpg',
    read: 125,
    time: '1天前'
  },
  {
    title: '他专心养鱼，第一年就卖了18万元！',
    author: '邵恒',
    read: 562,
    time: '2小时前'
  },
  {
    title: '他专心养鱼，第一年就卖了18万元！',
    author: '马越',
    read: 956,
    time: '5小时前'
  },
  {
    title: '逆向奔跑者陈艳玲：返乡创业打造新邵农业生态新名片',
    author: '艳玲',
    img: 'https://image.cnhnb.com/image/png/miniapp/2020/03/18/906f8c9ffd294bd1904440c7c5077e34.png',
    read: 136,
    time: '8小时前'
  },
  {
    title: '农村6旬老农山林种砂仁，通过卖砂仁卖苗年挣40万！',
    author: '黄磊',
    img: 'https://image.cnhnb.com/image/png/miniapp/2020/02/19/7152c9f846b34188bd09def5cdbe878e.png',
    read: 69853,
    time: '16小时前'
  },
]

Page({
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    newsList: 6,
    loading: true,
    searchText: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow(){
    let _this = this
    setTimeout(function(){
      _this.setData({
        loading: false,
        newsList: ARR
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
