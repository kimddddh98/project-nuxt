
<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      제목 : {{ post.title }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useUserStore } from '~~/stores/user';
import {ref} from'vue'
interface Posts{
  id: number
  userId: string,
  title:string
  content:string
  date:string
}
const { data:posts } = await useFetch<Posts[]>('/api/view')



</script>
<style lang="scss">

</style>