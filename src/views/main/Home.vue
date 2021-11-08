<template>
  <div class="home w-full h-full p-12 overflow-y-auto">
    <h1 class="text-3xl font-semibold text-gray-700">Hey there, Dior</h1>
    <p class="mt-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate.</p>
  
    <!-- ### Cards ### -->
    <div class="mt-8">
      <h4 class="font-medium text-lg mb-4 text-gray-700">Your cards</h4>

      <div class="container flex flex-col gap-8 lg:flex-row w-full items-center">
        <div 
          v-for="(item, i) in 2" 
          :key="i" 
          class="card-item rounded-3xl text-white shadow-lg transition-all hover:shadow-2xl  p-8 w-3/4 lg:w-1/2"
        >
          <div class="text-gray-50 text-lg">Visa Standart</div>
          <div class="text-3xl font-semibold">$7,983.02</div>
          <div class="mt-6 text-lg">4012 4105 9552 1726</div>
          <div class="mt-6 flex items-center">
            <div class="flex flex-col">
              <div class="text-xs">SVC</div>
              <div>***</div>
            </div>
            <div class="flex flex-col ml-3 items-top">
              <div class="text-xs">EXP.</div>
              <div>05/25</div>
            </div>
            <div class="p-2 flex justify-center items-center border border-white rounded-full ml-auto">
              <i class="bx bx-cog"></i>
            </div>
          </div>

        </div>
      </div>

    </div>
    
    <!-- ### Table ### -->
    <div class="mt-8">
      <div class="text-medium text-lg text-gray-700 font-semibold mb-4">Recent transactions</div>

      <div class="relative overflow-x-auto text-gray-700">
        <div class="table-head flex gap-5 w-full border-b text-gray-300 text-sm border-gray-300">
          <div class="w-3/5 py-4">Transaction name </div>
          <div class="w-1/5 py-4">Amount </div>
          <div class="w-1/5 py-4">Date </div>
          <div class="w-1/5 py-4">Time </div>
          <div class="w-1/5 py-4 text-right">Actions </div>
        </div>

        <div class="table-body my-4">
          <div class="flex gap-5 items-center mb-2" v-for="data in tableData" :key="data.id">
            <div class="w-80 md:w-3/5 py-4 font-semibold text-gray-700">
              <span class="hidden md:inline p-4 text-white rounded-lg mr-4 text-lg bg-purple-500">
                <i :class="data.icon"></i>
              </span> {{ data.name }}
            </div>
            <div class="w-1/5 py-4 font-semibold" 
              :class="{'text-green-500': data.amount > 0, 'text-red-500': data.amount < 0}" 
            > 
              {{ data.amount }}$
            </div>
            <div class="w-1/5 py-4 font-medium"> {{ data.date }} </div>
            <div class="w-1/5 py-4 font-medium"> {{ data.time }} </div>
            <div class="w-1/5 text-right"> 
              <button 
                class="font-normal text-purple-600 border-2 transition-all border-purple-600 hover:bg-purple-600 hover:text-white rounded-lg px-4 py-2">
                  Details
              </button> 
            </div>
          </div>
        </div>

        <div class="table-footer w-full flex gap-6 items-center">
          <div class="w-1/2">
            <input 
              type="text" 
              class="w-full px-4 py-3 rounded-lg border border-gray-400 focus:bg-transparent outline-none" 
              name="" id="" placeholder="Search transactions history..."
            >
          </div>
          <div class="w-1/4 font-normal cursor-pointer text-purple-600 border border-purple-600 px-4 py-3 text-center rounded-lg">
            See all history
          </div>
          <div @click="visible = !visible" 
            class="w-1/4 font-normal cursor-pointer text-white shadow-lg bg-purple-600 px-4 py-3 text-center rounded-lg">
            New transfer
          </div>
        </div>
      </div>
    </div>

    <!-- ### Modal component ### -->
    <div 
      class="modal w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black z-50 bg-opacity-75" 
      v-show="visible"
    >
      <div class="modal-content relative w-100 bg-white rounded-xl  overflow-hidden">
        
        <button class="absolute top-5 right-5 text-2xl text-gray-600" @click="visible = false">
          <i class="bx bx-x-circle"></i>
        </button>

        <div class="modal-header p-5 bg-gray-200">
          Header
        </div>
        <div class="modal-body p-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi itaque harum consequuntur, mollitia minima nesciunt eveniet impedit dignissimos vel architecto tempore, explicabo placeat aut? Voluptatum delectus provident dolore vel autem?
        </div>
        <div class="modal-footer p-5 bg-gray-200">
          Footer
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  mounted() {},
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'Restaurant food',
          amount: 23.3,
          date: '2/02',
          time: '14:32',
          icon: 'bx bx-restaurant'
        },
        {
          id: 2,
          name: 'From Joe',
          amount: 50.01,
          date: '12/2',
          time: '12:32',
          icon: 'bx bx-user-circle'
        },
        {
          id: 3,
          name: 'Shopping cashback',
          amount: -4.10,
          date: '12/2',
          time: '15:32',
          icon: 'bx bxs-shopping-bag-alt'
        },
        {
          id: 4,
          name: 'Restaurant food',
          amount: -93.3,
          date: '2/02',
          time: '14:32',
          icon: 'bx bx-restaurant'
        },
        {
          id: 5,
          name: 'Salary',
          amount: 40.1,
          date: '12/2',
          time: '12:32',
          icon: 'bx bx-user-circle'
        },
        {
          id: 6,
          name: 'Shopping',
          amount: -4.10,
          date: '12/2',
          time: '15:32',
          icon: 'bx bxs-shopping-bag-alt'
        }
      ],
      visible: false
    }
  },
  computed: {
    bgClasses() {
      const classes = ['bg-purple-600', 'bg-green-600', 'bg-yellow-600', 'bg-pink-600']
      const index = Math.floor(Math.random() * classes.length)
      return classes[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  background: url('../../assets/images/bg-small.png') no-repeat;
  background-size: cover;
}
</style>
