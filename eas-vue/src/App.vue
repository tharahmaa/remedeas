<template>
  <div>
    <!-- <Navbar />
    <Home /> -->
    <Form />
    <Status />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import Form from './components/Form.vue';
import Status from './components/Status.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    // Navbar,
    // Home,
    Form,
    Status,
    // Footer,
  },
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
