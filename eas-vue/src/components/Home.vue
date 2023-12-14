<template>
    <div class="home-page">
      <div class="background-color">
        <h1 class="main-text">Jangan Sampai Kelewatan!</h1>
        <p class="sub-text">Periode Pendaftaran: 10-17 Desember 2023</p>
        <button class="form-button" @click="goToForm">Daftar</button>
      </div>
    </div>
  </template>
  
  <script>
  import Form from '@/components/Form.vue'
  export default {
    methods: {
      goToForm() {
        // this.$router.push('/form');
        this.$router.push({ name: 'Form' });
      }
    },
    components: {
        Form
    }
  };
  </script>
  
  <style scoped>

.home-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-color {
  text-align: center;
  background-color: #4a5568; /* Change to the desired background color */
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
}

.main-text {
  font-family: 'DancingScript-Regular', cursive;
  text-align: center;
  color: #ffffff;
  font-size: 5.5rem;
  margin-top: 20px; /* Adjusted margin for better spacing */
}

.sub-text {
  font-family: 'Caveat', cursive;
  text-align: center;
  color: #ffffff;
  font-size: 2rem;
}

.form-button {
  font-family: 'Caveat', cursive;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 1.5rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.form-button:hover {
  background: #ffffff;
  color: #000000;
}
</style>