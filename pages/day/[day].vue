<template>
  라우터
  {{ route.params.day }}
  <!-- <button>{{data[0]}}</button> -->
</template>
<script setup lang="ts">
interface Days{
  id:number,
  day:number
}
const route =  useRoute()
// const day = Number(route.params.day)
// const {data}= await useFetch<Days[]>('/api/hello')

</script>