<template>
  <li>
    순서:{{props.id}}
    할일:{{ props.title }}
    완료:{{ props.done }} 
  </li>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'
// interface ToDo{
//   item:string,
//   id:number,
//   done:boolean
// }
const props = defineProps({
  title:String,
  id:Number,
  done:Boolean
})

</script>