
<template>
    <div>
        <ul v-if="store.todos.length>0">
            <list

            v-for="(item,index) of store.todos" :key="index"
            :title="item.item"
            :id="item.id"
            :done="item.done"
            />
        </ul>
        <input type="text" v-model="todoValue">
        <button @click="store.addTodo(todoValue)">추가</button>
        <button>삭제</button>
        <!-- <input type="time" name="" id=""> -->
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '~~/stores/user';
import {ref} from'vue'

  const store = useUserStore() 
  const todoValue = ref('')
  // console.log(store.todos)
</script>