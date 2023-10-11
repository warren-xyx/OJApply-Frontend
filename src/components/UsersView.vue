<template>
  <v-btn type="submit" block class="mt-2" @click="fetchUsers">Query all users</v-btn>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Id
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in usersData" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';


const usersData = ref([]);

const fetchUsers = () => {
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
