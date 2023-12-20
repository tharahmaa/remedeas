



<template>
    <div>
      <h2>Status</h2>
      <!-- Cek Status -->
      <form v-on:submit.prevent="Status">
        <label for="status">Status:</label>

        <!-- <div>Selected: {{ selected }}</div>

        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select> -->

        <form @submit.prevent="Daftar" class="status-form">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="nama" required>

        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>

        <label for="asal">Asal Sekolah:</label>
        <input type="text" id="asal" v-model="asal" required>

        <button type="submit">Cek Status</button>
      </form>

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
        // selected: '',
        status: ref(""),
        // nama: ref(""),
        // email: ref(""),
        // asal: ref(""),
        // errors: ref(""),
        // registrationSuccess: false,
      };
    },
    methods: {
      async getDataDaftar(reciverId) {
        try {
          const req = await fetch("http://localhost:3000/api/daftar", {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({
            //     nama: this.nama,
            //   email: this.email,
            //   asal: this.asal,
            //   errors: null,
            // }),
          });
          const data = await req.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
      // async Daftar() {
      //   const router = useRouter();
      //   try {
      //     const res = await fetch('http://localhost:3000/api/users/Daftar', {
      //       credentials: "include",
      //       method: 'GET',

      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //           status: this.status,
      //       }),
      //     });
  
      //     const json = await res.json();
      //     console.log (json)
      //     // Check the response or handle accordingly
      //     if (res.ok) {
      //       alert('Sukses Mendaftar!');
   
      //     } else {
      //       alert('Gagal Mendaftar.');
      //     }
      //   } catch (error) {
      //     console.error('Error saat mendaftar:', error);
      //     alert('Terjadi error saat mendaftar. Coba lagi lain kali.');
      //   }
      // }
    }
  };
  </script>
  
  <style scoped>
.status-form {
  display: flex;
  flex-direction: column;
  max-width: 300px; /* Adjust the maximum width as needed */
  margin: auto; /* Center the form horizontally */
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  padding: 10px;
}
</style>