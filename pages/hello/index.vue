<template>
    <div>hello
        <ul>
            <li>{{data}}</li>
        </ul>
    </div>

</template>
<script lang="ts" setup>

const { data } = await useFetch('/api/hello')
// console.log(data)
</script>
