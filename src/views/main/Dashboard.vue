<template>
  <div class="p-4 md:p-12 text-gray-700 w-full h-full overflow-y-auto">
    <h1 class="text-lg font-medium mb-6">Basic statistics</h1>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <card-base>
        <spline-chart></spline-chart>
      </card-base>

      <card-base>
        <apex-column-with-data-labels></apex-column-with-data-labels>
      </card-base>

      <card-base>
        <apex-simple-pie-chart></apex-simple-pie-chart>
      </card-base>

      <card-base>
        <bubble-chart></bubble-chart>
      </card-base>
    </div>
  </div>
</template>

<script>
import ApexColumnWithDataLabels from '../../components/charts/ApexColumnWithDataLabels.vue'
import ApexSimplePieChart from '../../components/charts/ApexSimplePieChart.vue'
import CardBase from '../../components/charts/CardBase.vue'
import BubbleChart from '../../components/charts/BubbleChart.vue'
import SplineChart from '../../components/charts/SplineChart.vue'

export default {
  components: {CardBase, SplineChart, ApexColumnWithDataLabels, ApexSimplePieChart, BubbleChart}
}
</script>

<style lang="scss" scoped>

</style>