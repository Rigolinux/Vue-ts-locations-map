<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';


export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    usePlacesStore();
  },
});
</script>
