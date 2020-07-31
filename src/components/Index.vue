<template>
    <div class="index">
      <chart-one></chart-one>
      <chart-two></chart-two>
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
      //   data() {
      //     return {
      //         chartOptions: {
      //             series: [{
      //                 data: [3, 4, 5] // sample data
      //             }]
      //         }
      //     }
      // }
    }
</script>

<style scoped>

</style>
