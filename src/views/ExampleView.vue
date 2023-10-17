<template>
  <h1>Example</h1>
  <hr>
  <div>
    <v-btn type="submit" block>Double count is {{  store1.doubleCount }}</v-btn>
    <v-btn type="submit" block>Double count plus one is {{  store1.doublePlusOne }}</v-btn>
    <v-btn type="submit" block @click="store">Count: + {{ store1.count }}</v-btn>
    <v-btn type="submit" block @click="reset">Reset</v-btn>
    <v-btn type="submit" block @click="patch">Patch</v-btn>
    <v-btn type="submit" block @click="patchT">PatchT</v-btn>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/store/example';
  // import { storeToRefs } from 'pinia'

  const store1 = useCounterStore();
  // const { name, doubleCount } = storeToRefs(store1)
  // const { increment } = store1;

  const store = () => {
    store1.increment()
  };

  const reset = () => {
    store1.$reset()
  };

  const patch = () => {
    store1.$patch({
      count: store1.count * 2
    })
  };

  const patchT = () => {
    store1.$patch({
      count: 66
    })
  };


</script>
