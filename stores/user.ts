import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      user: 'kim',
    }),
    getters: {

    },
    actions: {
      test(){
        this.user = 'dong'
      }
    },
  })