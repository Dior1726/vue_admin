<template>
  <div class="left-sidebar w-60 p-6 transition-all" :class="{'-ml-48': hideMenu}">
    <button @click="hideMenu = !hideMenu" class="absolute top-5 left-3">
      <i class="bx text-2xl text-purple-500" :class="{'bx-menu': hideMenu, 'bx-menu-alt-left': !hideMenu}"></i>
    </button>
    <div class="logo text-4xl font-medium text-purple-500 text-center my-6">
      <i class="bx bxl-apple"></i> Iboard
    </div>

    <div class="menu">
      <ul class="text-lg font-medium">
        <li v-for="(item, index) in mmm" :key="index" 
          class="mb-3 p-3 text-gray-700 hover:text-purple-500 rounded-md transition-colors"
        >
          <router-link :to="item.path" exact> 
            <span class="mr-2"><i :class="item.icon"></i></span> 
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>

    <div 
      class="mt-20 p-6 bg-white text-center rounded-xl shadow-2xl ml-0 transition-all"
      :class="{'mr-8': hideMenu}"
    >
      <div>How would you rate us?</div>
      <div class="mt-2">
        🌟🌟🌟🌟🌟
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mmm: [
      {
        path: '/',
        name: 'Home',
        icon: 'bx bxs-home'
      },
      {
        path: '/profile',
        name: 'Profile',
        icon: 'bx bxs-user-circle'
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'bx bxs-grid-alt'
      },
      {
        path: '/settings',
        name: 'Settings',
        icon: 'bx bxs-cog'
      },
      {
        path: '/auth',
        name: 'Login/Logout',
        icon: 'bx bxs-log-in'
      }
    ],
    hideMenu: false
  })
}
</script>

<style lang="scss" scoped>
.router-link-exact-active, 
.router-link-active {
  color: #8b5cf6;
}

.left-sidebar {
  min-width: 230px;
}
</style>