<template>
    <div class="index">
                <!--bb props中的参数-->
      <chart-one :bb="lic" ></chart-one>
<!--                  对传递事件设置事件函数   clicknow-->
      <chart-two @clicknow="clicknow"></chart-two>
      <span>子传父{{count}}</span>
    </div>
</template>

<script>
  import ChartOne from "./common/ChartOne";
  import ChartTwo from "./common/ChartTwo";
    export default {
        name: "Index",
        components:{
          ChartOne,
          ChartTwo
        },
        data(){
          return {
            //子传父
            lic:[
                {id:0,text:'苹果'},
                {id:1,text:'香蕉'},
                {id:2,text:'橙子'},
            ],
            // 父传子
          count:0
          }

        },
        methods:{
          clicknow(count){
            console.log('子传父数据',count)
            this.count=count

          }
        }
    }
</script>

<style scoped>

</style>
