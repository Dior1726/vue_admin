<template>
  <div class="p-6 md:p-12 text-gray-700 w-full h-full overflow-y-auto">
    <h1 class="text-xl font-semibold mb-6">Settings</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="transition shadow-lg hover:shadow-xl p-6 rounded-lg bg-gray-50" v-for="item, index in 4" :key="index">
        <h4 class="font-medium mb-3 flex items-center"> 
          <i class="bx bxs-cog mr-3 p-3 bg-purple-500 text-white rounded-md"></i> 
          Setting {{index + 1}}
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod aliquid illo veritatis natus saepe, minima eum nemo cumque, quia error eos id iste?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>