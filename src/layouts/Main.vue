<template>
	<div class="main-layout w-full h-screen bg-gray-100 overflow-hidden flex py-6 pr-6">
		
		<left-sidebar />

		<main class="main-content bg-white flex-1 rounded-2xl shadow-2xl">
			<router-view/>
		</main>

		<right-sidebar v-if="!profilePage" />

	</div>
</template>

<script>
import LeftSidebar from '../components/LeftSidebar.vue'
import RightSidebar from '../components/RightSidebar.vue'

export default {
	components: { 
		LeftSidebar, 
		RightSidebar 
	},
	computed: {
      profilePage() {
        if (this.$route.name === 'Profile') {
          return true
        }
        return false
      }
    }
}
</script>

<style lang="scss" scoped>
.main-layout {
	position: relative;
}

.right-sidebar {
	position: relative;
}

.main-content {
	z-index: 1;
	position: relative;
}
</style>