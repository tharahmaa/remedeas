<template>
    <nav :class="{ 'bg-gray': isNavBackgroundVisible }" class="text-white fixed top-0 w-full navbar-shrink z-50" id="mainNav">
      <div class="container mx-auto flex items-center justify-between py-2 px-4">
        <button class="lg:hidden text-white" @click="toggleNav">
          <span v-if="!isNavOpen">Menu</span>
          <span v-else>Close</span>
          <i class="fas" :class="{ 'fa-bars': !isNavOpen, 'fa-times': isNavOpen }"></i>
        </button>
  
        <div class="hidden lg:flex flex-grow justify-end items-center" :class="{ 'flex-col': isNavOpen, 'hidden': !isNavOpen }">
          <router-link class="nav-link" to="/form">Form</router-link>
          <router-link class="nav-link" to="/status">Status</router-link>
        </div>
  
        <!-- Add the dropdown for mobile -->
        <div class="lg:hidden" v-if="isNavOpen">
          <router-link class="nav-link" to="/form">Form</router-link>
          <router-link class="nav-link" to="/status">Status</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavOpen: false,
        isNavBackgroundVisible: false,
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
      },
      navbarShrink() {
        const isScrolled = window.scrollY !== 0;
        this.isNavBackgroundVisible = isScrolled;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.navbarShrink);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.navbarShrink);
    },
  };
  </script>
  
  <style scoped>
  /* Component-specific styles */
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #a0aec0;
  }
  
  .bg-custom {
    background-color: #4a5568; /* Change to the desired color */
  }
  
  .navbar-shrink .bg-custom {
    background-color: #4a5568; /* Change to the same color as .bg-custom */
  }
  
  .navbar-shrink {
    padding: 0.2rem 1rem; /* Adjust the padding as needed */
  }
  
  /* Adjustments for better mobile responsiveness */
  button {
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  button i {
    margin-left: 0.5rem;
  }
  </style>
  