<template>
  <div>

    <h3>{{ store.test.list }}</h3>
    <button @click="store.listSort(store.test.list)">
      정렬
    </button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "../stores/user"

const store = useUserStore()
console.log(import.meta.env.VITE_BASE_URL)
</script>