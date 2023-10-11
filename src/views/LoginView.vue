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

<script>
import axios from 'axios';
// import { ref } from 'vue';

export default {
  data: () => ({
    Name: '',
    Password: '',
    Admin: 0
  }),
  methods: {
    login() {
      const userData = {
        name: this.Name,
        password: this.Password
      };
      axios.post('http://127.0.0.1:8848/login', userData)
        .then(response => {
          // Handle the response
          console.log(response);
          console.log(response.data);
          console.log(response.data.success);
          if (response.data.success == true) {
            alert('Login success!');
            this.$router.push('/user');
          }
          else {
            alert('Login failed!');
          }
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }
  }
}
</script>
