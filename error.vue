<template>
    <div>{{ error }}</div>
    <button @click="buttonErrorHandler">Go home</button>
</template>

<script lang="ts" setup>
defineProps(['error']);

const buttonErrorHandler = () => clearError({ redirect: '/' });
</script>

<style scoped>

</style>
