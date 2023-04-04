<template>
    <div>hello
        <ul>
            <li>{{row}}</li>
        </ul>
    </div>

</template>
<script lang="ts" setup>

const { data:row } = await useFetch('/api/hello')
// console.log(data)
</script>
