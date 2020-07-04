// pages/home/ChildComps/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type: Array,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad(){
      if(!this.data.isLoad){
        this.triggerEvent('recommendImageLoad')
        this.data.isLoad = true
      }
    }
  }
})
