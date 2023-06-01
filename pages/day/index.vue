<template>
  데이 index
  <ul>
    <li v-for="days in data"><NuxtLink :to="`/day/${days.day}`"> {{ days.day }}</NuxtLink></li>
    <!-- <li><NuxtLink to="/day/1">1</NuxtLink></li>
    <li><NuxtLink to="/day/2">2</NuxtLink></li>
    <li><NuxtLink to="/day/3">3</NuxtLink></li>
    <li><NuxtLink to="/day/99">4</NuxtLink></li> -->
 
   
   
  

  </ul>
</template>
<script setup lang="ts">
interface Days{
  id:number,
  day:number
}
const {data}= useFetch<Days[]>('/api/days')
// const words = fetch(` ${import.meta.env.VITE_BASE_URL}/words/word=${}'`)

</script>