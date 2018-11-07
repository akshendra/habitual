<template>
  <div class="home">
    <AddHabbit/>
    <ListHabbits/>
  </div>
</template>

<script>

import AddHabbit from '@/components/AddHabbit.vue'
import ListHabbits from '@/components/ListHabbits.vue'

export default {
  name: 'habbits',
  components: {
    AddHabbit,
    ListHabbits,
  },
};
</script>
