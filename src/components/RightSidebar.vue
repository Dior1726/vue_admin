<template>
  <div class="right-sidebar w-96 hidden lg:block bg-white px-6 pl-12 pt-12 pb-8 rounded-r-2xl -ml-6 overflow-y-auto text-gray-700">

    <div class="flex items-center justify-center flex-col rounded-full mb-6">
      <img src="../assets/images/1.jpg" class="rounded-full w-40 h-40 object-cover shadow-2xl" alt="">
      <div class="mt-6 font-semibold text-gray-700 text-2xl">Dior T</div>
    </div>

    <div class="flex w-full justify-between mb-8">
      <div class="text-center">
        <div class="text-sm text-gray-500">Total balance</div>
        <div class="font-semibold text-xl">$17,026.02</div>
      </div>
      <div class="text-center">
        <div class="text-sm text-gray-500">Acc. status</div>
        <div class="font-semibold text-xl">Activated</div>
      </div>
    </div>

    <div 
      class="p-4 rounded-xl cursor-pointer bg-gray-100 mb-4 flex items-center"
      v-for="item in 3"
      :key="item"
    >
      <div class="mr-5 text-xl border border-gray-500 p-2 flex items-center justify-center rounded-lg">
        <i class="bx bxs-user"></i>
      </div>
      <div class="font-medium text-lg">
        Account settings
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