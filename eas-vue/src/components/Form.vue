<template>
    <div>
      <h2>Pendaftaran Lomba</h2>
      <!-- Form Daftar -->
      <form v-on:submit.prevent="Daftar">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="nama" required>

        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>

        <label for="asal">Asal Sekolah:</label>
        <input type="asal" id="asal" v-model="asal" required>
  
        <button type="submit">Daftar</button>
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
        nama: ref(""),
        email: ref(""),
        asal: ref("")
      };
    },
    methods: {
      async Daftar() {
        const router = useRouter();
        try {
          const res = await fetch('http://localhost:3000/api/daftar', {
            credentials: "include",
            method: 'POST',

            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nama: this.nama,
              email: this.email,
              asal: this.asal,
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
  