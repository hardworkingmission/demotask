<script>
import SideBar from './SideBar.vue';
import NavBar from './NavBar.vue';

export default {
  components: {
    SideBar,
    NavBar,
  },
};
</script>
<template>
  <div class="w-full">
    <div class="w-full">
      <NavBar />
    </div>
    <div class="w-full flex justify-between">
      <div
        class="w-1/6 p-5 h-[100vh] bg-red-400 absolute top-[0] text-center rounded-r-lg drop-shadow-xl"
      >
        <div class="my-5">
          <router-link class="text-2xl font-bold" to="/">Demo</router-link>
        </div>
        <ul class="list-none">
          <router-link class="" to="/homecontent"
            ><font-awesome-icon
              icon="fa-solid fa-home"
              class="mr-2"
            />Home</router-link
          >
        </ul>
      </div>
      <div class="w-5/6 absolute right-0"><router-view /></div>
    </div>
  </div>
</template>
