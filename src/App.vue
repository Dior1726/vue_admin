<template>
  <div id="app" class="w-full h-screen">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
#app *::-webkit-scrollbar-track
{
  border-radius: 12px;
}

#app *::-webkit-scrollbar
{
  width: 16px;
}

#app *::-webkit-scrollbar-thumb
{
  border-radius: 8px;
  background-color: #d1cbcb;
  background-clip: padding-box;
  border: 5px solid transparent;
}

</style>
