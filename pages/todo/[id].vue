<template>
  글제목?
{{ post}}
</template>
<script setup lang="ts">
interface Posts{
  id: number
  userId: string,
  title:string
  content:string
  date:string
}
const route =  useRoute()
console.log(route.params.id)
const post = await $fetch<Posts>(`${import.meta.env.VITE_BASE_URL}/view?id=${route.params.id}`).catch((error) => error.data)

</script>