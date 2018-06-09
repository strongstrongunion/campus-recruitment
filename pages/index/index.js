//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    school:'中南大学',
    schools:[
      {
        name:'中南大学',
        active:'nav-item-active'
      },
      {
        name:'湖南大学',
        active:''
      },
      {
        name: '湖南师范大学',
        active: ''
      },
      {
        name: '长沙学院',
        active: ''
      }
    ],
    talks:[
      {
        img:'./xianxia.jpg',
        title:'标题',
        desc:'地点 时间'
      }
    ]
  },
  chooseSchool:function(e){
    let idx = e.target.dataset;
    console.log(idx);
    if(idx){
      // console.log(this.data.schools)
      this.data.schools.map(item=>{
        // console.log(item,item.active)
        item.active=''
      });
      // this.data.schools[idx].active ='nav-item-active';
    }
  }
})
