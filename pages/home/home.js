// pages/home/home.js
import {
 getMultipleData,
 getGoodsData
} from '../../service/home'
const BACK_TOP_VALUE = 1500
const types = ['pop','new','sell']
Page({
  data: {
    banner: [],
    recommend: [],
    title: ['流行','新款','精选'],
    currentIndex: 0,
    currentType: 'pop',
    goods: {
      'pop': {page: 0,list: []},
      'new': {page: 0,list: []},
      'sell': {page: 0,list: []}
    },
    tabTop: 0,
    isShowBackTop: false,
    isShowTab: false
  },
  onLoad: function (options) {
    this._getMultipleData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    //console.log(options);
    const flag1 = options.scrollTop >= BACK_TOP_VALUE
    if(flag1 != this.data.isShowBackTop){
      this.setData({
        isShowBackTop: flag1
      })
    }
    const flag2 = options.scrollTop >= this.data.tabTop
    if(flag2 != this.data.isShowTab){
      this.setData({
        isShowTab: flag2
      })
    }
  },
  //------------------数据请求--------------------------
  _getMultipleData(){
    getMultipleData().then(res => {
      //console.log(res);
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list
      this.setData({
        banner,
        recommend
      })
    })
  },
  _getGoodsData(type){
    const page = this.data.goods[type].page + 1
    getGoodsData(type,page).then(res => {
      //console.log(res);
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  //------------------监听方法--------------------------
  handletabControl(event){
    //console.log(event);
    const currentIndex = event.detail.index
    this.setData({
      currentIndex,
      currentType: types[currentIndex]
    })
  },
  handleImageLoad(){
    //console.log('图片加载完成');
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      //console.log(rect);
      this.data.tabTop = rect.top
    }).exec()
  }
})