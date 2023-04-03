<template>
    <div>

        <h3>{{store.user}}</h3>
        <button @click="store.test">스토어 체인지</button>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from "../stores/user"

const store = useUserStore()
</script>