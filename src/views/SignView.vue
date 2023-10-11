<template>
  <br><br><br><br><br>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="Name" label="Name"></v-text-field>

      <v-text-field v-model="Email" label="Email"></v-text-field>

      <v-text-field v-model="Password" label="Password"></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="sign">Sign</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    Name: '',
    Email: '',
    Password: ''
  }),
  methods: {
    sign() {
      const userData = {
        name: this.Name,
        email: this.Email,
        password: this.Password
      };
      axios.post('http://127.0.0.1:8848/users', userData)
        .then(response => {
          // Handle the response
          console.log(response.data);
          if(response.data.success==true){
            alert('Sign success!');
            this.$router.push('/login');
          }
          else {
            alert('Sign failed!');
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
