import {defineStore} from 'pinia'
interface ToDo{
  item:string,
  id:number,
  done:boolean
}
interface items<T>{
  list:T[]
}
// const {data} = await useAsyncData('api',()=>$fetch('/api/hello'))
    
export const useUserStore = defineStore('user', {
  state: () => ({
    num:0 ,
    todos:[] as ToDo[],
    local:useFetch('/api/hello').data,
    test:{list:['a','c','b']} as items<string>
  }),
  getters: {
 
    // async test ()=> await $fetch('/api/hello'),
  },
  actions: {
    double() {
      this.num++
    },
    addTodo(item:string){
      this.todos.push({item:item,id:this.num,done:false})
      this.double()
    },
    listSort<T>(item:T[]){
      return item.sort()
    }

  },
})