<template>
  <div class="charttwo" style="width: 500px;float: right;margin-top: -400px;margin-right: 50px">
    <highcharts :options="chartOptions"></highcharts>

  </div>
</template>

<script>
  export default {
    name: "chartTwo",
    data() {
      return {
        chartOptions: {
          title: {
            text: '数据保存直线图'
          },
          xAxis: {
            categories: []
          },
          series: []
        }
      }
    },
    created() {
      this.get_data()
    },
    methods: {
      get_data() {
        let _this = this;
        this.$axios.get(this.$settings.HOST + "/api/getcharttwo/").then(
          response => {
            console.log(response.data)
            this.chartOptions.xAxis=response.data["sigle_number"]
            this.chartOptions.series= response.data["series"]
            _this.$message({
              message: error.response.data,
              type: "success",
              duration: '1500',
            })
          }
        ).catch(error => {
          _this.$message({
            message: error.response.data,
            type: "warning",
            duration: '1500',
          })

        })
      }
    }
  }
</script>

<style scoped>

</style>
