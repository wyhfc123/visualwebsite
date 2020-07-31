import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import ChartOne from "../components/common/ChartOne";
import ChartTwo from "../components/common/ChartTwo";
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
     {
      path:'/',
      name:'index',
      component:Index,
       children:[
         {
           path:"/chartone",
           name:"ChartOne",
           component:ChartOne
         },
          {
           path:"/chartwo",
           name:"ChartTwo",
           component:ChartTwo
         }
       ]
    }
  ]
})
