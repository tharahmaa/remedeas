<template>
    <div>
      <h2>Status</h2>
      <!-- Cek Status -->
      <form v-on:submit.prevent="Status">
        <label for="status">Status:</label>
        <!-- <input type="text" id="status" v-model="status" required>
  
        <button type="submit">Cek</button> -->
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  // const router = useRouter();

  export default {
    data() {
      return {
        status: ref("")
      };
    },
    methods: {
      async Daftar() {
        const router = useRouter();
        try {
          const res = await fetch('http://localhost:3000/api/users/Daftar', {
            credentials: "include",
            method: 'POST',

            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: this.status,
            }),
          });
  
          const json = await res.json();
          console.log (json)
          // Check the response or handle accordingly
          if (res.ok) {
            alert('Sukses Mendaftar!');
   
          } else {
            alert('Gagal Mendaftar.');
          }
        } catch (error) {
          console.error('Error saat mendaftar:', error);
          alert('Terjadi error saat mendaftar. Coba lagi lain kali.');
        }
      }
    }
  };
  </script>
  