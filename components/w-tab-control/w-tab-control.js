// components/w-tab-control/w-tab-control.js
Component({
  data:{
    currentIndex: 0
  },
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleTabControl(event){
      //console.log(event);
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('tabControl',{index, title: this.properties.title[index]},{})
    }
  }
})
