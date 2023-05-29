<template>
    <div>hello
        <ul>
            <li v-for="d in data" :key="d.id">{{d.day}}</li>
            
             <!-- <li>{{ data }}</li> -->
        </ul>
    </div>

</template>
<script lang="ts" setup>
// const data ='asdasd'

interface Days{
  id:number,
  day:number
}
const {data}= useFetch<Days[]>('/api/days')

</script>

