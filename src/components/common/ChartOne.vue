<template>
  <div class="chartone" style="width: 500px;margin-left: 50px">
    <highcharts :options="chartOptions"></highcharts>
    <div style="text-align: center"><button @click="data_save()">保存</button></div>

    <span v-for="item in bb" :key="item.id">
      <span>{{item.text}}</span><br>
    </span>

  </div>
</template>

<script>
  export default {
    name: "ChartOne",
    props:["bb"],
    data() {
      return {

        chartOptions: {
        chart: {
            type: 'column'
        },
        title: {
            text: '某农业公司2010年农产品销量'
        },
        xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        credits: {
            enabled: true
        },
        plotOptions: {
            column: {
                // 关于柱状图数据标签的详细配置参考：https://api.hcharts.cn/highcharts#plotOptions.column.dataLabels
                dataLabels: {
                    enabled: true,
                    // verticalAlign: 'top', // 竖直对齐方式，默认是 center
                    inside: true
                }
            },
          series: {
          pointPadding: 0, //数据点之间的距离值
          groupPadding: 0, //分组之间的距离值
          borderWidth: 0,
          shadow: false,
          pointWidth:20 //柱子之间的距离值
}
        },
        series: [{
            name: '凌云农业',
            			data: []
        }],

        }
      }
    },
    created() {
       this.get_number();
       this.update_number();

    },
    methods:{
      get_number(){
        let _this=this;
        this.$axios.get(this.$settings.HOST+"/api/getchartone/").then(

            response=>{
               console.log(response.data)
              this.chartOptions.series[0].data=response.data
               _this.$message({
               message:error.response.data,
               type:"success",
               duration:'1500',
            })
            }
          ).catch(error=>{
          console.log(error.response.data,'59')
            _this.$message({
               message:error.response.data,
               type:"warning",
               duration:'1500',
            })

          })
      },
      update_number(){
        let _this=this
             setInterval( ()=> {

          this.$axios.post(this.$settings.HOST+"/api/updatechartone/").then(
            response=>{

              this.chartOptions.series[0].data=response.data
            _this.$message({
               message:error.response.data,
               type:"success",
               duration:'1500',
            })
            }
          ).catch(error=>{
            _this.$message({
               message:error.response.data,
               type:"warning",
               duration:'1500',
            })

          })
      },10000)
      },
      data_save(){
        let _this=this
      this.$axios.post(this.$settings.HOST+"/api/savecharttwo/",{
        data:this.chartOptions.series[0].data
      }).then(response=>{

            _this.$message({
               message:response.data,
               type:"success",
               duration:'1500',
            })
      }).catch(
        error=>{
            _this.$message({
               message:error.response.data,
               type:"warning",
               duration:'1500',
            })
        }
      )
      },
    }
  }
</script>

<style scoped>

</style>
