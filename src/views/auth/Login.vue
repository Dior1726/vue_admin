<template>
	<div class="w-full h-full flex items-center justify-center flex-col p-6 text-gray-700">
		<div class="bg-black max-w-lg w-full bg-opacity-30 backdrop-filter backdrop-blur p-8 rounded-2xl">
			<div class="text-5xl font-medium text-white text-center mt-3 mb-6">
				<i class="bx bxl-apple"></i> 
				Iboard
			</div>
			<div class="p-4 text-lg font-medium">
				<div class="w-full mb-6">
					<input type="email" 
						class="w-full p-2 outline-none text-white bg-transparent placeholder-gray-400 border-b border-white" 
						placeholder="Email" name="" required id="inp1"
					>
				</div> 
				<div class="w-full mb-6">
					<input type="password" 
						class="w-full p-2 outline-none text-white bg-transparent placeholder-gray-400 border-b border-white" 
						placeholder="Password" name="" id="inp2" required
					>
				</div>
				<div class="text-center w-full">
					<button
						@click="loginUser()" 
						class="px-6 py-3 w-full bg-purple-500 text-lg font-medium text-white rounded-md transition-all hover:bg-purple-600"
					>
							Login
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			loginUser() {
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="scss" scoped>
i.bx {
	filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 1));
}
</style>