<template>
  라우터
  <ul>
    <li v-for="word in words" :key="word.id">
      <div>{{ word.eng }}</div>
      <div>{{ word.kor }}</div>
      <div>{{ word.isDone }}</div>
      <button @click="deleteWord(word.id)">삭제</button>
    </li>
  </ul>
  

  <!-- <button>{{data[0]}}</button> -->
</template>
<script setup lang="ts">

interface Words{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}
const route =  useRoute()
const words = ref<Words[]>([])
words.value = await get()
// const words = fetch(`${import.meta.env.VITE_BASE_URL}/words?day=${route.params.day}`).then(res=>res.json()).then(d=>console.log(d))
function deleteWord(id:number){
  fetch(`${import.meta.env.VITE_BASE_URL}/words/${id}`,{
    method:'DELETE'
  }).then(res=>{
    if(res.ok){
      alert('삭제완료')
      let newWords = words.value.filter(word=> word.id !== id) 
      words.value = newWords

    }
  })
}

async function get(){
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/words?day=${route.params.day}`)
  const res  = await data.json()
  return res
}

// const {data}= useFetch<Days[]>('/api/words')
</script>