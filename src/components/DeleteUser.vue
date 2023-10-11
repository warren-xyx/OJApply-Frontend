<template>
  
  <v-btn type="submit" block class="mt-2" @click="deleteUser">Query all users</v-btn>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';


const usersData = ref([]);

const deleteUser = () => {
  axios.get('http://127.0.0.1:8848/users')
    .then(response => {
      console.log(JSON.stringify(response.data));
      usersData.value = response.data.data;
      console.log(usersData.value);
    })
    .catch(error => {
      console.log(error);
    });
};
</script>
