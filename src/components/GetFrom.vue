<template>
  <v-btn type="submit" block class="mt-2" @click="fetchForm">Fetchform</v-btn>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          User Id
          {{ store.user_id }}
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
      <tr v-for="item in formData" :key="item.id">
        <td>{{ item.user_id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.gender }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import {store} from '@/components/store';

const formData = ref([]);

const fetchForm = () => {
  axios.get('http://127.0.0.1:8848/form/' + store.user_id)
    .then(response => {
      console.log(JSON.stringify(response.data));
      formData.value=response.data.data;
      console.log(formData.value);
    })
    .catch(error => {
      console.log(error);
    });
};
</script>
