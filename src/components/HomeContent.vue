<template>
  <div class="p-5 flex flex-col">
    <div
      id="view"
      class="view transition-all duration-300 delay-1000 ease-out"
      :class="[viewAgree ? 'order-2 mt-3 z-1' : 'mb-3']"
    >
      <div
        class="bg-red-400 p-3 flex justify-center align-center relative"
        :class="[viewAgree ? 'rounded-t-lg' : 'rounded-lg']"
      >
        <h3 class="text-center text-white font-bold">View</h3>
        <div class="text-right absolute right-10">
          <button @click="viewToggle">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </button>
        </div>
      </div>
      <div
        class="bg-gray-300 p-3 transition-all duration-500 delay-500 ease-out"
        :class="[
          viewAgree
            ? 'rounded-b-lg h-[80vh] opacity-100'
            : 'invisible h-0 p-0 opacity-0',
        ]"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda rerum dolores necessitatibus explicabo accusamus nostrum?
          Debitis nam pariatur sit dolor numquam quam, distinctio doloribus
          praesentium corporis, suscipit aperiam tempore?
        </p>
      </div>
    </div>
    <div
      id="user"
      class="view transition-all duration-300 delay-1000 ease-out"
      :class="[userAgree ? 'order-2 mt-3 z-1' : 'mb-3']"
    >
      <div
        class="bg-red-400 p-3 flex justify-center align-center relative"
        :class="[userAgree ? 'rounded-t-lg' : 'rounded-lg']"
      >
        <h3 class="text-center text-white font-bold">User</h3>
        <div class="text-right absolute right-10">
          <button @click="userToggle">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </button>
        </div>
      </div>
      <div
        class="bg-gray-300 p-3 transition-all duration-500 delay-500 ease-out"
        :class="[
          userAgree
            ? 'rounded-b-lg h-[80vh] opacity-100'
            : 'invisible h-0 p-0 opacity-0',
        ]"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda rerum dolores necessitatibus explicabo accusamus nostrum?
          Debitis nam pariatur sit dolor numquam quam, distinctio doloribus
          praesentium corporis, suscipit aperiam tempore?
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { userAgree: false, viewAgree: false };
  },
  methods: {
    userToggle(event) {
      if (event) {
        this.userAgree = true;
        this.viewAgree = false;
      }
    },
    viewToggle(event) {
      if (event) {
        this.userAgree = false;
        this.viewAgree = true;
      }
    },
  },
};
</script>
