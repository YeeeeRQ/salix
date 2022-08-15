<template>
  <div>Vite + Vue</div>
  <div>
    <sx-button type="primary">hello</sx-button>
    <sx-button
      type="default"
      :loading="isLoading"
      @click="handleLoadingBtnClick"
    >
      <span v-text="isLoading ? 'Loading...' : 'Done'"></span>
    </sx-button>
  </div>
</template>

<script setup>
import { h, ref } from "vue";

const isLoading = ref(true);
const handleLoadingBtnClick = () => {
  isLoading.value = !isLoading.value;
  console.log("isLoading:", isLoading.value);
};
</script>
