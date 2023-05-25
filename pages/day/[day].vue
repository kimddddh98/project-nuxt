<template>
  라우터
  {{ route.params }}
</template>
<script setup lang="ts">
const route = useRoute()
</script>