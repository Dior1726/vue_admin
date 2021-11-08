<template>
  <div class="p-12 text-gray-700 w-full h-full overflow-y-auto">
    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="mb-4 md:mb-0 md:mr-6">
        <img class="w-40 h-40 object-cover rounded-xl shadow-xl" src="../../assets/images/1.jpg" alt="">
      </div>
      <div class="text-center md:text-left">
        <h5 class="font-semibold text-xl mb-2">Dior T</h5>
        <p class="mb-2 font-medium">Frontend developer(Vuejs).</p>
        <p class="mb-2">Amount: <span class="font-semibold">$17.026.1</span></p>
        <p class="mb-2">Acc. status: <span class="font-semibold">Activated</span></p>
      </div>
    </div>
    <div class="w-full">
      <h4 class="font-medium mb-2">My skills</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 shadow-lg bg-gray-50 rounded-lg transition-all hover:shadow-xl" v-for="item, i in 5" :key="i">
          <div class="mb-3"> 
            <i class="bx bxs-extension p-3 mr-3 bg-purple-500 text-white rounded-md"></i> 
            <span class="font-medium">Key {{ i + 1 }}</span>  
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius et, aut adipisci tempore in at dolor commodi animi hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, deleniti?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},  
}
</script>

<style lang="scss" scoped>

</style>