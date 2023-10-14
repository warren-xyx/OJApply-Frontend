<template>
  <br><br><br><br><br>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="Name" label="Name"></v-text-field>
      <v-text-field v-model="Password" type="password" label="Password"></v-text-field>
      <!-- <v-text-field v-model="Admin" label="Admin" placeholder="true or false"></v-text-field> -->
      <v-btn type="submit" block class="mt-2" @click="login">Login</v-btn>
      <v-btn block class="mt-2" to="/sign">Sign up</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import router from '@/router';
import axios from 'axios';
import { ref, reactive } from 'vue';
import {store} from '@/components/store'

const Name = ref('');
const Password = ref('');

const userData = reactive({
  "name": Name,
  "password": Password
});
const login = () => {
  axios.post('http://localhost:8848/login', userData)
    .then(response => {
      console.log(response);
      console.log(response.data.data);
      if (response.data.success == true) {
        const data=reactive({
          user_id: response.data.data.id,
        });
        console.log(data.user_id)
        store.increment(data);
        console.log(store.user_id);
        alert('Login success!');
        router.push('/user');
      }
      else {
        alert('Login failed!');
      }
    })
    .catch(error => {
      console.error(error);
    })
};

// export default {
//   data: () => ({
//     Name: '',
//     Password: '',
//     Admin: 0
//   }),
//   methods: {
//     login() {
//       const userData = {
//         name: this.Name,
//         password: this.Password
//       };
//       axios.post('http://127.0.0.1:8848/login', userData)
//         .then(response => {
//           // Handle the response
//           console.log(response);
//           console.log(response.data);
//           console.log(response.data.success);
//           if (response.data.success == true) {
//             alert('Login success!');
//             this.$router.push('/user');
//           }
//           else {
//             alert('Login failed!');
//           }
//         })
//         .catch(error => {
//           // Handle the error
//           console.error(error);
//         });
//     }
//   }
// }
</script>
